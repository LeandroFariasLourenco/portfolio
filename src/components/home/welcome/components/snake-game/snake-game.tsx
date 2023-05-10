'use client'

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
import { useIsWindowTop } from '@/shared/hooks';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();
  const { isWindowOnTop } = useIsWindowTop();

  const handleKeyPress = (event: KeyboardEvent) => {
    game.current!.handleKeyPress(event);
  };

  const setupGame = () => {
    const canvas = canvasRef.current!;

    const Game = new GameModel(canvas);

    const Snake = new SnakeModel(Game);

    Game.snake = Snake;
    Game.setupGame();

    game.current = Game;

    // window.addEventListener('keydown', handleKeyPress);

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
      // window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const renderBackButton = useCallback(() => (
    <S.GobackButton
      startIcon={<ArrowBack />}
      color="primary"
      onClick={() => {
        setUnmounting(true);
        awaitCloseAnimation();
      }}
    >
      {intl.formatMessage({ id: 'general.button.go-back' })}
    </S.GobackButton>
  ), [intl]);

  const renderScoreText = useCallback(() => (
    <S.ScoreText variant="h3">
      {intl.formatMessage({ id: 'home.welcome.snake-game.score' })}
      :
      {' '}
      {gameState?.score}
    </S.ScoreText>
  ), [gameState, intl]);

  return (
    <S.Wrapper
      container
      flexDirection="row"
      flexWrap="nowrap"
      justifyContent="space-between"
      $closeTimer={closeAnimationTimer}
      className={cx({ closed: unmounting })}
      gap={5}
    >
      <Grid item>
        <S.CanvasContainer>
          <S.Canvas
            width={700}
            height={500}
            ref={canvasRef}
          />
          {gameState && (
          <S.OverlayContainer
            className={cx({ show: gameState.paused || gameState.ended })}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            {gameState.ended && (
              <>
                <Grid container alignItems="center" justifyContent="center" flexDirection="column">
                  <S.GameoverText variant="h1">
                    {intl.formatMessage({ id: 'home.welcome.snake-game.game-over' })}
                  </S.GameoverText>
                  {renderScoreText()}
                  <Button
                    startIcon={<Replay />}
                    color="primary"
                    onClick={() => {
                      game.current!.setupGame();
                    }}
                  >
                    {intl.formatMessage({ id: 'home.welcome.snake-game.restart' })}
                  </Button>
                </Grid>
                {renderBackButton()}
              </>
            )}

            {gameState.paused && (
              <S.PauseText variant="h2">
                {intl.formatMessage({ id: 'home.welcome.snake-game.paused' })}
              </S.PauseText>
            )}

          </S.OverlayContainer>
          )}
        </S.CanvasContainer>
      </Grid>
      <Grid>
        <S.GameinfoContainer>
          <S.GameinfoSection>
            {renderScoreText()}
          </S.GameinfoSection>

          <S.GameinfoSection container>
            <S.Command style={{ marginBottom: 20 }}>
              <S.CommandKey style={{ flex: 1 }} variant="h5">-</S.CommandKey>
              <Typography>{intl.formatMessage({ id: 'home.welcome.snake-game.pause' })}</Typography>
            </S.Command>
          </S.GameinfoSection>

          <S.GameinfoSection>
            <S.CommandWrapper>
              <Typography variant="h5">{intl.formatMessage({ id: 'home.welcome.snake-game.movement-keys' })}</Typography>
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
          </S.GameinfoSection>
        </S.GameinfoContainer>
        <S.FooterWrapper>
          {renderBackButton()}
        </S.FooterWrapper>
      </Grid>
    </S.Wrapper>
  );
};

export default SnakeGame;
