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
}: ISeeMoreProps) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const intl = useIntl();
  const theme = useTheme();
  const defaultHeight = useMemo(() => minHeight, [minHeight]);

  const [heightCurr, setHeightCurr] = useState<number>(defaultHeight);
  const [heightMin, setHeightMin] = useState<number>(defaultHeight);
  const [heightMax, setHeightMax] = useState<number>(defaultHeight);
  const textElementRef = useRef<HTMLParagraphElement>();

  const handleClick = useCallback(() => {
    setHeightCurr(isExpanded ? heightMin : heightMax);
    setIsExpanded((prevState) => !prevState);
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
      $minHeight={minHeight}
    >
      <S.TextContainer ref={(ref: HTMLParagraphElement) => { textElementRef.current = ref; }} $height={heightCurr}>
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
            ? intl.messages['general.button.see-less'] as string
            : intl.messages['general.button.see-more'] as string}
        </S.ToggleButton>
      )}
    </S.Wrapper>
  );
};

export default memo(SeeMore);
