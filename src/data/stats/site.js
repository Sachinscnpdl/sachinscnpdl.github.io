import dayjs from 'dayjs';

const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/sachinscnpdl/sachinscnpdl.github.io/stargazers',
    icon: 'star',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/sachinscnpdl/sachinscnpdl.github.io/stargazers',
    icon: 'eye',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/sachinscnpdl/sachinscnpdl.github.io/network',
    icon: 'code-branch',
  },

  {
    label: 'Number of linter warnings',
    value: '0',
    icon: 'exclamation-triangle',
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/sachinscnpdl/sachinscnpdl.github.io/issues',
    icon: 'exclamation-circle',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/sachinscnpdl/sachinscnpdl.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
    icon: 'clock',
  },
  {
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/sachinscnpdl/sachinscnpdl.github.io/graphs/contributors',
    icon: 'code',
  },
];

export default data;