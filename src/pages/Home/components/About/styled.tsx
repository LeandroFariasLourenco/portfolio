import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card, Grid, Typography,
  styled,
} from '@mui/material';

export const AboutCard = styled(Card)`
  margin-top: 25px;
  padding: 10px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

export const AboutCardHoverContainer = styled(Grid)<{
  $color: string;
}>(({ $color }) => `
  width: 100px;
  height: 100px;
  background-color: ${$color};
  border-radius: 100%;
  position: absolute;
  bottom: -30%;
  right: -30%;
  transition: all 350ms ease-in-out;
  
  * {
    font-size: 0;
  }
`);

export const AboutMeObjectives = styled(Grid)`
  margin-top: 10px;

  > * {
    &:not(:first-child) {
      padding-left: 15px;
    }
  }
`;

export const AboutMeSummary = styled(Typography)`
  font-size: 15px;
`;

export const AboutMeAccordionSummary = styled(AccordionSummary)`
  background-color: transparent;
  padding-left: 0;

  > div {
    margin: 0 !important;
  }

  &.Mui-expanded {
    min-height: 0 !important;
  }

  .MuiAccordionSummary-expandIconWrapper {
    transform: rotate(90deg);

    &.Mui-expanded {
      transform: rotate(270deg);
    }
  }
`;

export const AboutMeAcccordion = styled(Accordion)`
  background-color: transparent;
  box-shadow: unset;
  margin: 0 !important;
`;

export const AboutMeObjectivesTitle = styled(Typography)`
  svg {
    margin-right: 10px;
  }
`;

export const AboutMeAccordionDetails = styled(AccordionDetails)`
`;

export const AboutMeObjective = styled(Typography)(({ theme }) => `
  font-size: 15px;

  &::before {
    content: '-';
    font-size: 20px;
    background-color: ${theme.palette.action.focus};
    margin: 0 10px 0 0;
  }
`);

export const AboutCardWrapper = styled(Grid)`
  position: relative;
  overflow: hidden;

  &:hover {
    ${AboutCardHoverContainer} {
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      border-radius: 0;

      * {
        font-size: unset;
      }
    }
  }
`;