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

import './see-more.scss';

const SeeMore = ({
  children,
  startHeight: minHeight = 144,
  isInitialHidden = false,
  onToggle = () => { },
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
    if (isExpanded) return;

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
    <div
      className="see-more-wrapper"
      style={{ minHeight: defaultHeight }}
    >
      <div
        className="see-more-text"
        ref={(ref: HTMLParagraphElement) => { textElementRef.current = ref; }}
        style={{ height: heightCurr, transitionDuration: `${transitionDuration}ms` }}
      >
        {children}
      </div>
      {isOverflow && (
        <button
          className="see-more-toggle"
          onClick={handleClick}
        >
          {isExpanded
            ? (
              <>
                <KeyboardArrowUp htmlColor={theme.palette.primary.main} />
                {intl.formatMessage({ id: 'general.button.see-less' })}
              </>
            )
            : (
              <>
                <KeyboardArrowDown htmlColor={theme.palette.primary.main} />
                {intl.formatMessage({ id: 'general.button.see-more' })}
              </>
            )}
        </button>
      )}
    </div>
  );
};

export default memo(SeeMore);
