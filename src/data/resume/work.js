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
    name: 'Cosmos College of Management and Technology',
    position: 'Lecturer',
    startDate: '2022-02-01',
    endDate: '2023-03-01',
    location: 'Tutepani, Lalitpur, Nepal',
    summary: '',
    highlights: [],
  },
  {
    name: 'Calcgen Solutions',
    position: 'Mechanical Design Engineer',
    startDate: '2019-06-01',
    endDate: '2021-11-01',
    location: 'Kathmandu, Bāgmatī, Nepal',
    summary: '',
    highlights: [],
  },
  {
    name: 'Nepal Airlines Corporation',
    position: 'Intern',
    startDate: '2018-09-01',
    endDate: '2018-12-01',
    location: 'Kathmandu, Bāgmatī, Nepal',
    summary: 'Duties and Responsibilities:',
    highlights: [
      'Diagnosis of Aircraft vehicles',
      'Repair and maintenance of Aircrafts.',
      'Assisting the technicians to repair and maintain aircrafts of different models.',
    ],
  },
];


export default work;
