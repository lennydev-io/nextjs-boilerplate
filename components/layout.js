import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import * as S from '../lib/styles';

const Layout = ({ children, title }) => (
  <S.LayoutContainer>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Head>
    <S.LayoutChildren>
      {children}
    </S.LayoutChildren>
  </S.LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

Layout.defaultProps = {
  children: <div />,
  title: 'NextJs Boilerplate by lennydev.io',
};

export default Layout;
