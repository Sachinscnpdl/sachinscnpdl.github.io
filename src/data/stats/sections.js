import profile from '../profile';

const sections = [
  {
    id: 'context',
    title: 'Research Context',
    rows: [
      {
        label: 'Current role',
        value: profile.title,
        link: '/resume',
      },
      {
        label: 'Affiliation',
        value: profile.affiliation,
      },
      {
        label: 'Doctoral thesis',
        value: profile.thesis,
      },
      {
        label: 'NCN project',
        value: profile.ncnProjectId,
        link: profile.ncnProjectUrl,
      },
      {
        label: 'CV',
        value: 'Download PDF',
        link: profile.cvPath,
      },
    ],
  },
  {
    id: 'recognition',
    title: 'Recognition & Engagement',
    rows: [
      {
        label: "Rector's Grant",
        value: '2024 — Silesian University of Technology',
      },
      {
        label: 'UGC Master Research Support',
        value: '2023 — Award No. MRS-78-79-Engg-10',
      },
      {
        label: 'Swiss–Nepal Technology Transfer Workshop',
        value: '2019 (NepSas)',
      },
      {
        label: 'Google Scholar',
        value: 'View profile',
        link: profile.googleScholar,
      },
    ],
  },
];

export default sections;
