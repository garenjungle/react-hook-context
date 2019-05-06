import React from 'react';

import Header from 'components/Header';
import Main from 'components/Main';

import { ContentProvider } from 'components/ContentContext';

import styled from 'styled-components';
import oc from 'open-color-js';

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper className="home">
      <ContentProvider>
        <Header />
        <Main />
      </ContentProvider>
    </Wrapper>
  );
};

export default Home;
