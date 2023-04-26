import { useMemo, useCallback, ReactNode } from 'react';

import { getBucketResource } from 'src/core/functions';
import { usePreloadImages, useResponsive } from 'src/core/hooks';
import { useGlobalContext } from 'src/core/context/global/global-context';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { ELanguages, EResponsiveType } from 'src/core/models';

import * as S from './styled';

const LanguageSelect = () => {
  const imagesToPreload = useMemo(() => [
    getBucketResource('/languages/brazil.png'),
    getBucketResource('/languages/united-states.png'),
  ], []);
  const { imagesLoaded } = usePreloadImages(imagesToPreload);
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });
  const globalContext = useGlobalContext();

  const handleLanguageSelect = useCallback((event: SelectChangeEvent<unknown>) => {
    globalContext.setLanguage(event.target.value as ELanguages);
  }, [globalContext]);

  const renderCountryIcon = useCallback((value: ELanguages): ReactNode => {
    let source: string;
    let alt: string;
    switch (value) {
      case ELanguages.Portuguese:
        source = getBucketResource('/languages/brazil.png');
        alt = 'Brazil flag';
        break;
      case ELanguages.English:
        source = getBucketResource('/languages/united-states.png');
        alt = 'United States Flag';
        break;
      default:
        break;
    }

    return (
      <S.CountryIcon width={25} height={18} src={source!} alt={alt!} />
    );
  }, []);

  if (!imagesLoaded) {
    return null;
  }

  return (
    <S.LanguageSelect
      value={globalContext.language}
      onChange={handleLanguageSelect}
      variant="standard"
      onClose={() => {
        requestAnimationFrame(() => {
          (document.activeElement! as HTMLInputElement).blur();
        });
      }}
      MenuProps={{
        keepMounted: true,
      }}
      renderValue={renderCountryIcon as (value: any) => ReactNode}
    >
      <MenuItem value={ELanguages.Portuguese}>
        <S.CountryIcon width={25} height={18} src={getBucketResource('/languages/brazil.png')} alt="Brazil flag" />
        <S.CountryText component="span">
          {!isMobile && 'PT'}
        </S.CountryText>
      </MenuItem>
      <MenuItem value={ELanguages.English}>
        <S.CountryIcon width={25} height={18} src={getBucketResource('/languages/united-states.png')} alt="United States flag" />
        <S.CountryText component="span">
          {!isMobile && 'EN'}
        </S.CountryText>
      </MenuItem>
    </S.LanguageSelect>
  );
};

export default LanguageSelect;
