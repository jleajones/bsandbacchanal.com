import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import Drawer from "../components/drawer";
import Dialog from "../components/dialog";
import Header from "../components/header";

class BsApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps }
  // }

  constructor (props) {
    super(props);
    this.state = {
      showDialog: false,
      showDrawer: false,
      isLoggedIn: false
    };
  }

  setShowDrawer = (showDrawer) => {
    this.setState({
      showDrawer
    })
  };

  setShowDialog = ({ showDialog, forwardToUrl }) => {
    let forwardTo;
    if (forwardToUrl) {
      const urlParts = forwardToUrl.split('/');
      forwardTo = `/${urlParts[urlParts.length - 1]}`;
    }

    this.setState({
      showDialog,
      forwardTo
    })
  };

  onSubmit = (value) => {
    const returnValue = {};

    const {
      forwardTo
    } = this.state;

    if (value !== 'test1234') {
      returnValue.hasError = true;
    } else {
      returnValue.hasError = false;
      this.setState({
        isLoggedIn: true
      });

    }

    returnValue.successCallback = () => {
      Router.push(forwardTo);
    };

    return returnValue;
  };

  render() {
    const { Component, pageProps } = this.props;
    const {
      showDialog,
      showDrawer,
      isLoggedIn
    } = this.state;

    return (
        <>
          <Head>
            <title key='title'>Britni & Samuel | #bsandbacchanal</title>
            <link rel="stylesheet" href="https://use.typekit.net/tbt8qyu.css" />
          </Head>
          { showDrawer && <Drawer onMenuClick={this.setShowDrawer} showDialog={this.setShowDialog} isLoggedIn={isLoggedIn} /> }
          { showDialog && <Dialog showDialog={this.setShowDialog} onSubmit={this.onSubmit} /> }
          <Header onMenuClick={this.setShowDrawer} showDialog={this.setShowDialog} isLoggedIn={isLoggedIn} />
          <main>
            <Component {...pageProps} isLoggedIn={isLoggedIn} />
          </main>


          <style jsx>{`
            :global(body) {
              min-width: 320px;
            }
            
            main {
              margin-top: 170px;
            }
            
           @media (max-width: 768px) {
              main {
                margin-top: 119px;
              }
            }
          `}</style>
        </>
      )
  }
}

export default BsApp
