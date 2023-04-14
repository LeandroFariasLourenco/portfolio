import cx from 'classnames';
import { useEffect, useState } from 'react';
import { getBucketResource } from 'src/core/functions';
import { useResponsive } from 'src/core/hooks';
import { EResponsiveType } from 'src/core/models';
import { ILanguageProps } from './props.interface';
import * as S from './styled';

const LanguageTab = ({
  language,
  onToggle,
  index,
  selectedTab,
}: ILanguageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });

  useEffect(() => {
    setOpen(selectedTab === index);
  }, [selectedTab]);

  return (
    <S.TabContainer
      key={language.name}
      container
      alignItems="center"
      justifyContent="center"
      flex={1}
      onClick={() => {
        onToggle(index);
      }}
      className={cx({ open })}
    >
      <S.StackLogo
        src={getBucketResource(language.icon)}
        alt={language.name}
      />
    </S.TabContainer>
  );
};

export default LanguageTab;
