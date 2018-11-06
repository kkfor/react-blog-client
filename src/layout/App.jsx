import React, { Component, Fragment } from 'react'
import Header from '@/layout/header'
import Container from '@/layout/container'
import Footer from '@/layout/footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container />
        <Footer />
      </Fragment>
    )
  }
}

export default App
