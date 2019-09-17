import React from 'react';

const Divider = ({ color='#fff' }) => (
  <div>
    <hr />
    <style>{`
      hr {
        border-left: 1px solid ${color};
        border-right: none;
        height: 100%;
      }
    `}</style>
  </div>
);

export default Divider;
