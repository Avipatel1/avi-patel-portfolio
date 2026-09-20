import type { Project } from '../data/projects'
import { Icon } from './Icon'
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" aria-labelledby={project.id + '-title'}>
      <figure className="project-figure">
        <img src={project.image} alt={project.imageAlt} width="720" height="480" loading="lazy" />
        <figcaption>{project.caption}</figcaption>
      </figure>
      <div className="project-copy">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="eyebrow">{project.number} / {project.category}</p><span className="status"><span />In development</span></div>
        <h3 id={project.id + '-title'}>{project.title}</h3>
        <p className="body-copy">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech} className="tech-tag">{tech}</li>)}</ul>
        <a className="text-link mt-7" href={project.repository} target="_blank" rel="noreferrer">Explore repository <Icon /></a>
        <details className="project-details">
          <summary>Project notes <Icon name="plus" /></summary>
          <div className="space-y-5 pb-2 pt-5">
            <div><h4>The question</h4><p>{project.question}</p></div>
            <div><h4>The approach</h4><p>{project.approach}</p></div>
            <div><h4>What comes next</h4><p>{project.next}</p></div>
          </div>
        </details>
      </div>
    </article>
  )
}