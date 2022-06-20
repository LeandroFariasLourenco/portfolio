import { Card, Grid, styled } from '@mui/material';

export const TimelineWrapper = styled(Grid)``;

export const TimelineBar = styled(Grid)`
  height: 800px;
`;

export const TimelineYear = styled(Grid)<{
  $active: boolean;
  $index: number;
  $trailHighlighted: boolean;
}>(({
  theme,
  $active,
  $index,
  $trailHighlighted,
}) => `
  position: relative;  
  background-color: ${$active ? theme.palette.secondary.main : 'transparent'};
  border: 1px solid ${theme.palette.secondary.main};
  height: 50px;
  transition: background-color 400ms ease-in-out;
  cursor: pointer;

  &::before {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 120px;
    z-index: -1;
    height: 5px;
    background-color: ${$trailHighlighted ? theme.palette.primary.main : 'transparent'};
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    transition: background-color 400ms ease-in-out;
  }

  &::after {
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
    width: 5px;
    background-color: ${$active ? theme.palette.secondary.main : 'transparent'};
    ${$index % 2 === 0 ? 'bottom' : 'top'}: -100px;
  }
`);

export const TimelineCard = styled(Card)<{
  $index: number;
  $active: boolean;
}>(({ $index, $active }) => `
  position: absolute;
  ${$index % 2 === 0 ? 'bottom' : 'top'}: -300px;
  opacity: ${$active ? 1 : 0};
  transition: opacity 400ms ease-in-out;
  z-index: 1;
  width: 200px;
  height: 200px;
  padding: 10px;
`);
