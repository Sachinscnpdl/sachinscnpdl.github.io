import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import MetricsGrid from '../components/Stats/MetricsGrid';
import StatsSection from '../components/Stats/StatsSection';
import metrics from '../data/stats/metrics';
import sections from '../data/stats/sections';

const Stats = () => (
  <Main
    title="Research Profile & Stats"
    description="Research profile statistics for Sachin Poudel: publications, presentations, doctoral context, and recognition."
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Stats</Link>
          </h2>
          <p>
            An overview of my research portfolio, doctoral context, and recognition.
          </p>
        </div>
      </header>

      <MetricsGrid metrics={metrics} />

      <div className="stats-sections">
        {sections.map((section) => (
          <StatsSection
            key={section.id}
            id={section.id}
            title={section.title}
            data={section.rows}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Stats;
