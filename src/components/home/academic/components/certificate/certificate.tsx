import { OpenInNew, RemoveRedEye } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';
import Responsive from '@/shared/components/responsive/responsive';
import { useLinkTarget } from '@/shared/hooks';

import { ICardProps } from './props.interface';

import './certificate.scss';

const Certificate = ({
  certificate: card,
  index,
}: ICardProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();
  const linkTarget = useLinkTarget();

  return (
    <Grid
      className="certificate-wrapper"
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
      style={{
        animationDuration: `${100 + 75 * index}ms`,
      }}
    >
      <Responsive
        aboveComponent={(
          <Grid
            className="certificate-container"
            container
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Grid className="certificate-logo-container">
              <img className="certificate-logo" src={card.logo} width={card.width.desktop} />
            </Grid>
            <Typography variant="h5" fontSize="20px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
            <a
              className="certificate-link"
              href={card.link}
              target={linkTarget}
            >
              <RemoveRedEye color="primary" />
              <Responsive
                breakpoint="md"
              >
                <Typography><FormattedMessage id="general.button.see-more" /></Typography>
              </Responsive>
              <OpenInNew color="primary" />
            </a>
          </Grid>
        )}
        belowComponent={(
          <a
            className="certificate-link"
            href={card.link}
            target={linkTarget}
          >
            <Grid
              className="certificate-container"
              container
              alignItems="center"
              flexDirection="row"
              flexWrap="nowrap"
              justifyContent="space-between"
            >
              <Grid className="certificate-logo-container" minWidth={card.width.mobile}>
                <img className="certificate-logo" src={card.logo} width={card.width.mobile} />
              </Grid>
              <Typography variant="h5" fontSize="14.5px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
              <OpenInNew style={{ marginLeft: '5px' }} color="primary" />
            </Grid>
          </a>
        )}
        breakpoint="md"
      />
    </Grid>
  );
};

export default Certificate;