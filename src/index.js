import React from 'react';
import PostList from './components/PostList'
import Header from './components/Header'
import {Container} from './components/Globals/Container'

import GlobalStyle from './styles/global.js'

export default function App() {
  return (
    <Container>
      <Header />
      <PostList />
      <GlobalStyle />
    </Container>
  )
}
