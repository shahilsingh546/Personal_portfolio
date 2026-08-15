import { education, experience, profile, projects, skills } from "@/lib/data";

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint mb-8">
        {label}
      </h2>
      {children}
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
    >
      {children}
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] text-muted border border-line rounded-full px-2.5 py-0.5">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-28 flex flex-col gap-20">
      {/* Hero */}
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-muted">
          {profile.role} at {profile.company} · {profile.location}
        </p>
        <p className="mt-6 max-w-prose leading-relaxed text-muted">
          {profile.summary}
        </p>
        <nav className="mt-6 flex items-center gap-5 font-mono text-sm">
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
        </nav>
      </header>

      <Section id="experience" label="Experience">
        <ol className="flex flex-col gap-12">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <div className="font-mono text-xs text-faint pt-1 whitespace-nowrap">
                {job.period}
              </div>
              <div>
                <h3 className="font-medium">
                  {job.role} · {job.company}
                </h3>
                <p className="text-sm text-faint">{job.location}</p>
                <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span aria-hidden className="text-faint select-none">–</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="projects" label="Projects">
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-line bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{project.name}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted transition-colors hover:text-foreground"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span aria-hidden className="text-faint select-none">–</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" label="Skills">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="font-mono text-xs text-faint mb-2">{group.label}</dt>
              <dd className="text-sm leading-relaxed text-muted">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="education" label="Education">
        <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <div className="font-mono text-xs text-faint pt-1 whitespace-nowrap">
            {education.period}
          </div>
          <div>
            <h3 className="font-medium">{education.school}</h3>
            <p className="text-sm text-muted">{education.degree}</p>
            <p className="text-sm text-faint">{education.detail}</p>
          </div>
        </div>
      </Section>

      <footer className="border-t border-line pt-8 flex items-center justify-between text-sm text-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs transition-colors hover:text-foreground"
        >
          {profile.email}
        </a>
      </footer>
    </main>
  );
}
