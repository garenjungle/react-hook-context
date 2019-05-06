import React, { useState } from 'react';

import Button from 'components/Button';

import styled from 'styled-components';
import oc from 'open-color-js';

const Wrapper = styled.div`
  display: flex;
`;

const Header = () => {
  const [name, setName] = useState('kyk');

  return (
    <Wrapper className="header">
      <input type="text" onChange={e => setName(e.target.value)} />
      <Button name={name}>버튼</Button>
    </Wrapper>
  );
};

export default Header;
