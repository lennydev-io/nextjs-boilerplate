import styled from 'styled-components';

import { H1, H2, H3, H4, P } from './typography';
import Colors from './colors';
import Spacing from './spacing';
import Transitions from './transitions';

export const LayoutContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const LayoutChildren = styled.div`
  width: 100%;
  padding: 10% 5%;
`;
