import React from 'react';

import styled from 'styled-components';
import oc from 'open-color-js';

import { useContent } from 'components/ContentContext';

const Wrapper = styled.button``;

const Button = ({ name, children }) => {
  const { setContent } = useContent();
  return (
    <Wrapper className="button" onClick={() => setContent(name)}>
      {children}
    </Wrapper>
  );
};

export default Button;
