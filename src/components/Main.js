import React from 'react';

import { useContent } from 'components/ContentContext';

import styled from 'styled-components';
import oc from 'open-color-js';

const Wrapper = styled.div``;

const Main = () => {
  const { content } = useContent();
  return <Wrapper>{content}</Wrapper>;
};

export default Main;
