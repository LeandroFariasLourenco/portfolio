import styled from 'styled-components';
import {
  Card, Grid,
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
