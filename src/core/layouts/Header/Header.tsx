import { GitHub, LightMode } from '@mui/icons-material';
import {
  Grid, AppBar, Box, Button, MenuItem, Select, Typography, useTheme,
} from '@mui/material';
import { ElevationScroll } from 'src/core/components';

const Header = () => {
  const theme = useTheme();
  // const trigger = useScrollTrigger();

  return (
    <ElevationScroll>
      {/* <Slide appear={false} direction="down" in={!trigger}> */}
      <AppBar color="transparent" elevation={0}>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item alignItems="center" justifyContent="space-between" xs={6}>
            <GitHub fontSize="large" />
            <Typography variant="h4">Leandro Farias</Typography>
            <Box>
              <Button
                onClick={() => { }}
                variant="outlined"
              >
                Teste
              </Button>
              <Button
                onClick={() => { }}
                variant="outlined"
              >
                Teste
              </Button>
              <Button
                onClick={() => { }}
                variant="outlined"
                startIcon={<LightMode />}
              />
              <Select>
                <MenuItem><Box component="span" className="fi fi-br" /></MenuItem>
                <MenuItem><Box component="span" className="fi fi-us" /></MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      {/* </Slide> */}
    </ElevationScroll>
  );
};

export default Header;
