import {
  Box, Card, Grid, styled,
} from '@mui/material';

export const ExperienceStackContainer = styled(Grid)`
  margin-top: 20px;
`;

export const StackTechnologyListContainer = styled(Box)``;

export const StackTechnologyListItem = styled(Box)(({ theme }) => `
  padding: 5px 10px;
  border: 1px solid ${theme.palette.primary.main};
  display: inline-block;
  margin: 5px;
`);

export const ExperienceDescriptionContainer = styled(Grid)``;

export const ExperienceCard = styled(Card)<{
  $direction: 'left' | 'right'
}>(({ theme, $direction }) => `
  padding: 16px;
  height: 98%;
  width: 98%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 500ms ease-in-out;
  border-radius: 10px;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 1%;
    height: 175px;
    border: 2px dashed ${theme.palette.secondary.main};
    padding: 5px;
    background-color: ${theme.palette.secondary.main};
    background-clip: content-box;
    top: 50%;
    ${$direction}: -7px;
    transform: translateY(-50%);
  }
`);
