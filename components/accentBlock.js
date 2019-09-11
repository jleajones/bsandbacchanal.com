import React from 'react'

import Divider from "./divider";

const AccentBlock = ({ backgroundColor, textColor, components}) => (
    <section>
      <div className='container'>
        {components.map((component, idx) => (
            <React.Fragment key={idx}>
            <div className='item'>
                {component}
            </div>
            { idx < (components.length - 1) && <Divider />}
            </React.Fragment>
        ))}
      </div>
      <style jsx>{`
      :global(hr) {
        border-left: 1px solid #fff;
        border-right: none;
      }
      
      section {
        background-color: ${backgroundColor};
        color: ${textColor};
        padding: 40px 0;
      }
      
      .container {
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      } 
      
      .container > .item {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        max-width: 50%;
        padding: 40px 0;
      }
      
      @media (max-width: 1024px) {
        .container {
          flex-direction: column;
        }
      
        .container > .item {
          display: flex;
          justify-content: center;
          max-width: 100%;
          padding: 40px 0;
        }
      }
    `}</style>
    </section>
);

export default AccentBlock;
