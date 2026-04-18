import airbnbBanner from './assets/airbnb.png';
import azureBanner from './assets/azure.png';
import doordashBanner from './assets/doordash.png';
import flipBanner from './assets/flip.png';
import meckeysBanner from './assets/meckeys.png';
import munchiBanner from './assets/munchi.png';
import recipeBanner from './assets/recipe.png';
import profilePic from './assets/pic.jpg';

function App() {
  const projects = [
    {
      title: 'DoorDash Clone',
      tech: 'HTML & CSS',
      description:
        'Built a responsive DoorDash-inspired landing page to practice layout composition, visual hierarchy, and production-style section design.',
      link: 'https://practicedoor.netlify.app/',
      banner: doordashBanner,
    },
    {
      title: 'Airbnb Clone',
      tech: 'HTML & CSS',
      description:
        'Created an Airbnb-inspired responsive interface focused on clean cards, layout alignment, and responsive design structure.',
      link: 'https://practiceair.netlify.app/',
      banner: airbnbBanner,
    },
    {
      title: 'Azure Clone',
      tech: 'HTML & CSS',
      description:
        'Developed a Microsoft Azure-style landing page to improve my understanding of enterprise-style layouts and modern section spacing.',
      link: 'https://clone-azure.netlify.app/',
      banner: azureBanner,
    },
    {
      title: 'Meckeys Website Clone',
      tech: 'HTML, CSS, JavaScript',
      description:
        'Built an interactive clone with JavaScript-powered UI behavior, DOM manipulation, and better responsiveness for a realistic storefront feel.',
      link: 'https://meckeys-clone.netlify.app/',
      banner: meckeysBanner,
    },
    {
      title: 'Flipkart Clone',
      tech: 'React.js & JavaScript',
      description:
        'Developed an e-commerce inspired React application with dynamic rendering, reusable components, and product-oriented UI structure.',
      link: 'https://clone-flip-kart.netlify.app/',
      banner: flipBanner,
    },
    {
      title: 'Munchi Mist',
      tech: 'HTML, CSS, JavaScript',
      description:
        'Created a personal food ordering web app with cart flow, appealing UI sections, and a practical user experience inspired by real ordering apps.',
      link: 'https://munchi-mist.netlify.app/',
      banner: munchiBanner,
    },
    {
      title: 'Recipe Website',
      tech: 'React JS & JavaScript',
      description:
        'Built a recipe-focused website with a visually engaging interface to present food content in a clean, accessible, and responsive way.',
      link: 'https://simply-simmered-recipe.netlify.app/',
      banner: recipeBanner,
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Responsive Design',
    'GitHub',
    'AI Integration',
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_right,_rgba(168,85,247,0.16),_transparent_25%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.14),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium tracking-wide text-cyan-300">
              Personal Portfolio
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Vaishnav V Nair
            </h1>
            <p className="mt-4 text-xl font-semibold text-violet-300 sm:text-2xl">
              Web Developer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Hi, I’m Vaishnav V Nair. I’m an aspiring full-stack developer with a
              background in BCA, currently focused on learning and building modern
              web applications using technologies like React, Node.js, and
              integrating AI. I enjoy creating simple, user-friendly, and
              responsive designs.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Alongside my tech journey, I run a cloud kitchen, which has helped
              me understand real-world problem solving, discipline, and
              consistency. I’m working towards becoming a skilled developer and
              building projects that are practical, impactful, and meaningful.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/vaishnav1106"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnav-v-nair-7070681a2/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-violet-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300 hover:bg-violet-400/10"
              >
                LinkedIn
              </a>
              <a
                href="#resume"
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20"
              >
                View Resume
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:vaishnav8794@gmail.com"
                  className="mt-2 block text-sm font-medium text-white hover:text-cyan-300"
                >
                  vaishnav8794@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Phone
                </p>
                <a
                  href="tel:7592819736"
                  className="mt-2 block text-sm font-medium text-white hover:text-cyan-300"
                >
                  +91 7592819736
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-950/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-pink-500/20" />
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={profilePic}
                  alt="Vaishnav V Nair profile"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Education
            </p>
            <h2 className="mt-3 text-xl font-bold text-white">BCA Background</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Built a strong academic foundation that supports my transition into
              modern web development and full-stack learning.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
              Experience
            </p>
            <h2 className="mt-3 text-xl font-bold text-white">Cloud Kitchen</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Running a cloud kitchen taught me discipline, consistency, and how
              to solve real-world operational problems under pressure.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-pink-300">
              Goal
            </p>
            <h2 className="mt-3 text-xl font-bold text-white">
              Full-Stack Growth
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Focused on becoming a developer who builds meaningful, practical,
              and visually polished digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tools I’m learning and using
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-cyan-950/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Journey
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            My path into web development
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            My journey has not been a straight line. It has been shaped by
            difficult phases, hands-on work, and a strong desire to return to
            technology with more maturity and focus.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Phase 01
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Unemployment Days
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This phase taught me patience, self-reflection, and the importance
              of continuously learning even when progress feels slow.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-400/20 bg-violet-400/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              Phase 02
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Cloud Kitchen Journey
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Running a cloud kitchen taught me discipline, consistency, customer
              understanding, and how to solve practical day-to-day problems with
              focus.
            </p>
          </div>

          <div className="rounded-3xl border border-pink-400/20 bg-pink-400/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
              Phase 03
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Back to Development
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I returned to web development with stronger motivation, focusing on
              React, Node.js, responsive design, and building practical projects
              that move me closer to full-stack development.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Practice projects that shaped my learning
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            These projects helped me understand layouts, responsive design,
            interactivity, and component-based frontend development.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <img
                src={project.banner}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {project.tech}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Visit Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="resume"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Resume
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Resume link will be added soon
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            A resume download button is ready in the design. For now it uses a
            vacant placeholder, and your real resume link can be added later.
          </p>

          <div className="mt-8">
            <a
              href="#resume"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Resume Coming Soon
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let’s connect and build something meaningful
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            I’m continuously learning, building, and growing as a developer. If
            you’d like to connect, collaborate, or check out my work, feel free
            to reach out through my social profiles or personal contact details.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <a
              href="mailto:vaishnav8794@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Email
              </p>
              <p className="mt-3 text-sm font-medium text-white">
                vaishnav8794@gmail.com
              </p>
            </a>
            <a
              href="tel:7592819736"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Phone
              </p>
              <p className="mt-3 text-sm font-medium text-white">
                +91 7592819736
              </p>
            </a>
            <a
              href="https://github.com/vaishnav1106"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                GitHub
              </p>
              <p className="mt-3 text-sm font-medium text-white">
                github.com/vaishnav1106
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnav-v-nair-7070681a2/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                LinkedIn
              </p>
              <p className="mt-3 text-sm font-medium text-white">
                View Profile
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
