---
title: "Resumen de enero de 2026"
date: "January 29, 2026"
description: "Actualización mensual de contribuciones open-source: releases de iconv-lite, cambios clave en Express y on-finished, mejoras de rendimiento, trabajo en Webpack y avances en tooling, seguridad y documentación."
---

Hola 👋

Quería compartir un resumen de lo que he estado haciendo este último mes en open-source. Ha sido un mes intenso, muy productivo y bastante emocionante.

Entre releases, trabajo en Express, Webpack, mejoras de rendimiento, seguridad y nuevas versiones mayores en camino, han pasado bastantes cosas que valen la pena contar.

## 📦 Nuevas releases

Este mes comenzó con varias publicaciones importantes:

- [iconv-lite@0.7.2](https://github.com/pillarjs/iconv-lite/releases/tag/v0.7.2):

  Esta versión corrigió un problema con TypeScript. Las definiciones de tipos ahora funcionan correctamente, por lo que puedes usar el paquete sin inconvenientes en proyectos TypeScript.

- [iconv-lite@alpha.1](https://github.com/pillarjs/iconv-lite/releases/tag/v1.0.0-alpha.1):
  Incluye gran parte del trabajo realizado por [Alexander Shtuchkin](https://github.com/ashtuchkin) y presenta la idea de tener backers para diferentes implementaciones de buffers. Además, ahora utiliza TextDecoder, lo que mejora considerablemente el soporte tanto en navegadores como en Node.js y otros runtimes.

## 🚀 Próximos cambios en Express y su ecosistema

### Nueva versión mayor de `on-finished`

Una nueva versión mayor de `on-finished` está casi lista.
Esta versión moderniza el código usando la implementación nativa de finished de Node.js y añade soporte oficial para HTTP/2 (ver [on-finished#87](https://github.com/jshttp/on-finished/pull/87)).

Una vez lanzada y adoptada por los paquetes que la usan, será posible desbloquear funcionalidades en Express u otros frameworks que dependendian de el que antes no se podían utilizar.

Un ejemplo es `optimizeEmptyRequests`, una opción de Node.js para [createServer](https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener), que hasta ahora estaba bloqueada principalmente por `on-finished`.

### Mejora de rendimiento en `res.send()`

En la siguiente versión de Express, también habrá una pequeña mejora de rendimiento cuando se envía únicamente un string con `res.send()`.

Antes se hacía un doble procesamiento para establecer el `Content-Type`; ahora este proceso se realizará una sola vez, siempre que el `Content-Type` no haya sido definido previamente. Puedes ver más detalles en la PR [express#6991](https://github.com/expressjs/express/pull/6991).

## 🎨 Rediseño de la página web de Express

Después de meses de discusiones y de trabajo que muchas veces no se ve, ya comenzó oficialmente el trabajo de rediseño de la página web de Express.

Estoy liderando este esfuerzo con el objetivo de modernizar la experiencia, mejorar la claridad de la documentación, la navegación y hacer que el sitio represente mejor el estado actual y futuro del proyecto.

Para este trabajo contamos además con la ayuda de [Orama](https://orama.com/?utm_source=bjohansebas.me), que está colaborando directamente en el rediseño de la web como apoyo al proyecto Express.

Aun así, seguimos necesitando la participación de la comunidad: ideas, revisiones, feedback y propuestas son clave para que este rediseño represente realmente a quienes usan y mantienen Express.

Este es un trabajo abierto y colaborativo, y cualquier tipo de ayuda es bienvenida:

- Revisión de diseños y propuestas visuales.
- Ideas sobre estructura, contenido o experiencia de usuario.
- Feedback general, incluso si no es técnico.

Si te interesa participar o dar feedback, eres bienvenido a unirte al [Slack de la OpenJS Foundation](https://slack-invite.openjsf.org/), en el canal #express-website, donde estamos coordinando el trabajo y discutiendo ideas.

## 🛠️ Codemods y tooling

Me complace anunciar que los codemods oficiales de Express ahora están
disponibles en la plataforma [codemod.com](https://codemod.com?utm_source=bjohansebas.me).

Esto facilita la creación y distribución de codemods, permite que cualquiera pueda ejecutarlos fácilmente y evita que el equipo de Express tenga que mantener un CLI compatible con todos los entornos.

## 🔐 Seguridad y Webpack

También me uní al equipo de triage de seguridad de Webpack, donde ayudaré a revisar y gestionar los reportes de seguridad que lleguen al proyecto, contribuyendo a mantener seguro el ecosistema de Webpack.

Junto con esto, vienen cosas nuevas e interesantes que espero poder compartir pronto 👀

## 🔧 Trabajo en curso

- Estoy colaborando con el equipo de Webpack en una nueva versión mayor de `webpack-dev-server`, que incorporará `Express v5`.

  Esto permitirá que el proyecto se mantenga actualizado y aproveche las mejoras que trae Express v5.

- Además, se lanzaron nuevas versiones de express-session y serve-index, que incluyen varias mejoras y correcciones de errores.

Si deseas apoyarme directamente, puedes hacerlo a través de [GitHub Sponsors](https://github.com/sponsors/bjohansebas).

Además, actualmente estoy buscando patrocinio para poder adquirir una nueva laptop que me permita seguir contribuyendo de forma sostenible al open-source. Puedes leer el contexto completo y los detalles en este [post](/es/blog/sponsor-my-laptop)

Gracias por leer y por apoyar de la forma que sea este camino 🙏.
