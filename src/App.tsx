import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { OrbitalIllustration } from './components/OrbitalIllustration'
import { ProjectCard } from './components/ProjectCard'
import { ContactForm } from './components/ContactForm'
import { projects } from './data/projects'
import { ResearchCard } from './components/ResearchCard'
import { research, laboratoryRepository } from './data/research'
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section id="home" className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="small-line" />PHYSICS GRADUATE · CURIOUS BY NATURE</p>
            <h1>Understanding<br />the world.<br /><em>Building with it.</em></h1>
            <p className="hero-description">I’m Avi, a physics graduate exploring the intersection of <strong>scientific computing, software, and data.</strong> I turn questions about physical systems into code.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#projects" className="button button-primary">Explore my work <span aria-hidden="true">↓</span></a><a href="https://github.com/Avipatel1" target="_blank" rel="noreferrer" className="button button-quiet">GitHub <Icon /></a></div>
          </div>
          <OrbitalIllustration />
          <div className="hero-bottom"><span><span className="availability-dot" />OPEN TO ENTRY-LEVEL OPPORTUNITIES</span><a href="#projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </section>
        <section id="projects" className="section shell">
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Questions, translated into code.</h2></div><p>Independent projects in simulation<br className="hidden lg:block" /> and scientific machine learning.</p></div>
          <div className="space-y-7">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        </section>
        <section id="experimental-work" className="section shell" aria-labelledby="experimental-work-title">
          <div className="section-heading research-heading">
            <div><p className="eyebrow">02 / EXPERIMENTAL PHYSICS</p><h2 id="experimental-work-title">Testing theory against the physical world.</h2></div>
            <p>Selected undergraduate physics laboratory investigations involving experimental design, quantitative analysis, uncertainty, and comparison between theoretical and measured behaviour.</p>
          </div>
          <div className="research-grid">{research.map((report) => <ResearchCard key={report.id} report={report} />)}</div>
          <a className="text-link research-repository-link" href={laboratoryRepository} target="_blank" rel="noopener noreferrer" aria-label="Explore the complete laboratory-report repository on GitHub (opens in a new tab)">Explore all laboratory reports <Icon /></a>
        </section>
        <section id="about" className="section shell about-section">
          <div><p className="eyebrow">03 / A LITTLE BACKGROUND</p><h2>A foundation in physics.<br /><em>A habit of exploring.</em></h2></div>
          <div>
            <p className="about-lead">I’m interested in what happens when mathematical ideas become something you can build, test, and explore.</p>
            <p className="body-copy mt-5">I hold a BSc in physics with a minor in computer science. Through independent projects, I’m developing practical experience modeling physical systems, working with data, and examining how computational methods behave.</p>
            <p className="body-copy mt-4">I’m looking for an entry-level technical role where I can contribute that foundation, keep learning, and work on meaningful problems.</p>
            <div className="education-row"><span className="education-mark" aria-hidden="true">∑</span><div><h3>Bachelor of Science in Physics</h3><p>Minor in Computer Science</p></div></div>
            <div className="experience-note"><p className="eyebrow">BEYOND THE CLASSROOM</p><h3>Shopify storefront design & operations</h3><p className="body-copy">Helped launch a storefront, designed its pages using Shopify’s tools, and maintained product images, descriptions, pricing, and inventory.</p></div>
          </div>
        </section>
        <section id="resume" className="shell resume-section">
          <div><p className="eyebrow">04 / THE FULL PICTURE</p><h2>My background, on paper.</h2><p className="body-copy mt-3">Education, projects, skills, and employment history.</p></div>
          <a className="button button-outline" href="/Avi_Patel_Resume.pdf" download>Download résumé <span className="pdf-label">PDF</span><Icon name="download" /></a>
        </section>
        <section id="contact" className="section shell contact-section">
          <div><p className="eyebrow">05 / GET IN TOUCH</p><h2>Let’s start<br /><em>a conversation.</em></h2><p className="body-copy mt-6">Have an entry-level opportunity in software, data, or scientific computing? I’d like to hear about it.</p><a className="email-link" href="mailto:avixpatel@hotmail.com">avixpatel@hotmail.com <Icon /></a></div>
          <ContactForm />
        </section>
      </main>
      <footer className="shell footer"><a className="wordmark" href="#home">avi patel<span>.</span></a><p>Physics. Curiosity. Code.</p><span>© {new Date().getFullYear()} Avi Patel</span></footer>
    </>
  )
}
