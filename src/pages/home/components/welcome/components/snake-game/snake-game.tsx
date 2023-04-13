import { ArrowBack, Replay } from '@mui/icons-material';
import {
  Button, Grid, Typography,
} from '@mui/material';
import cx from 'classnames';
import {
  useCallback,
  useEffect, useMemo, useRef,
  useState,
} from 'react';
import { Subscription } from 'rxjs';
import { useIsWindowTop } from 'src/core/hooks';
import { IGameState } from './models';
import { GameModel } from './models/game-model';
import { SnakeModel } from './models/snake-model';
import { ISnakeGameProps } from './props.interface';
import * as S from './styled';

const SnakeGame = ({
  onClose,
}: ISnakeGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [unmounting, setUnmounting] = useState<boolean>(false);
  const [gameState, setGameState] = useState<IGameState>();
  const closeAnimationTimer = useMemo<number>(() => 650, []);
  const subscriptions$ = useRef<Subscription>(new Subscription());
  const game = useRef<GameModel>();
  const { isWindowOnTop } = useIsWindowTop();

  const handleKeyPress = (event: KeyboardEvent) => {
    game.current!.handleKeyPress(event);
  };

  const setupGame = () => {
    const canvas = canvasRef.current!;

    const Snake = new SnakeModel(canvas);
    const Game = new GameModel(
      canvas,
      Snake,
    );

    Snake.snakeFrame = Game;

    Game.renderGame();

    game.current = Game;

    window.addEventListener('keydown', handleKeyPress);

    subscriptions$.current.add(
      Game.gameState$.subscribe((gameState) => {
        setGameState(gameState);
      }),
    );
  };

  const awaitCloseAnimation = () => {
    setTimeout(() => {
      onClose();
    }, closeAnimationTimer);
  };

  useEffect(() => {
    setupGame();

    return () => {
      subscriptions$.current.unsubscribe();
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isWindowOnTop) {
      return;
    }
    setUnmounting(true);
    awaitCloseAnimation();
  }, [isWindowOnTop]);

  const renderBackButton = useCallback(() => (
    <S.GobackButton
      startIcon={<ArrowBack />}
      color="primary"
      onClick={() => {
        setUnmounting(true);
        awaitCloseAnimation();
      }}
    >
      Voltar
    </S.GobackButton>
  ), []);

  const renderScoreText = useCallback(() => (
    <S.ScoreText variant="h5">
      Pontuação:
      {' '}
      {gameState!.score}
    </S.ScoreText>
  ), [gameState]);

  return (
    <S.Wrapper $closeTimer={closeAnimationTimer} className={cx({ closed: unmounting })}>
      <S.CanvasContainer>
        <S.Canvas
          width={700}
          height={500}
          ref={canvasRef}
        />
        {gameState ? (
          <S.OverlayContainer
            className={cx({ show: gameState.paused || gameState.ended })}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            {gameState.ended ? (
              <>
                <Grid container alignItems="center" justifyContent="center" flexDirection="column">
                  <S.GameoverText variant="h1">
                    Game over
                  </S.GameoverText>
                  {renderScoreText()}
                  <Button
                    startIcon={<Replay />}
                    color="primary"
                    onClick={() => game.current!.setGameFinished(false)}
                  >
                    Recomeçar
                  </Button>
                </Grid>
                {renderBackButton()}
              </>
            ) : null}

            {gameState.paused ? (
              <S.PauseText variant="h2">
                Paused
              </S.PauseText>
            ) : null}

          </S.OverlayContainer>
        ) : null}
      </S.CanvasContainer>

      {gameState && !gameState.ended ? (
        <S.FooterContainer>
          <S.FooterSection>
            {renderScoreText()}
            {renderBackButton()}
          </S.FooterSection>

          <S.FooterSection container>
            <S.Command>
              <S.CommandKey style={{ width: 65 }} variant="h5">-</S.CommandKey>
              <Typography>Pausar</Typography>
            </S.Command>
          </S.FooterSection>

          <S.FooterSection>
            <S.CommandWrapper>
              <Typography variant="h3">Teclas de movimento</Typography>
              <S.Command>
                <S.CommandKey variant="h5">W/↑</S.CommandKey>
              </S.Command>
              <S.CommandLine>
                <S.Command>
                  <S.CommandKey variant="h5">A/←</S.CommandKey>
                </S.Command>
                <S.Command>
                  <S.CommandKey variant="h5">S/↓</S.CommandKey>
                </S.Command>
                <S.Command>
                  <S.CommandKey variant="h5">D/→</S.CommandKey>
                </S.Command>
              </S.CommandLine>
            </S.CommandWrapper>
          </S.FooterSection>
        </S.FooterContainer>
      ) : null}
    </S.Wrapper>
  );
};

export default SnakeGame;
