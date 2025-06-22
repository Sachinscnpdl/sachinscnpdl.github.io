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
    startDate: '2023-04-01', // Changed to April 2023
    endDate: null,
    summary: 'Research team member in the National Science Centre (NCN), Poland, funded project.',
    highlights: [
      'Conducting PhD research in computational materials science, focusing on multicomponent Functional alloys.',
      'Designed multiscale computational framework to study multi-physics interfacial phenomenon in multi-component alloys.',
    ],
  },
  {
    name: 'COSMOS College of Management and Technology, Nepal',
    position: 'Lecturer',
    url: 'https://cosmoscollege.edu.np/',
    startDate: '2022-02-01',
    endDate: '2023-01-31',
    summary: 'Delivered lectures and instructed in laboratory on mechanical engineering subjects.',
    highlights: [
      'Delivered lectures on Thermal Science (MEC 111) and Engineering Drawing (MEC 120).',
    ],
  },
  {
    name: 'IOE, Thapathali Campus, Tribhuvan University, Nepal',
    position: 'Teaching Assistant',
    url: 'https://www.ioe.edu.np/',
    startDate: '2021-11-01',
    endDate: '2023-02-28',
    summary: 'Teaching core mechanical engineering courses.',
    highlights: [
      'Teaching Engineering Drawing I (ME401), Engineering Drawing II (ME451), Computer Aided Drawing (ME 505).',
    ],
  },
  {
    name: 'Calcgen Solutions, Nepal',
    position: 'Mechanical Design Engineer',
    url: '', // Add actual URL if available
    startDate: '2019-06-01',
    endDate: '2021-11-30',
    summary: '', // No specific summary provided, can add if needed
    highlights: [
      'Conducted finite element analysis and stress analysis of pressure vessel components.',
      'Performed mechanical calculations and drafting of pressure vessels based on ASME Section VIII.',
    ],
  },
  {
    name: 'Nepal Airlines Corporation, Nepal',
    position: 'Intern',
    url: 'https://www.nepalairlines.com.np/', // Add actual URL if available
    startDate: '2018-09-01',
    endDate: '2018-12-31',
    summary: '', // No specific summary provided, can add if needed
    highlights: [
      'Diagnosed aircraft vehicles.',
      'Assisted in the repair and maintenance of various aircraft models.',
    ],
  },
];

export default work;