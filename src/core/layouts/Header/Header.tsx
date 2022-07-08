import { GitHub } from '@mui/icons-material';
import {
  Grid,
  Box,
  MenuItem,
  Select,
  Typography,
  useTheme,
  useScrollTrigger,
  Slide,
  SelectChangeEvent,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FormattedMessage } from 'react-intl';
import { ElevationScroll } from 'src/core/components';
import { Languages } from 'src/core/models';
import { useGlobalContext } from 'src/core/store/global/context';

import * as S from './styled';

const Header = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger();
  const globalContext = useGlobalContext();

  const links = [
    { label: 'header.links.section1', href: '#home' },
    { label: 'header.links.section2', href: '#home' },
    { label: 'header.links.section3', href: '#home' },
    { label: 'header.links.section4', href: '#home' },
    { label: 'header.links.section5', href: '#home' },
  ];

  const handleLanguageSelect = (event: SelectChangeEvent<unknown>) => {
    globalContext.setLanguage(event.target.value as Languages);
  };

  return (
    <ElevationScroll>
      {/* <Slide appear={false} direction="down" in={!trigger}> */}
      <S.HeaderBar color="primary" elevation={0}>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item alignItems="center" justifyContent="space-between" xs={8}>
            <Grid item xs={3} flexWrap="nowrap" flexDirection="row" alignItems="center" container justifyContent="space-evenly">
              <GitHub fontSize="large" />
              <Typography variant="h4">Leandro Farias</Typography>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end" flexWrap="nowrap">
              {links.map((link) => (
                <S.HeaderLink
                  key={link.label}
                >
                  <Typography><FormattedMessage id={link.label} /></Typography>
                </S.HeaderLink>
              ))}
            </Grid>
            <Grid item xs={1}>
              <S.LanguageSelect
                value={globalContext.language}
                onChange={handleLanguageSelect}
                variant="standard"
              >
                <MenuItem value={Languages.Portuguese}><Box component="span" className="fi fi-br" /></MenuItem>
                <MenuItem value={Languages.English}><Box component="span" className="fi fi-us" /></MenuItem>
              </S.LanguageSelect>
            </Grid>
          </Grid>
        </Grid>
      </S.HeaderBar>
      {/* </Slide> */}
    </ElevationScroll>
  );
};

export default observer(Header);
