import { useMemo, useCallback, ReactNode } from 'react';

import { getBucketResource } from '@/shared/functions';
import { usePreloadImages, useResponsive } from '@/shared/hooks';
import { useGlobalContext } from '@/shared/contexts/global/global';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ELanguages, EResponsiveType } from '@/shared/models';

import './language-select.scss';

const LanguageSelect = () => {
  const imagesToPreload = useMemo(() => [
    getBucketResource('/languages/brazil.png'),
    getBucketResource('/languages/united-states.png'),
  ], []);
  const { imagesLoaded } = usePreloadImages(imagesToPreload);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
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
      <img className="language-select-country-icon" width={25} height={18} src={source!} alt={alt!} />
    );
  }, []);

  if (!imagesLoaded) {
    return null;
  }

  return (
    <Select
      className="language-select"
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
        <img className="language-select-country-icon" width={25} height={18} src={getBucketResource('/languages/brazil.png')} alt="Brazil flag" />
        <span className="language-select-country-text">
          {!isMobile && 'PT'}
        </span>
      </MenuItem>
      <MenuItem value={ELanguages.English}>
        <img className="language-select-country-icon" width={25} height={18} src={getBucketResource('/languages/united-states.png')} alt="United States flag" />
        <span className="language-select-country-text">
          {!isMobile && 'EN'}
        </span>
      </MenuItem>
    </Select>
  );
};

export default LanguageSelect;
