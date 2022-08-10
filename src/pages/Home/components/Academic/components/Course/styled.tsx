import { Grid, styled } from '@mui/material';

export const CourseWrapper = styled(Grid)(({ theme }) => `
  position: relative;
  border: 2px dashed ${theme.palette.secondary.main};
  padding: 10px;
  min-height: 550px;
`);

export const CourseTitleContainer = styled(Grid)`
  height: 115px;
`;

export const CourseLogo = styled('img')`
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
