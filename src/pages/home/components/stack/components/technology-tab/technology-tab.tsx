import { useEffect, useState } from 'react';
import cx from 'classnames';
import Responsive from 'src/core/components/responsive/responsive';
import { EResponsiveType } from 'src/core/models';
import { useResponsive } from 'src/core/hooks';
import { getBucketResource } from 'src/core/functions';
import { useTheme } from '@mui/material';
import * as S from './styled';
import TechnologyDetails from '../technology-details/technology-details';
import { ITechnologyProps as ITechnologyTabProps } from './props.interface';

const TechnologyTab = ({
  technology,
  index,
  onDesktopToggle,
  selectedTab,
}: ITechnologyTabProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const theme = useTheme();

  useEffect(() => {
    if (isMobile) return;
    setOpen(selectedTab === index);
  }, [selectedTab]);

  return (
    <>
      <S.TabContainer
        className={cx({
          selected: isOpen,
        })}
        onClick={() => {
          if (!isMobile) {
            onDesktopToggle(index);
            return;
          }
          setOpen((prevState) => !prevState);
        }}
        container
        alignItems="center"
      >
        <S.TechnologyTabWrapper container flexWrap="nowrap" alignItems="center">
          <S.TechnologyImageContainer>
            <img
              src={getBucketResource(technology.icon)}
              width={35}
              alt={technology.name}
            />
          </S.TechnologyImageContainer>
          <S.TechnologyTitle variant="h5" sx={{ color: isOpen ? 'white' : '' }}>
            {technology.name}
          </S.TechnologyTitle>
          <Responsive
            breakpoint="md"
            belowComponent={(
              <S.TechnologyMobileArrow
                $selected={isOpen}
                htmlColor={theme.typography.h5.color}
              />
            )}
          />
        </S.TechnologyTabWrapper>
      </S.TabContainer>
      <Responsive
        breakpoint="md"
        belowComponent={(
          <TechnologyDetails technology={technology} isSelected={isOpen} />
        )}
      />
    </>
  );
};

export default TechnologyTab;
