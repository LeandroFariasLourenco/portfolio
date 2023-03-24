import {
  Button, Card, Grid, Typography,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';

const slideDash = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0%); }
`;

export const AboutMeStoryTopic = styled(Button)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 65px;
  border-radius: 100%;
  overflow: hidden;
`;

export const AboutMeStoryTopicContainer = styled(Grid)`
  height: 175px;
  position: relative;
`;
export const DashedBorder = styled('div')`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;

  &:nth-of-type(1) { transform: rotate(0deg); }
  &:nth-of-type(2) { transform: rotate(40deg); }
  &:nth-of-type(3) { transform: rotate(90deg); }
  &:nth-of-type(4) { transform: rotate(140deg) }
  &:nth-of-type(5) { transform: rotate(180deg); }
  &:nth-of-type(6) { transform: rotate(220deg); }
  &:nth-of-type(7) { transform: rotate(270deg); }
  &:nth-of-type(8) { transform: rotate(325deg); }
`;

export const StoryPanel = styled(Card)(({ theme }) => `
  padding: 5px;
  position: absolute;
  width: 140%;
  transition: opacity 300ms, transform 300ms, border-radius 300ms;
  top: 50%;
  left: 50%;

  ${theme.breakpoints.down('md')} {
    width: 115%;
    top: 25%;
  }
  
  &.is--open {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0;
  }
  
  &:not(.is--open) {
    opacity: 0;
    border-radius: 100%;
    transform: translate(-50%, -50%) scale(0);
  }
`);

export const StoryLabel = styled(Typography)`
  margin-top: 10px;
  font-size: 12px;
`;

export const CloseStory = styled(Button)`
  margin: 0 auto;
  display: flex;
  align-items: center;

  svg {
    margin-left: 15px;
  }
`;

export const Block = styled('span') <{
  color: string;
}>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  border-bottom: 2px dashed ${({ color }) => color};
  animation: ${slideDash} 7s infinite alternate;
`;
