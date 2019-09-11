import React from 'react';

const PhotoBlock = ({ backgroundImage, height, children }) => (
  <section>
    <div className="container">{children}</div>
    <style jsx>{`
      section {
        background: #000;
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        height: ${height};
        position: relative;
      }

      .container {
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
      }

      @media (max-width: 1024px) {
        section {
          background-repeat: no-repeat;
          background-position: 22% 0;
        }

        .container {
          padding: 0 20px;
        }
      }

      @media (max-width: 768px) {
        section {
          background-repeat: no-repeat;
          background-position: 9% 0;
        }

        .container {
          padding: 0 10px;
        }
      }

      @media (max-width: 768px) {
        section {
          background-repeat: no-repeat;
          background-position: 10% 0;
        }
      }

      @media (max-width: 320px) {
        section {
          background-repeat: no-repeat;
          background-position: 9% 0;
        }
      }
    `}</style>
  </section>
);

export default PhotoBlock;
