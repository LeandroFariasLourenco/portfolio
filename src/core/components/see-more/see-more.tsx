import { Button } from '@mui/material';
import {
  memo,
  useEffect,
  useMemo,
  useRef, useState,
} from 'react';

import * as S from './styled';
import { ISeeMoreProps } from './props.interface';

const SeeMore = ({
  children,
}: ISeeMoreProps) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const defaultHeight = useMemo(() => 144, []);

  const [heightCurr, setHeightCurr] = useState<number>(defaultHeight);
  const [heightMin, setHeightMin] = useState<number>(defaultHeight);
  const [heightMax, setHeightMax] = useState<number>(defaultHeight);
  const textElementRef = useRef<HTMLParagraphElement>();

  const handleClick = () => {
    setHeightCurr(isExpanded ? heightMin : heightMax);
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const clientHeight = textElementRef.current!.clientHeight || defaultHeight;
    const scrollHeight = textElementRef.current!.scrollHeight || defaultHeight;
    if (scrollHeight > clientHeight) {
      setIsOverflow(true);
      setHeightMax(scrollHeight);
      setHeightMin(clientHeight);
      setHeightCurr(clientHeight);
    }
  }, [children]);

  return (
    <S.Wrapper>
      <S.TextContainer ref={(ref: HTMLParagraphElement) => { textElementRef.current = ref; }} $height={heightCurr}>
        {children}
      </S.TextContainer>
      {isOverflow ? (
        <S.ToggleButton onClick={handleClick}>
          { isExpanded ? 'See less' : 'See more' }
        </S.ToggleButton>
      ) : null}
    </S.Wrapper>
  );
};

export default memo(SeeMore);
