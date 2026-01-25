---
title: January 2025 Review
date: "January 27, 2025"
draft: true
---

Hola 👋

Quería compartir un resumen de lo que he estado haciendo este último mes en open-source. Ha sido un mes intenso, muy productivo y bastante emocionante.

Entre releases, trabajo en Express, Webpack, mejoras de rendimiento, seguridad y nuevas versiones mayores en camino, han pasado bastantes cosas que valen la pena contar.

## 📦 Nuevas releases

Este mes comenzó con varias publicaciones importantes:

- iconv-lite@0.7.2:

  Esta versión corrigió un problema con TypeScript. Las definiciones de tipos ahora funcionan correctamente, por lo que puedes usar el paquete sin inconvenientes en proyectos TypeScript.

- iconv-lite@alpha.1:
  Incluye gran parte del trabajo realizado por [Alexander Shtuchkin](https://github.com/ashtuchkin) y presenta la idea de tener backers para diferentes implementaciones de buffers. Además, ahora utiliza TextDecoder, lo que mejora considerablemente el soporte tanto en navegadores como en Node.js y otros runtimes.

## 🚀 Próximos cambios en Express y su ecosistema

- Una nueva versión mayor de `on-finished` está casi lista.
  Esta versión moderniza el código usando la implementación nativa de finished de Node.js y añade soporte oficial para HTTP/2 (ver [on-finished#87](https://github.com/jshttp/on-finished/pull/87)).

      Una vez lanzada y adoptada por los paquetes que la usan, será posible desbloquear funcionalidades en Express u otros frameworks que dependendian de el que antes no se podían utilizar, como optimizeEmptyRequests una opcion de nodejs para [createServer](https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener), ya que `on-finished` era el bloqueador principal para usarlo.

- En la siguiente versión de Express, también habrá una pequeña mejora de rendimiento cuando se envía únicamente un string con `res.send()`.
  Antes se hacía un doble procesamiento para establecer el Content-Type; ahora se hará solo una vez si previamente no se habia establecido el content-type con el que la peticion iba a ser hecha. Puedes ver más detalles en la PR [express#6991](https://github.com/expressjs/express/pull/6991).

## 🛠️ Codemods y tooling

Me complace anunciar que los codemods oficiales de Express ahora están
disponibles en la plataforma [codemod.com](https://codemod.com?utm_source=bjohansebas.me).

Esto nos permite crear y distribuir codemods de forma más sencilla, y facilita que cualquiera pueda usarlos sin preocuparnos el equipo de express por un CLI que funcione en todos los entornos.

## 🔐 Seguridad y Webpack

También me uní al equipo de triage de seguridad de Webpack, donde ayudaré a revisar y gestionar los reportes de seguridad que lleguen al proyecto, contribuyendo a mantener seguro el ecosistema de Webpack.

Junto con esto, vienen cosas nuevas e interesantes que espero poder compartir pronto 👀

## 🔧 Trabajo en curso

- Estoy colaborando con el equipo de Webpack en una nueva versión mayor de webpack-dev-server, que incorporará Express v5.

  Esto permitirá que el proyecto se mantenga actualizado y aproveche las mejoras que trae Express v5.

- Además, se lanzaron nuevas versiones de express-session y serve-index, que incluyen varias mejoras y correcciones de errores.

## 💻 Buscando apoyo para una nueva laptop

Actualmente estoy buscando funding para una nueva laptop, que me permita seguir trabajando de forma sostenible en estos proyectos open-source.
Gran parte de mi trabajo depende de contar con un entorno de desarrollo estable y potente, y mi equipo actual ya está llegando a sus límites, especialmente para tareas de builds, testing y desarrollo en proyectos grandes como Express y Webpack.

Contar con una nueva laptop me ayudaría a:

- Mantener y mejorar los proyectos en los que participo.
- Responder más rápido a issues, PRs y reportes de seguridad.
- Seguir contribuyendo activamente al ecosistema open-source.

Si quieres conocer más sobre mi trabajo y los proyectos en los que he estado involucrado a lo largo del tiempo, puedes verlo aquí: 👉 <http://bjohansebas.me/es/communities>

Si deseas apoyar directamente este objetivo, puedes hacerlo a través de GitHub Sponsors: 👉 <https://github.com/sponsors/bjohansebas>

Este trabajo lo hago porque creo profundamente en el valor del open-source y en la importancia de mantener saludable el ecosistema que usamos todos los días. Poder contar con un mejor equipo me permitiría seguir haciéndolo con más foco, estabilidad y continuidad.

Gracias por leer y por apoyar de la forma que sea este camino 🙏
