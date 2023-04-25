import { Box, Button } from '@mui/material';
import Lottie from 'react-lottie';
import { useNavigate, useNavigation } from 'react-router-dom';
import NotFoundAnimation from 'src/assets/animations/404.json';
import { useIntl } from 'react-intl';
import { ROUTES } from 'src/core/constants';
import { ArrowBack } from '@mui/icons-material';
import * as S from './styled';

const NotFound = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <S.NotFoundWrapper>
      <Lottie
        width={315}
        height={175}
        style={{ marginBottom: 10 }}
        speed={0.25}
        options={{
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
