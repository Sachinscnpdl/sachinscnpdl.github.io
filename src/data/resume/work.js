/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Silesian University of Technology, Poland',
    position: 'Graduate Researcher',
    url: 'https://www.polsl.pl/en/',
    startDate: '2023-04-01',
    endDate: null,
    summary: 'Research team member in a National Science Centre (NCN), Poland funded project.',
    highlights: [
      'Developing doctoral research on multicomponent alloys and advanced functional materials.',
      'Building computational and data-driven workflows for microstructure evolution, functional response, and interface-sensitive performance.',
    ],
  },
];

export default work;
