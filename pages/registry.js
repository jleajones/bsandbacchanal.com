import React from 'react'
import Router from 'next/router'
import PhotoBlock from "../components/photoBlock";
import ComingSoon from "../components/comingSoon";

class Registry extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn === false) {
      Router.push('/');
    }
  }

  render () {
    return (
        <>
          <PhotoBlock backgroundImage='/static/bs_hero2.png' height='500px' textColor='#000000'>
            <h3>Wedding<br/>Registry</h3>
          </PhotoBlock>
          <ComingSoon />
          <style jsx>{`
            h3 {
              text-align: left;
              font-family: bodoni-urw, serif;
              font-weight: 400;
              font-style: normal;
              color #ffffff;
              font-size: 72px;
              line-height: 50px;
              padding: 270px 0 0;
              text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
            }
          `}</style>
        </>
    );
  }
};

export default Registry
