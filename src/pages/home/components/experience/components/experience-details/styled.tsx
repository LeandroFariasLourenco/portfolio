import {
  Card, Grid, styled,
} from '@mui/material';

export const ExperienceDescriptionContainer = styled(Grid)`
  p {
    &::first-letter {
      margin-left: 20px;
    }
  }
`;

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
  border-radius: 0;
  background-color: ${theme.palette.background.paper};
  border: 1px solid ${theme.palette.secondary.main};

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
    z-index: 1;
  }
`);
