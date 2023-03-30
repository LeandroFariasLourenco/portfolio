import { DragHandle } from '@mui/icons-material';
import { Grid, useTheme } from '@mui/material';

import * as S from './styled';

const BottomSheet = () => {
  const theme = useTheme();

  const handleOnHandleTouch = () => {

  };

  return (
    <S.BottomSheetContainer>
      <Grid
        onTouchStart={() => { handleOnHandleTouch(); }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <DragHandle fontSize="large" htmlColor={theme.palette.text.secondary} />
      </Grid>
      Teste
    </S.BottomSheetContainer>
  );
};

export default BottomSheet;
