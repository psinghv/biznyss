import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/site';

export default function CaseStudyFilter() {
  const categories = ['All', 'AI Creative', 'Software', 'Marketing', 'Automation'];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? caseStudies : caseStudies.filter((item) => item.category === active);
  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter case studies">
        {categories.map((category) => <button className={active === category ? 'active' : ''} onClick={() => setActive(category)} key={category}>{category}</button>)}
      </div>
      <div className="case-grid">
        {filtered.map((study) => (
          <a className="case-card" href={`/work/${study.slug}`} key={study.slug}>
            <div className="case-art"><span>{study.category}</span><b>{study.title.slice(0, 1)}</b></div>
            <div className="case-content"><small>{study.industry}</small><h2>{study.title}</h2><p>{study.impact}</p><strong>{study.metrics[0]} <ArrowUpRight aria-hidden="true" size={18} /></strong></div>
          </a>
        ))}
      </div>
    </>
  );
}
