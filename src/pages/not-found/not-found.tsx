import { Lottie } from '@alfonmga/react-lottie-light-ts';
import { ArrowBack } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import NotFoundAnimation from 'src/assets/animations/404.json';
import { ROUTES } from 'src/core/constants';
import * as S from './styled';

const NotFound = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <S.NotFoundWrapper>
      <Lottie
        width="315px"
        height="175px"
        style={{ marginBottom: '10px' }}
        speed={0.25}
        config={{
          animationData: NotFoundAnimation,
        }}
      />
      <Box>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(ROUTES.home)}>{intl.formatMessage({ id: 'general.button.go-back' })}</Button>
      </Box>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
