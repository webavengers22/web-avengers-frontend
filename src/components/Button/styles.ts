import { safelyAlterColor } from '@/utils';
import { keyframes, css } from '@emotion/react';
import { ButtonColorScheme, ButtonShape } from './types';
import { rgba } from 'polished';
import { sizeSets } from './constants';
// import { type } from 'os';
import { CommSize } from '@/types';

const buttonStyle = (size: CommSize) => css`
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: ${sizeSets[size].size};
  height: ${sizeSets[size].size};
  padding: ${sizeSets[size].padding};
  &:disabled {
    filter: grayscale(15%);
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:focus-visible {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
  transition: 0.1s background ease-in, 0.1s color ease-in;
`;

const defaultStyle = (scheme: ButtonColorScheme) => css`
  background: ${scheme.background};
  color: ${scheme.text};
  &:hover:enabled {
    background: ${scheme.hover};
  }
  &:active:enabled {
    background: ${scheme.active};
  }
`;

const shapeStyle = (shape: ButtonShape) => css`
  ${shape === 'circle' &&
  css`
    border-radius: 30px;
  `}
  ${shape === 'round' &&
  css`
    border-radius: 10px;
  `}

  ${shape === 'square' &&
  css`
    padding: 0;
    width: 2.5em;
  `}
`;

const outlineStyle = (scheme: ButtonColorScheme) => css`
  background: transparent;
  border: 1px solid ${scheme.background};
  color: ${scheme.background};
  &:hover:enabled {
    background: ${scheme.background};
    color: ${scheme.background};
    border-color: ${scheme.background};
  }
  &:active:enabled {
    background: ${scheme.hover};
    border-color: ${scheme.hover};
  }
`;

const ghostStyle = (color: string) => css`
  background: transparent;
  color: ${color};
  &:hover:enabled {
    background: ${rgba(color, 0.1)};
  }
  &:active:enabled {
    background: ${rgba(color, 0.1)};
  }
`;

const fullWidthStyle = css`
  width: 100%;
`;

const iconWrapperStyle = (
  position: 'left' | 'right',
  noMargin?: boolean,
) => css`
  display: flex;
  svg {
    width: 1.25em;
    height: 1.25em;
    color: inherit;
  }

  ${position === 'left' &&
  css`
    margin-right: 0.75em;
  `}
  ${position === 'right' &&
  css`
    margin-left: 0.75em;
  `}

  ${noMargin &&
  css`
    margin: 0;
  `}
`;

const takeFullWidth = css`
  flex: 1;
`;

const resetLinkStyle = css`
  text-decoration: none;
`;

export {
  defaultStyle,
  outlineStyle,
  shapeStyle,
  ghostStyle,
  fullWidthStyle,
  buttonStyle,
  iconWrapperStyle,
  takeFullWidth,
  resetLinkStyle,
};
