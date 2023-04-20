import { useTheme } from '@mui/material';
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef, useState,
} from 'react';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useIntl } from 'react-intl';
import { ISeeMoreProps } from './props.interface';
import * as S from './styled';

const SeeMore = ({
  children,
  startHeight: minHeight = 144,
  isInitialHidden = false,
  onToggle = () => {},
}: ISeeMoreProps) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const intl = useIntl();
  const theme = useTheme();
  const defaultHeight = useMemo(() => {
    if (isInitialHidden) {
      return 0;
    }

    return minHeight;
  }, [minHeight]);

  const [heightCurr, setHeightCurr] = useState<number>(defaultHeight);
  const [heightMin, setHeightMin] = useState<number>(defaultHeight);
  const [heightMax, setHeightMax] = useState<number>(defaultHeight);
  const textElementRef = useRef<HTMLParagraphElement>();
  const transitionDuration = useMemo(() => 500, []);

  const handleClick = useCallback(() => {
    setHeightCurr(isExpanded ? heightMin : heightMax);
    setIsExpanded((prevState) => !prevState);
    onToggle(transitionDuration);
  }, [isExpanded, heightMin, heightMax]);

  useEffect(() => {
    const clientHeight = defaultHeight;
    const scrollHeight = textElementRef.current!.scrollHeight || defaultHeight;
    if (scrollHeight > clientHeight) {
      setIsOverflow(true);
      setHeightMax(scrollHeight);
      setHeightMin(clientHeight);
      setHeightCurr(clientHeight);
    }
  }, [children, minHeight]);

  return (
    <S.Wrapper
      $minHeight={defaultHeight}
    >
      <S.TextContainer
        ref={(ref: HTMLParagraphElement) => { textElementRef.current = ref; }}
        $height={heightCurr}
        $heightTransitionDuration={transitionDuration}
      >
        {children}
      </S.TextContainer>
      {isOverflow && (
        <S.ToggleButton
          onClick={handleClick}
          startIcon={
          isExpanded
            ? <KeyboardArrowUp htmlColor={theme.palette.primary.main} />
            : <KeyboardArrowDown htmlColor={theme.palette.primary.main} />
}
        >
          {isExpanded
            ? intl.formatMessage({ id: 'general.button.see-less' })
            : intl.formatMessage({ id: 'general.button.see-more' })}
        </S.ToggleButton>
      )}
    </S.Wrapper>
  );
};

export default memo(SeeMore);
