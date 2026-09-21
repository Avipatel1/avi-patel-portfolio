import type { Project } from '../data/projects'
import { Icon } from './Icon'
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" aria-labelledby={project.id + '-title'}>
      <figure className="project-figure">
        <a href={project.image} target="_blank" rel="noreferrer" aria-label={'Open full-size figure for ' + project.title}>
          <img src={project.image} alt={project.imageAlt} width={project.imageWidth ?? 720} height={project.imageHeight ?? 480} loading="lazy" />
        </a>
        <figcaption>{project.caption}</figcaption>
      </figure>
      <div className="project-copy">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="eyebrow">{project.number} / {project.category}</p><span className="status"><span />{project.status ?? 'In development'}</span></div>
        <h3 id={project.id + '-title'}>{project.title}</h3>
        <p className="body-copy">{project.description}</p>
        {project.finding && <p className="project-finding">{project.finding}</p>}
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech} className="tech-tag">{tech}</li>)}</ul>
        <a className="text-link mt-7" href={project.repository} target="_blank" rel="noreferrer">Explore repository <Icon /></a>
        <details className="project-details">
          <summary>Project notes <Icon name="plus" /></summary>
          <div className="space-y-5 pb-2 pt-5">
            <div><h4>The question</h4><p>{project.question}</p></div>
            <div><h4>The approach</h4><p>{project.approach}</p></div>
            {project.results && <div className="project-results">
              <h4>Recorded results</h4>
              <p>{project.results.context}</p>
              <div className="results-table-wrap" role="region" aria-label={project.results.caption} tabIndex={0}>
                <table>
                  <caption>{project.results.caption}</caption>
                  <thead><tr>{project.results.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
                  <tbody>{project.results.rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <p>{project.results.limitation}</p>
              {project.results.download && <a className="text-link mt-4" href={project.results.download.href} download>{project.results.download.label} <Icon name="download" /></a>}
              {project.results.figures.map((figure) => <figure className="result-figure" key={figure.image}>
                <a href={figure.image} target="_blank" rel="noreferrer" aria-label={'Open full-size ' + figure.label}>
                  <img src={figure.image} alt={figure.alt} width="2250" height="600" loading="lazy" />
                </a>
                <figcaption><a href={figure.image} target="_blank" rel="noreferrer">{figure.label} ↗</a><a href={figure.metrics} download>Download metrics</a></figcaption>
              </figure>)}
            </div>}
            <div><h4>What comes next</h4><p>{project.next}</p></div>
          </div>
        </details>
      </div>
    </article>
  )
}
