import React, { Component, Fragment } from 'react'
import Header from '@/layout/header'
import Main from '@/layout/main'
import Footer from '@/layout/footer'
import {BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Main />
          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App
