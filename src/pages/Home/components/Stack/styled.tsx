import {
  Box, Grid, keyframes, styled,
} from '@mui/material';

const changeTechnologyTab = keyframes`
  from {
    transform: translateX(70%);
  }

  60% {
    transform: translateX(-2%);
  }

  to {
    transform: translateX(0);
  }
`;

export const StackWrapper = styled(Grid)(({ theme }) => `
  border: 2px solid ${theme.palette.secondary.main};
  margin-top: 30px;
`);

export const TabContainer = styled(Grid)<{
  selected: boolean;
}>(({ theme, selected }) => `
  cursor: pointer;
  transition: background-color 500ms ease-in-out;
  background-color: ${selected ? theme.palette.secondary.main : theme.palette.background.paper};
  padding: 10px;

  &:not(&:last-of-type) {
    border-right: 2px dashed ${theme.palette.secondary.main};
  }
`);

export const StackLogo = styled('img')`
  object-fit: contain;
  width: 130px;
  max-height: 65px;
`;

export const TechnologyWrapper = styled(Box)``;

export const TechnologyTabContainer = styled(Grid)`
  transition: transform 500ms ease-in-out;

  &.selected {
    animation: ${changeTechnologyTab};
    animation-fill-mode: forwards;
    animation-duration: 400ms;
  }

  &:not(&.selected) {
    position: absolute;
    opacity: 0;
  }
`;
