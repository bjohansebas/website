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
