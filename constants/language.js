import React from 'react';

export default {
  authPrompt: () => 'Please enter the password to proceed.',
  authErrorMessage: () =>
    'Sorry, the password you entered is incorrect.  Please try again.',
  dateDay: () => 'Saturday',
  dateFullDate: () => '06.06.20',
  dateMonth: () => '06',
  dateDate: () => '06',
  dateYear: () => '20',
  destinationDetail: () => 'Trinidad and Tobago',
  destinationGeneral: () => 'West Indies',
  hashtag: () => '#bsandbacchanal',
  comingSoonHeading: () => 'Coming Soon...',
  comingSoonDefaultText: () => `We are working to provide you with the best experience possible!  Please check back in the 
                          upcoming weeks for more details.`,
  comingSoonThingsToDo: () =>
      ( <p>For questions regarding travel, accommodations or any of the scheduled events please
        contact us @ <a href='mailto:britniandsamuel@gmail.com' style={{color: '#e3c5c3'}}>britniandsamuel@gmail.com</a></p>
      ),
  comingSoonSchedule: () =>
    `We're still planning the weekend's events and will update this page soon.`,
  registryHeading: () => `Your presence is a present`,
  registryText: () => `Your presence is the greatest gift for our upcoming nuptials. If you'd
          like to share a gift please feel free to visit our registries using the links below. All of our
          love!`
};
