import React from 'react';

import AccentBlock from '../components/accentBlock';
import DateCallout from '../components/dateCallout';
import Hero from '../components/hero';
import LocationCallout from '../components/locationCallout';
import PhotoBlock from '../components/photoBlock';
import Welcome from '../components/welcome';
import Logo from '../components/logo';
// import CountDownWidget from "../components/countDown";

const components = [
  <LocationCallout color="#fff" />,
  <DateCallout color="#fff" />
];

const Home = () => {
  return (
    <div>
      <p className="greeting">Family and Friends!</p>
      <p>
        <br />
        <br />
        We hope this email finds you happy and healthy during these
        unprecedented times. We are still in New York City navigating our way
        through the reopening from the COVID19 peak, but mostly enjoying this
        time together as a newly married couple! Yes, you read that right.
        <br />
        <br />
        <img src={'/static/IMG_1842.jpg'}  width="100%"/>
        <br />
        <br />
        Given the continued uncertainty around international travel between the
        US and Trinidad & Tobago in the coming months, and the possibility of
        additional restrictions on large gatherings this Fall, we decided to
        cancel our wedding. If you have any questions on obtaining refunds for
        any travel or accommodations please reach out directly to the vendors.
        We have found that most are returning funds without issue.
        <br />
        <br />
        Despite these unforeseen circumstances, we didn't want to wait until
        2021 to get married and were fortunate enough to secure a minister on
        short notice and compel the town clerk in Hanover, NH to issue a
        marriage certificate so we could get married at Dartmouth College where
        we first met. The official ceremony took place on June 6th, 2020 and our
        parents and siblings were able to watch via Zoom.
        <br />
        <br />
        While this was far different than the wedding we had planned, the day
        itself was beautiful and we couldn't be happier to have made things
        official amidst all the uncertainty around us.
        <br />
        <br />
        In lieu of wedding gifts, we would appreciate your donation to the{' '}
        <a
          href="https://support.eji.org/give/153413/#!/donation/checkout"
          target="_blank"
        >
          Equal Justice Initiative
        </a>{' '}
        or{' '}
        <a
          href="https://secure.actblue.com/donate/ms_blm_homepage_2019"
          target="_blank"
        >
          Black Lives Matter
        </a>{' '}
        on our behalf. If interested, we are still registered at Williams &
        Sonoma and Bloomingdales.
        <br />
        <br />
        We look forward to celebrating with you all in the future!
        <br />
        <Logo />
      </p>

      <style jsx>{`
        div {
          background-color: rgba(0, 0, 0, 0.6);
          max-width: 600px;
          width: 96%;
          margin: 0 auto;
          padding: 60px 4px;
          margin-bottom: 48px;
          box-shadow: 3px 2px 8px rgba(0,0,0,1);
        }

        h3 {
          text-align: left;
          font-family: bodoni-urw, serif;
          font-weight: 400;
          font-style: normal;
          color: #ffffff;
          font-size: 72px;
          line-height: 50px;
          padding: 390px 0 0;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
        }

        p {
          color: #fff;
          padding: 0 24px;
          line-height: 36px;
          font-size: 18px;
          margin: 0 auto;
          font-weight: 200;
        }

        p a {
          color: #e3c5c3;
          font-weight: bold;
        }

        .greeting {
          font-family: bickham-script-pro-3, serif;
          font-size: 72px;
          text-align: center;
          color: #fff;
          line-height: 62px;
        }
      `}</style>
    </div>
  );
};

export default Home;
