import React, { useState } from 'react'
import Head from 'next/head'

import AccentBlock from "../components/accentBlock";
import DateCallout from "../components/dateCallout";
import Header from '../components/header'
import Hero from "../components/hero";
import LocationCallout from "../components/locationCallout";
import PhotoBlock from "../components/photoBlock";
import Welcome from "../components/welcome";
import Dialog from "../components/dialog";
import Drawer from "../components/drawer";

const components = [<LocationCallout />, <DateCallout />];

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
      <div>
        <Head>
          <title>Britni & Samuel | #bsandbacchanal</title>
          <link rel="stylesheet" href="https://use.typekit.net/tbt8qyu.css" />
        </Head>
        { showDrawer && <Drawer onMenuClick={setShowDrawer} showDialog={setShowDialog} />}
        { showDialog && <Dialog showDialog={setShowDialog}/>}
        <Header onMenuClick={setShowDrawer} showDialog={setShowDialog}/>
        <Hero />
        <AccentBlock backgroundColor='#e3c5c3' textColor='#000000' components={components}/>
        <PhotoBlock backgroundImage='/static/bs_hero2.png' height='649px' textColor='#000000'>
          <h3>You<br/>ready?</h3>
        </PhotoBlock>
        <Welcome />

        <style jsx>{`
          :global(body) {
            min-width: 320px;
          }
          
          h3 {
            text-align: left;
            font-family: bodoni-urw, serif;
            font-weight: 400;
            font-style: normal;
            color #ffffff;
            font-size: 72px;
            line-height: 50px;
            padding: 390px 0 0;
            text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
          }
          
          .container {
            max-width: 1280;
            display: flex;
            justify-content: center;
          }
      `}</style>
      </div>
  );
};

export default Home
