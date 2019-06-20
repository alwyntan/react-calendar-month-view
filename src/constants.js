import { keyframes } from 'styled-components';

export const COLORS = {
  verylightgray: '#F8F8F8',
  lightgray: '#F0F0F0',
  gray: '#656565'
};

export const SMALL_CALENDAR_WIDTH = 500;

export const fadeIn = keyframes`
  from {
    opacity: 0.2
  }
  to {
    opacity: 1
  }
`;
