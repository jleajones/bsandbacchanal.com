import React from 'react';

import PhotoBlock from '../components/photoBlock';
import ProtectedPage from '../components/protectedPage';
import RegistryContent from '../components/registryContent';
import AccentBlock from "../components/accentBlock";
import RegistryItem from "../components/registryItem";

import registries from "../constants/registries";

const components = registries.map(r => {
  return (
      <RegistryItem label={r.label} href={r.href} />
  )
});
const Registry = ({ isLoggedIn }) => {
  return (
    <ProtectedPage isLoggedIn={isLoggedIn}>
      <PhotoBlock
        backgroundImage="/static/smile_bg.png"
        height="500px"
        textColor="#000000"
      >
        <h3>
          Wedding
          <br />
          Registry
        </h3>
      </PhotoBlock>
      <RegistryContent />
      <AccentBlock
          backgroundColor="#e3c5c3"
          textColor="#ffffff"
          components={components}
      />
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
    </ProtectedPage>
  );
};

export default Registry;
