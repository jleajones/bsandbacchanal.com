import React from 'react';

import PhotoBlock from '../components/photoBlock';
import ComingSoon from '../components/comingSoon';
import ProtectedPage from '../components/protectedPage';
import Person from "../components/person";

const WeddingParty = ({ isLoggedIn }) => {
  const bridesmaids = [{
    name: 'Ms. Briana Stinson',
    blurb: (
        <p>One of my favorite pictures is one where my sister is holding me hours after I was born for
          the first time. I’ve known her my entire life and to see her happy and flourishing is a breath
          of fresh air. Britni is someone I confide in, seek advice from, and look up to so when they
          told us about their engagement, I was very excited to be gaining an older sibling in Sam.
          From graduations to family gatherings to casual after work conversations, I never really
          noticed the exact moment he entered our lives, but I’ve always been grateful he and the
          Jackson family did.</p>
    ),
    imageUrl: '',
    flag: 'Maid of Honor'
  },{
    name: 'Dr. Cresandra Cummings',
    blurb: (
        <p>Britni and I met in 2005, during her freshman year at Dartmouth. We instantly shared a
          connection that flourished through our pursuit of becoming sisters of Alpha Kappa Alpha
          Sorority, Inc. She’s my wild, crazy friend and my lovely line sister. Together, we’ve
          traveled near and far to see Beyoncé in concert and laughed over random brunches with
          Sam and Darrayl. I am excited to celebrate Britni and Sam’s union!</p>
    ),
    imageUrl: ''
  },{
    name: 'Ms. Jasmine Francis',
    blurb: (
        <p>I met Britni during my first week at Dartmouth, and we bonded over our current dislike of
          college while at the Hood Museum. However, she ended up being one of the reasons why
          I loved my time there. She taught me to lock my room door (crazies can get in and cry in
          the corner LOL), to be loyal to the core, and to be myself regardless of who likes it. From
          DBU to lifelong friends - I’m blessed to call you a sister and friend. I couldn’t be happier
          that two people I love, and respect are going to celebrate their love for each other. Love
          you my dudes!</p>
    ),
    imageUrl: ''
  },{
    name: 'Mrs. Simone Gbadebo-Smith',
    blurb: (
        <p>Britni and I met at Ori’s birthday party and I liked her energy immediately. She felt happy
          and warm and smart, so though we didn’t get to chat much that evening I knew we’d
          become fast friends, and we have. Amazing weddings happen when the bride and the
          groom are really good people who are really into each other. You guys have both
          ingredients for an amazing day: I am most excited about being an intimate part of it.</p>
    ),
    imageUrl: ''
  },{
    name: 'Mrs. Nicole James',
    blurb: '',
    imageUrl: ''
  },{
    name: 'Mrs. Amy Lattimore',
    blurb: (
        <p>Business brought Britni and I together. So if you know Britni, you know that meeting her in
          a business setting is like meeting Oprah— she’s super sharp and on her p’s and q’s;
          admirable but also slightly intimidating because you realize you need to be better at life,
          lol. Then, I met Britni a second time in a party setting and it was like meeting Issa Rae—
          super funny, down to earth, and of course down for the culture. But it was when we
          bonded over all things black women love— braids, bundles and Beyoncé that I knew we’d
          be great friends! That was in 2015. Now, looking back over the years and how our
          friendship has grown, I must say Britni is beyond compare, and I’m so honored to be able
          to journey with her into this beautiful new phase of life! I’ve got so much love for Britni and
          Sam. #BSandBacchanal</p>
    ),
    imageUrl: ''
  },{
    name: 'Mrs. Haley Rosowsky',
    blurb: (
        <p>Britni and I met in college at one of my first college parties in the Alpha apartment.
          Needless to say, we were maybe not the best versions of ourselves that night, but we
          somehow became friends and never looked back. From Sophomore Summer spent (not)
          working in the library to numerous parties and trips together, Britni has always been my
          ride-or-die friend, there for me through thick and thin and all of life’s adventures. She’s had
          my back always and in all things, and I can’t wait to do the same for her as we celebrate
          the life she and Sam will make together! The thing I’m most looking forward to about the
          wedding is the music selection and the couple’s first dance. This pair has moves... Also,
          Britni’s dress because she is going to look like the QUEEN that she is.</p>
    ),
    imageUrl: ''
  },{
    name: 'Ms. Ramone Williams',
    blurb: (
        <p>I met Britni in Boston in 2011 when we were introduced by a mutual friend at Harvard
          Medical School. Our first hang out was at an after work mixer where Britni told me ALL
          about Sam! We’ve been friends ever since and we’ve had lots of adventures, one of the
          most memorable was an epic trip to Green Key. Call it coincidence or fate but we moved
          to New York at the same time and our friendship has been stronger than ever. Looking
          forward to witnessing this power couple tie the knot.</p>
    ),
    imageUrl: ''
  }];

  const groomsmen = [{
    name: 'Mr. Jonathan Jackson',
    blurb: (
        <p>I met Sam when my parents decided that he should no longer be an only child. We’re 30
          years into this and it’s been a great time. I met Britni the same year I met Green Key
          Weekend at Dartmouth College. All things considered, she’s exponentially better without
          any of the downside. In fact, Britni is the best thing happen to Sam since me, so we’re
          connected on that. I’m excited for the wedding for the same reason I’m excited about most
          things; how much use I’ll get out of these pictures over the next 6 months while giving zero
          context to anyone who wasn’t with us.</p>
    ),
    imageUrl: '',
    flag: 'Best Man'
  },{
    name: 'Mr. Brenden Stinson',
    blurb: '',
    imageUrl: '',
  },{
    name: 'Mr. Kevin Boakye',
    blurb: (
        <p>I met Samuel Jackson in the Spring of 2002 in Hanover, NH. We affectionately referred to
          him back then as “Khakis” due to the crisply pressed, crotch restricting Banana Republic
          khaki trousers Sam showed up in the weekend of our prospective students’ trip to
          Dartmouth. We became fast friends in college running capers of epic proportions. We’ve
          gone through formative milestones in life together from undergrad to our first job in
          investment banking to business school. Sam is not only my “Ace” in our fraternal bond
          but my Ace in life – a brother I can turn to in any moment knowing he’s got my back. It’s
          an honor to be a pat of the journey as he takes the plunge into matrimony with Britni.<br />
            Britni and I met in 2005, and admittedly our interaction was driven by my self-interested
            attempt to holler at her friend (if you know…you know). Those critical courtship insights
            “Young Stinson” provided laid the foundation for an awesome friendship. Through the
            years we’ve crossed the chasm from relationship consigliere to good friend, to sister.
            What started off as a wing woman situation has blossomed into a more fruitful blessing. I
            love you both dearly and wish you Godspeed as you embark on the rest of your journey
            together and I’m of course looking forward to tearing up T&amp;T with you and your loved
            ones!
        </p>
    ),
    imageUrl: ''
  },{
    name: 'Mr. Orinola Gbadebo-Smith',
    blurb: (
        <p>Sam has been one of my best friends since our first day at Dartmouth. Our hobbies were
          keeping our hairlines as tight as possible, passively insulting one another and getting
          fired from a range of campus jobs. At graduation Sam was so afraid of losing me forever
          that he insisted on following me to Lehman Brothers. After a small sojourn I realized I
          missed Sam so much that I followed him to business school at Harvard. Sam is
          godfather to my 2-year old son, who (against all wisdom) he would like to be the ring-
          bearer at his wedding. Challenge is Anyi (the little boy in question), is a little wild. There
          should be some entertaining moments to add to the wedding festivities, if the choice still
          stands on the day.<br/>
          Britni…I know Britni as the force who exploded into Sam’s life during our senior year of
          college. Since that time I’ve watched them both take shape from up close and afar. Sam
          as, more or less the same gentle soul he was at 18…, and Britni, the tender gust in his
          sails (yes, I’m a wordsmith in his prime, but the sentiment is true all the same). In all
          seriousness, I couldn’t’ be happier to have been witness to Sam and Britni’s growth
          together as a unit, culminating in this spectacular day. Here’s to my new sister, and to
          their wonderful future together!</p>
    ),
    imageUrl: ''
  },{
    name: 'Mr. Russell Gordon',
    blurb: (
        <p>On the surface, attributes like a shared West Indian heritage, being born a day apart and
          a similar taste in music would drive me and Sam to be friends. However, born in rival
          cities, the Yankees – Red Sox feud is a soft proxy for the key distinctions between us. In
          fact, varying allegiances to sports teams, pursuits post-grad, preferred road trip
          destinations, even the physical position on our fraternal line are some of the elements
          that forged the foundation. Identifying the elements that contribute to a man’s character
          growth is a difficult exercise, but I believe that many of Sam’s admirable qualities have
          contributed positively to mine, while the ones that still require attention can readily be
          attributed to other members of the wedding party. Nevertheless, I’m one of many in their
          college and social collective eager to celebrate the union of Britni and Sam.</p>
    ),
    imageUrl: ''
  },{
    name: 'Mr. Jason Lea-Jones',
    blurb: '',
    imageUrl: ''
  },{
    name: 'Mr. Aaron Seabron',
    blurb: (
        <p>I met Sam in late fall 2005 when we were both final round interview candidates for a role
          at BlackRock in New York City. In the waiting room and during lunch we exchanged
          jokes with the other finalists and discovered the fact that we both had proudly dressed as
          Puff Daddy for Halloween. I left our interaction with a favorable impression of the short
          and funny kid from Dartmouth. Fast forward to Summer 2006 and the first day of training
          at Lehman Brothers…this was my big opportunity. I got there early, pulled a fresh
          notebook and pens out of my new backpack ready to make an impression. To my
          surprise that same short and funny kid from Dartmouth sat behind me and immediately
          began cracking jokes on me for taking training too seriously. That day and those jokes
          laid the groundwork for what has become a long-term friendship. From working late
          hours in the same group (although it never seemed like Sam worked that late), to riding
          down the elevator together after Lehman crashed, to riding the emotional roller coaster
          associated with the business school application process, Sam has been a trusted and
          consistent friend that I know I can always count on. I am so honored to be part of the
          group that helps you take that final step into adulthood by taking Britni as your bride.<br/>
          Looking forward joining forces with family and friends to celebrate the completion of this
          love story in Trinidad!</p>
    ),
    imageUrl: ''
  },{
    name: 'Mr. Njuguna “Una” Thiongo',
    blurb: (
        <p>I met Sam during our freshman year at Dartmouth and quickly realized our parents lived
          15 minutes away from each other which led to us spending significant time together
          during breaks as well. I was embraced by his family and we grew close quickly.
          Ultimately, we joined the same fraternity in college, were roommates in New York after
          graduation and spent more than an appropriate amount of time exploring NYC night life.
          I count him among the closest people in my life and I’m excited to be a part of his
          transition to this next stage.<br/>
          I met with Britni when she was a freshman and I was a senior at Dartmouth. In her
          typical opinionated way, she was dissatisfied with who was assigned as her official “Big
          Sib”. After that unexpected pairing we grew closer during our time together in college
          and the relationship continued through now. I couldn’t be happier to see her and Sam
          finally make their union official!</p>
    ),
    imageUrl: ''
  }];
  return (
    <ProtectedPage isLoggedIn={isLoggedIn}>
      <PhotoBlock
        backgroundImage="/static/bs_hero2.png"
        height="500px"
        textColor="#000000"
      >
        <h3>
          Wedding
          <br />
          Party
        </h3>
      </PhotoBlock>


      <section>
        <div className="container">
          <div className="item">
      <h2>Bridesmaids</h2>
          </div>
        </div>
      </section>
      {
        bridesmaids.map(person => (
            <Person data={person} />
        ))
      }
      <h2>Groomsmen</h2>
      {
        groomsmen.map(person => (
            <Person data={person} />
        ))
      }
      <style jsx>{`
      
      section {
        padding: 120px 0 60px;
        display: flex;
        flex-direction: column;
      }

      h2 {
        text-align: center;
        font-family: bickham-script-pro-3, serif;
        font-weight: 100;
        font-size: 90px;
        line-height: 60px;
        margin: 0;
        color: #e3c5c3;
      }
      
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

export default WeddingParty;
