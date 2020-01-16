const conditionalRender = require('../../public/components/util/conditionalResultsRendering');

describe('conditional results rendering', () => {
  it('should render results from a summary object', () => {
    const setArray = [['Title: ', 'summaryTitle'], ['Year Published: ', 'yearPublished'], ['Number of Participants: ', 'numParticipants.entry']];

    const summary = {
      summaryTitle: 'Megaman saves the world once again',
      yearPublished: 2019,
      numParticipants: {
        tag: 'Everyone',
        headline: 'Oh my gosh so many people',
        entry: 'literally everyone in the world'
      }
    };

    const destinationDiv = document.createElement('div');

    conditionalRender(summary, setArray, destinationDiv);

    console.log(destinationDiv);
    
  });
});
