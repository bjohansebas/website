export const LANGUAGES: Record<string, { code: string; name: string }> = {
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const ui = {
  en: {
    "landing.hero.role": "Full-stack Developer",
    "landing.hero.available": "Available for freelance",
    "landing.hero.description":
      "Hi! I'm Sebastian, a <highlight>Full-stack developer</highlight> with experience in web application development. I'm passionate about contributing to and building <highlight>open-source projects</highlight>. I love exploring new technologies and finding creative solutions to development challenges.",
    "landing.oss.title": "Communities I Contribute to",
    "landing.oss.support": "Support",
    "landing.oss.subtitle":
      "I have been helping these projects in my free time.",
    "landing.oss.viewDetails": "View details",
    "landing.oss.contributions": "Contributions:",
    "landing.oss.viewOnGitHub": "View on GitHub:",
    "landing.sponsors.title": "Sponsors",
    "landing.sponsors.subtitle": "Thanks to the people who support my work.",
    "landing.sponsors.empty": "Be the first to support my open source work!",
    "landing.sponsors.become": "Become a sponsor",
    "footer.text": "Building software with ♥ from 🇨🇴 to the world.",
    "nav.home": "Home",
    "nav.resume": "Resume",
    "hero.a.email.title": "Send e-mail to {name} at {email}",
    "hero.a.phone.title": "Call {name} at {phone}",
    "hero.a.social.title": "Visit {name}'s profile on {network}",
    "about.title": "About me",
    "experience.title": "Experience",
    "experience.current": "Current",
    "education.title": "Education",
    "education.current": "Current",
    "projects.title": "Personal projects",
    "projects.see.project": "See project {name}",
    "projects.see.repo": "See source code of project {name}",
    "skills.title": "Skills",
    "languagepicker.a.title": "Change to spanish version",
    "cv.title": ({ name, label }: { name: string; label: string }) =>
      `${name}'s CV - ${label}`,
    "cv.about": "About me",
    "cv.experience": "Work Experience",
    "cv.education": "Education",
    "cv.projects": "Projects",
    "cv.skills": "Skills",
    "cv.oss": "Open Source",
    "cv.language": "Languages",
    "common.present": "Present",
    "common.seeLink": ({ link }: { link: string }) => `See ${link}`,
    "see.email": ({ name, email }: { name: string; email: string }) =>
      `Send an email to ${name} at ${email}`,
    "see.network": ({ name, network }: { name: string; network: string }) =>
      `Visit ${name}'s profile on ${network}`,
    "see.project": ({ name }: { name: string }) => `See the project ${name}`,
    "see.source": ({ name }: { name: string }) =>
      `See the source code of the project ${name}`,
    "commands.search": "Search command",
    "commands.print": "Print",
    "commands.social": ({ network }: { network: string }) => `Visit ${network}`,
    "commands.seccions.actions": `Actions`,
    "commands.seccions.network": `Network`,
    "commands.footer":
      "Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open the command palette.",
  },
  es: {
    "landing.hero.role": "Desarrollador Full-stack",
    "landing.hero.available": "Disponible para freelance",
    "landing.hero.description":
      "¡Hola! Soy Sebastian, un <highlight>desarrollador Full-stack</highlight> con experiencia en desarrollo de aplicaciones web. Me apasiona contribuir y construir <highlight>proyectos open-source</highlight>. Me encanta explorar nuevas tecnologías y encontrar soluciones creativas a los desafíos del desarrollo.",
    "landing.oss.title": "Comunidades a las que Contribuyo",
    "landing.oss.support": "Apoyar",
    "landing.oss.subtitle":
      "He estado ayudando a estos proyectos en mi tiempo libre.",
    "landing.oss.viewDetails": "Ver detalles",
    "landing.oss.contributions": "Contribuciones:",
    "landing.oss.viewOnGitHub": "Ver en GitHub:",
    "landing.sponsors.title": "Patrocinadores",
    "landing.sponsors.subtitle":
      "Gracias a las personas que apoyan mi trabajo.",
    "landing.sponsors.empty":
      "¡Sé el primero en apoyar mi trabajo open source!",
    "landing.sponsors.become": "Convertirse en patrocinador",
    "footer.text": "Construyendo software con ♥ desde 🇨🇴 para el mundo.",
    "nav.home": "Inicio",
    "nav.resume": "Currículum",
    "hero.a.email.title":
      "Enviar un correo electrónico a {name} al correo {email}",
    "hero.a.phone.title": "Llamar por teléfono a {name} al número {phone}",
    "hero.a.social.title": "Visitar el perfil de {name} en {network}",
    "about.title": "Sobre mí",
    "experience.title": "Experiencia laboral",
    "experience.current": "Actual",
    "education.title": "Educación",
    "education.current": "Actual",
    "projects.title": "Proyectos personales",
    "projects.see.project": "Ver el proyecto {name}",
    "projects.see.repo": "Ver código fuente del proyecto {name}",
    "skills.title": "Habilidades",
    "languagepicker.a.title": "Cambiar a versión en inglés",
    "cv.title": ({ name, label }: { name: string; label: string }) =>
      `CV de ${name} - ${label}`,
    "cv.about": "Sobre mí",
    "cv.experience": "Experiencia laboral",
    "cv.oss": "Open Source",
    "cv.education": "Educación",
    "cv.projects": "Proyectos",
    "cv.skills": "Habilidades",
    "cv.language": "Idiomas",
    "common.present": "Actual",
    "common.seeLink": ({ link }: { link: string }) => `Ver ${link}`,
    "see.email": ({ name, email }: { name: string; email: string }) =>
      `Enviar un correo electrónico a ${name} al correo ${email}`,
    "see.network": ({ name, network }: { name: string; network: string }) =>
      `Visitar el perfil de ${name} en ${network}`,
    "see.project": ({ name }: { name: string }) => `Ver el proyecto ${name}`,
    "see.source": ({ name }: { name: string }) =>
      `Ver código fuente del proyecto ${name}`,
    "commands.search": "Buscar comando",
    "commands.print": "Imprimir",
    "commands.social": ({ network }: { network: string }) =>
      `Visitar ${network}`,
    "commands.seccions.actions": `Acciones`,
    "commands.seccions.network": `Social`,
    "commands.footer":
      "Pulsa <kbd>Cmd</kbd> + <kbd>K</kbd> para abrir la paleta de comandos.",
  },
} as const;

export const routes = {
  en: {
    cv: "cv",
  },
  es: {
    cv: "cv",
  },
};
