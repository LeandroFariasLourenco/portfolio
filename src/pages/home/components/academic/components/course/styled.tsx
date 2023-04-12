import { Grid, keyframes } from '@mui/material';
import styled from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CourseWrapper = styled(Grid)`
  position: relative;
  border: 2px dashed ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
  min-height: 550px;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export const CourseTitleContainer = styled(Grid)`
  height: 115px;
`;

export const CourseLogo = styled.img`
  width: 200px;
  object-fit: contain;
  height: 50px;
  margin: 0 auto;
`;

export const CourseContainer = styled(Grid)`
  margin-bottom: 10px;
`;

export const CourseRow = styled(Grid)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
