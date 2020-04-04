import React from 'react';

const Divider = ({ label, href }) => (
  <section>
    <h3>{label}</h3>
    <a href={href} target="_blank" rel="noopener" className="button">
      View Registry
    </a>

    <style jsx>{`
      section {
        text-align: center;
      }

      a {
        text-decoration: none;
        display: inline-block;
        padding: 8px;
        text-transform: uppercase;
        letter-spacing: 1.25px;
      }

      .button {
        border: solid 1px #fff;
        padding-left 20px;
        padding-right 20px;
        background-color: #e3c5c3;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
      }

       .button:hover {
        background-color: #D3A3A0;
        border: solid 1px #e3c5c3;
       }
    `}</style>
  </section>
);

export default Divider;
