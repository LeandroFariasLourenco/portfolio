import {
  CalendarMonth, HistoryEdu, Room, School,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Typewriter } from 'src/core/components';
import { Section } from 'src/core/layouts';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import * as S from './styled';

const Academic = () => {
  const experiences = useMemo(() => [
    {
      title: 'home.formation1.title',
      type: 'home.formation1.type',
      location: 'home.formation1.location',
      duration: 'home.formation1.duration',
      // logo: <img src={FiapLogo} width={125} alt="Fiap" />,
    },
    {
      title: 'home.formation2.title',
      type: 'home.formation2.type',
      location: 'home.formation2.location',
      duration: 'home.formation2.duration',
    },
  ], []);

  const swiperProps: SwiperProps = useMemo(() => ({
    slidesPerView: 3,
    slidesPerGroup: 1,
    modules: [Pagination, Navigation],
    navigation: true,
    pagination: true,
    spaceBetween: 20,
  }), []);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Formação acadêmica e cursos')
          .start();
      }}
      icon={<School fontSize="large" htmlColor="white" />}
    >
      <S.SwiperContainer>
        <Swiper {...swiperProps}>
          {experiences.map((experience) => (
            <SwiperSlide
              key={experience.title}
            >
              <S.AcademicCard>
                <S.AcademicRow container flexWrap="nowrap" alignItems="center" justifyContent="center">
                  {/* {experience.logo} */}
                </S.AcademicRow>
                <S.AcademicHeader>
                  <S.AcademicTitle variant="h6"><FormattedMessage id={experience.title} /></S.AcademicTitle>
                </S.AcademicHeader>

                <S.AcademicRow container flexWrap="nowrap" alignItems="center">
                  <HistoryEdu htmlColor="white" />
                  <Typography variant="body1"><FormattedMessage id={experience.type} /></Typography>
                </S.AcademicRow>
                <S.AcademicRow container flexWrap="nowrap" alignItems="center">
                  <CalendarMonth htmlColor="white" />
                  <Typography variant="body1"><FormattedMessage id={experience.duration} /></Typography>
                </S.AcademicRow>
                <S.AcademicRow container flexWrap="nowrap" alignItems="center">
                  <Room htmlColor="white" />
                  <Typography variant="body1"><FormattedMessage id={experience.location} /></Typography>
                </S.AcademicRow>
              </S.AcademicCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperContainer>
    </Section>
  );
};

export default Academic;
