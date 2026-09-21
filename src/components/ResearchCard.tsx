import type { LaboratoryReport } from '../data/research'
import { Icon } from './Icon'

interface ResearchCardProps {
  readonly report: LaboratoryReport
}

export function ResearchCard({ report }: ResearchCardProps) {
  return (
    <article className="research-card" aria-labelledby={report.id + '-title'}>
      <p className="eyebrow">{report.category}</p>
      <h3 id={report.id + '-title'}>{report.title}</h3>
      <p className="body-copy">{report.summary}</p>
      <p className="research-result">{report.result}</p>
      <ul className="research-skills" aria-label={'Skills used in ' + report.title}>
        {report.skills.map((skill) => <li className="tech-tag" key={skill}>{skill}</li>)}
      </ul>
      <a className="text-link research-report-link" href={report.url} target="_blank" rel="noopener noreferrer" aria-label={'View report: ' + report.title + ' (opens in a new tab)'}>
        View report <Icon />
      </a>
    </article>
  )
}
