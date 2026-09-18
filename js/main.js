/* =========================================================
   AFA CEIP BOQUERES - VERSIÓN 2.0
   JavaScript principal
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const siteConfig = {

    email: "afaceipboqueres@gmail.com",

    phone: "+34633714580",

    pdfs: {
        es: "pdf/actividades_extraescolares_afa_2026-2027_ES.pdf",
        val: "pdf/actividades_extraescolares_afa_2026-2027_VAL.pdf"
    }

};


/* =========================================================
   TRADUCCIONES
========================================================= */

const translations = {

    es: {

        /* Navegación */
        navInicio: "Inicio",
        navActualidad: "Actualidad",
        navAfa: "¿Qué es el AFA?",
        navEventos: "Eventos",
        navExtraescolares: "Extraescolares",
        navGaleria: "Galería",
        navCamisetas: "Camisetas",
        navDescuentos: "Descuentos",
        navSocio: "Hazte socio",
        navContacto: "Contacto",

        /* Hero */
        heroBadge: "AFA CEIP Boqueres",
        heroTitle: "Juntos hacemos comunidad",
        heroDescription:
            "Trabajamos para mejorar la experiencia escolar de nuestros hijos e hijas y crear una comunidad educativa más participativa.",
        heroNewsButton: "Ver actualidad",
        heroActivitiesButton: "Extraescolares",
        heroMemberButton: "Hazte socio",

        /* Actualidad */
        newsKicker: "Actualidad",
        newsTitle: "Noticias y novedades",
        newsIntro:
            "Aquí encontrarás las últimas noticias, avisos y novedades del AFA.",
        newsMore: "Ver todas las noticias",
        newsEmptyTitle: "Todavía no hay novedades publicadas",
        newsEmptyText:
            "Pronto encontrarás aquí las últimas noticias y avisos del AFA.",
        newsFeatured: "Destacada",
        newsReadMore: "Leer más",
        newsBack: "Volver a Actualidad",

        /* AFA */
        afaKicker: "Nuestra asociación",
        afaTitle: "¿Qué es el AFA?",
        afaText1:
            "El AFA CEIP Boqueres está formado por madres, padres y representantes legales del alumnado que colaboramos para mejorar la vida escolar y fortalecer la relación entre las familias, el centro educativo y la comunidad.",
        afaText2:
            "Formamos parte de FAMPA Castelló Penyagolosa y trabajamos para representar los intereses de las familias, organizar actividades, colaborar con el colegio y crear espacios de participación.",
        afaCardTitle:
            "Una asociación para todas las familias",
        afaCardText:
            "Tu participación ayuda a construir una comunidad educativa más cercana, participativa y activa.",
        afaCardButton: "Quiero participar →",

        /* Eventos */
        eventsKicker: "Actividades",
        eventsTitle: "Eventos",
        eventsIntro:
            "Consulta las próximas actividades y celebraciones organizadas por el AFA.",
        eventsEmptyTitle: "No hay eventos publicados todavía",
        eventsEmptyText:
            "Cuando tengamos una nueva actividad, aparecerá aquí.",
        eventsMore: "Más información",
        eventNoDate: "Próximamente",

        /* Extraescolares */
        extraKicker: "Curso 2026-2027",
        extraTitle: "Extraescolares",
        extraIntro:
            "Consulta todas las actividades extraescolares disponibles para este curso.",
        extraPdfTitle:
            "Información de extraescolares",
        extraPdfDescription:
            "Puedes consultar el documento completo o descargarlo para tenerlo siempre a mano.",
        extraPdfDownload:
            "Descargar PDF",

        activityTeatro: "Teatro",
        activityTeatroText:
            "Actividad para desarrollar la expresión, creatividad y confianza.",

        activityBaile: "Baile Moderno",
        activityBaileText:
            "Música, movimiento y diversión.",

        activityGimnasia: "Gimnasia Rítmica",
        activityGimnasiaText:
            "Coordinación, movimiento y actividad física.",

        activityMultideporte: "Multideporte",
        activityMultideporteText:
            "Diferentes deportes para aprender jugando.",

        activityPelota: "Pelota Valenciana",
        activityPelotaText:
            "Descubre y practica un deporte tradicional de nuestra tierra.",

        activityIngles: "Inglés Vivencial",
        activityInglesText:
            "Aprendizaje del inglés mediante actividades prácticas y dinámicas.",

        /* Galería */
        galleryKicker: "Nuestro día a día",
        galleryTitle: "Galería",
        galleryIntro:
            "Algunos momentos de las actividades y celebraciones compartidas por nuestra comunidad educativa.",

        /* Camisetas */
        shirtsKicker: "Identidad del cole",
        shirtsTitle: "Camisetas",
        shirtsHeading:
            "Camisetas oficiales del colegio",
        shirtsText:
            "Cada inicio de curso se realiza un pedido conjunto de camisetas oficiales del colegio.",
        shirtsMore:
            "Cuando se abra el periodo de pedido, publicaremos toda la información en esta web y en nuestros canales habituales.",

        /* Descuentos */
        discountKicker: "Ventajas",
        discountTitle: "Descuentos para socios",
        discountIntro:
            "Las familias socias pueden disfrutar de descuentos y ventajas ofrecidas por diferentes establecimientos colaboradores.",
        discountButton:
            "Hazte socio y disfruta de las ventajas",

        /* Socios */
        memberKicker: "Participa",
        memberTitle: "Hazte socio del AFA",
        memberPrice: "por familia y curso",
        memberText:
            "Formar parte del AFA permite colaborar en las actividades del colegio, participar en propuestas para las familias y disfrutar de las ventajas disponibles para socios.",
        memberOption1Title:
            "Ábaco Familias",
        memberOption1Text:
            "Puedes realizar el alta a través de la plataforma Ábaco Familias.",
        memberOption2Title:
            "En el colegio",
        memberOption2Text:
            "También puedes acercarte a nuestra oficina los viernes de 09:00 a 10:00.",
        memberButton:
            "Quiero hacerme socio",

        /* Contacto */
        contactKicker: "Estamos aquí",
        contactTitle: "Contacto",
        contactIntro:
            "Si tienes alguna duda, propuesta o necesitas información, puedes contactar con nosotros.",

        contactPhoneTitle: "Teléfono",
        contactEmailTitle: "Correo electrónico",
        contactHoursTitle: "Horario de atención",
        contactHours: "Viernes de 09:00 a 10:00",

        formName: "Nombre",
        formNamePlaceholder: "Tu nombre",
        formEmail: "Email",
        formEmailPlaceholder: "tu@email.com",
        formMessage: "Mensaje",
        formMessagePlaceholder:
            "Escribe tu mensaje...",
        formSubmit: "Enviar mensaje",

        formSuccess:
            "Se abrirá tu aplicación de correo para enviar el mensaje.",
        formError:
            "Por favor, completa todos los campos.",

        /* Footer */
        footerText:
            "Asociación de Familias del Alumnado",
        footerHome: "Inicio",
        footerMember: "Hazte socio",
        footerContact: "Contacto",

        /* Menú */
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",

        /* Galería */
        galleryClose: "Cerrar imagen"

    },


    /* =====================================================
       VALENCIÀ
    ====================================================== */

    val: {

        /* Navegación */
        navInicio: "Inici",
        navActualidad: "Actualitat",
        navAfa: "Què és l'AFA?",
        navEventos: "Esdeveniments",
        navExtraescolares: "Extraescolars",
        navGaleria: "Galeria",
        navCamisetas: "Samarretes",
        navDescuentos: "Descomptes",
        navSocio: "Fes-te soci",
        navContacto: "Contacte",

        /* Hero */
        heroBadge: "AFA CEIP Boqueres",
        heroTitle: "Junts fem comunitat",
        heroDescription:
            "Treballem per millorar l'experiència escolar dels nostres fills i filles i crear una comunitat educativa més participativa.",
        heroNewsButton: "Veure actualitat",
        heroActivitiesButton: "Extraescolars",
        heroMemberButton: "Fes-te soci",

        /* Actualidad */
        newsKicker: "Actualitat",
        newsTitle: "Notícies i novetats",
        newsIntro:
            "Ací trobaràs les últimes notícies, avisos i novetats de l'AFA.",
        newsMore: "Veure totes les notícies",
        newsEmptyTitle: "Encara no hi ha novetats publicades",
        newsEmptyText:
            "Prompte trobaràs ací les últimes notícies i avisos de l'AFA.",
        newsFeatured: "Destacada",
        newsReadMore: "Llegir més",
        newsBack: "Tornar a Actualitat",

        /* AFA */
        afaKicker: "La nostra associació",
        afaTitle: "Què és l'AFA?",
        afaText1:
            "L'AFA CEIP Boqueres està formada per mares, pares i representants legals de l'alumnat que col·laborem per millorar la vida escolar i reforçar la relació entre les famílies, el centre educatiu i la comunitat.",
        afaText2:
            "Formem part de FAMPA Castelló Penyagolosa i treballem per representar els interessos de les famílies, organitzar activitats, col·laborar amb el col·legi i crear espais de participació.",
        afaCardTitle:
            "Una associació per a totes les famílies",
        afaCardText:
            "La teua participació ajuda a construir una comunitat educativa més pròxima, participativa i activa.",
        afaCardButton: "Vull participar →",

        /* Eventos */
        eventsKicker: "Activitats",
        eventsTitle: "Esdeveniments",
        eventsIntro:
            "Consulta les pròximes activitats i celebracions organitzades per l'AFA.",
        eventsEmptyTitle:
            "Encara no hi ha esdeveniments publicats",
        eventsEmptyText:
            "Quan tinguem una nova activitat, apareixerà ací.",
        eventsMore: "Més informació",
        eventNoDate: "Pròximament",

        /* Extraescolares */
        extraKicker: "Curs 2026-2027",
        extraTitle: "Extraescolars",
        extraIntro:
            "Consulta totes les activitats extraescolars disponibles per a aquest curs.",
        extraPdfTitle:
            "Informació d'extraescolars",
        extraPdfDescription:
            "Pots consultar el document complet o descarregar-lo per a tindre'l sempre a mà.",
        extraPdfDownload:
            "Descarregar PDF",

        activityTeatro: "Teatre",
        activityTeatroText:
            "Activitat per desenvolupar l'expressió, la creativitat i la confiança.",

        activityBaile: "Ball Modern",
        activityBaileText:
            "Música, moviment i diversió.",

        activityGimnasia: "Gimnàstica Rítmica",
        activityGimnasiaText:
            "Coordinació, moviment i activitat física.",

        activityMultideporte: "Multiesport",
        activityMultideporteText:
            "Diferents esports per aprendre jugant.",

        activityPelota: "Pilota Valenciana",
        activityPelotaText:
            "Descobreix i practica un esport tradicional de la nostra terra.",

        activityIngles: "Anglés Vivencial",
        activityInglesText:
            "Aprenentatge de l'anglés mitjançant activitats pràctiques i dinàmiques.",

        /* Galería */
        galleryKicker: "El nostre dia a dia",
        galleryTitle: "Galeria",
        galleryIntro:
            "Alguns moments de les activitats i celebracions compartides per la nostra comunitat educativa.",

        /* Camisetas */
        shirtsKicker: "Identitat del centre",
        shirtsTitle: "Samarretes",
        shirtsHeading:
            "Samarretes oficials del col·legi",
        shirtsText:
            "Cada inici de curs es realitza una comanda conjunta de samarretes oficials del col·legi.",
        shirtsMore:
            "Quan s'òbriga el període de comanda, publicarem tota la informació en aquesta web i en els nostres canals habituals.",

        /* Descuentos */
        discountKicker: "Avantatges",
        discountTitle: "Descomptes per a socis",
        discountIntro:
            "Les famílies sòcies poden gaudir de descomptes i avantatges oferits per diferents establiments col·laboradors.",
        discountButton:
            "Fes-te soci i gaudeix dels avantatges",

        /* Socios */
        memberKicker: "Participa",
        memberTitle: "Fes-te soci de l'AFA",
        memberPrice: "per família i curs",
        memberText:
            "Formar part de l'AFA permet col·laborar en les activitats del col·legi, participar en propostes per a les famílies i gaudir dels avantatges disponibles per als socis.",
        memberOption1Title:
            "Ábaco Familias",
        memberOption1Text:
            "Pots realitzar l'alta a través de la plataforma Ábaco Familias.",
        memberOption2Title:
            "Al col·legi",
        memberOption2Text:
            "També pots acostar-te a la nostra oficina els divendres de 09:00 a 10:00.",
        memberButton:
            "Vull fer-me soci",

        /* Contacto */
        contactKicker: "Estem ací",
        contactTitle: "Contacte",
        contactIntro:
            "Si tens algun dubte, proposta o necessites informació, pots contactar amb nosaltres.",

        contactPhoneTitle: "Telèfon",
        contactEmailTitle: "Correu electrònic",
        contactHoursTitle: "Horari d'atenció",
        contactHours: "Divendres de 09:00 a 10:00",

        formName: "Nom",
        formNamePlaceholder: "El teu nom",
        formEmail: "Email",
        formEmailPlaceholder: "el-teu@email.com",
        formMessage: "Missatge",
        formMessagePlaceholder:
            "Escriu el teu missatge...",
        formSubmit: "Enviar missatge",

        formSuccess:
            "S'obrirà la teua aplicació de correu per enviar el missatge.",
        formError:
            "Per favor, completa tots els camps.",

        /* Footer */
        footerText:
            "Associació de Famílies de l'Alumnat",
        footerHome: "Inici",
        footerMember: "Fes-te soci",
        footerContact: "Contacte",

        /* Menú */
        menuOpen: "Obrir menú",
        menuClose: "Tancar menú",

        /* Galería */
        galleryClose: "Tancar imatge"

    }

};


/* =========================================================
   IDIOMA ACTUAL
========================================================= */

let idiomaActual = "es";


/* =========================================================
   CAMBIAR IDIOMA
========================================================= */

function cambiarIdioma(idioma) {

    if (!translations[idioma]) {
        idioma = "es";
    }

    idiomaActual = idioma;

    const textos = translations[idioma];


    /* Idioma del documento */

    document.documentElement.lang =
        idioma === "val" ? "ca" : "es";


    /* Textos */

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.dataset.i18n;

        if (textos[clave] !== undefined) {
            elemento.textContent = textos[clave];
        }

    });


    /* Placeholders */

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {

        const clave = elemento.dataset.i18nPlaceholder;

        if (textos[clave] !== undefined) {
            elemento.placeholder = textos[clave];
        }

    });


    /* Alt de imágenes */

    document.querySelectorAll("[data-i18n-alt]").forEach(elemento => {

        const clave = elemento.dataset.i18nAlt;

        if (textos[clave] !== undefined) {
            elemento.alt = textos[clave];
        }

    });


    /* Botones de idioma */

    document.querySelectorAll(".language-btn").forEach(boton => {

        const activo = boton.dataset.lang === idioma;

        boton.classList.toggle("active", activo);

        boton.setAttribute(
            "aria-pressed",
            activo ? "true" : "false"
        );

    });


    /* PDF */

    actualizarPDF();


    /* Contenido dinámico */

    renderNoticias();
    renderEventos();
    renderGaleria();


    /* Estado del menú */

    actualizarTextoMenu();


    /* Guardar preferencia */

    localStorage.setItem("afaIdioma", idioma);

}


/* =========================================================
   PDF DE EXTRAESCOLARES
========================================================= */

function actualizarPDF() {

    const pdf =
        siteConfig.pdfs[idiomaActual] ||
        siteConfig.pdfs.es;


    const viewer =
        document.getElementById("pdf-viewer");

    const download =
        document.getElementById("pdf-download");


    if (viewer) {
        viewer.src = pdf;
    }


    if (download) {
        download.href = pdf;
    }

}


/* =========================================================
   MENÚ MÓVIL
========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const mainMenu =
    document.getElementById("main-menu");


function abrirCerrarMenu() {

    if (!menuToggle || !mainMenu) {
        return;
    }


    const abierto =
        mainMenu.classList.toggle("open");


    menuToggle.classList.toggle(
        "active",
        abierto
    );


    menuToggle.setAttribute(
        "aria-expanded",
        abierto ? "true" : "false"
    );


    actualizarTextoMenu();

}


function cerrarMenu() {

    if (!menuToggle || !mainMenu) {
        return;
    }


    mainMenu.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    actualizarTextoMenu();

}


function actualizarTextoMenu() {

    if (!menuToggle) {
        return;
    }


    const abierto =
        menuToggle.getAttribute("aria-expanded") === "true";


    const textos =
        translations[idiomaActual];


    menuToggle.setAttribute(
        "aria-label",
        abierto
            ? textos.menuClose
            : textos.menuOpen
    );

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        abrirCerrarMenu
    );

}


/* Cerrar menú al seleccionar una sección */

document.querySelectorAll(".main-nav a").forEach(enlace => {

    enlace.addEventListener(
        "click",
        cerrarMenu
    );

});


/* Cerrar menú con Escape */

document.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "Escape") {
            cerrarMenu();
        }

    }
);


/* =========================================================
   BOTONES DE IDIOMA
========================================================= */

document.querySelectorAll(".language-btn").forEach(boton => {

    boton.addEventListener(
        "click",
        () => {

            const idioma =
                boton.dataset.lang;

            cambiarIdioma(idioma);

        }
    );

});


/* =========================================================
   SCROLL SUAVE
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener(
        "click",
        evento => {

            const destino =
                enlace.getAttribute("href");


            if (!destino || destino === "#") {
                return;
            }


            const elemento =
                document.querySelector(destino);


            if (!elemento) {
                return;
            }


            evento.preventDefault();


            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const currentYear =
    document.getElementById("current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NOTICIAS
========================================================= */

function renderNoticias() {

    const container =
        document.getElementById("news-list");


    if (!container) {
        return;
    }


    const textos =
        translations[idiomaActual];


    container.innerHTML = "";


    const lista =
        Array.isArray(window.noticias)
            ? [...window.noticias]
            : [];


    /* Ordenar por fecha, más reciente primero */

    lista.sort(
        (a, b) =>
            new Date(b.fecha) -
            new Date(a.fecha)
    );


    /* Solo mostramos las 3 últimas en la portada */

    const noticiasPortada =
        lista.slice(0, 3);


    if (noticiasPortada.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    📢
                </div>

                <h3>
                    ${textos.newsEmptyTitle}
                </h3>

                <p>
                    ${textos.newsEmptyText}
                </p>

            </div>
        `;

        return;

    }


    noticiasPortada.forEach(noticia => {

        const tarjeta =
            crearTarjetaNoticia(
                noticia,
                textos
            );


        container.appendChild(tarjeta);

    });

}


/* =========================================================
   CREAR TARJETA DE NOTICIA
========================================================= */

function crearTarjetaNoticia(
    noticia,
    textos
) {

    const article =
        document.createElement("article");


    article.className =
        "card news-card";


    if (noticia.destacada) {
        article.classList.add("featured");
    }


    const idiomaData =
        noticia[idiomaActual] ||
        noticia.es ||
        {};


    const categoria =
        noticia.categoria?.[idiomaActual] ||
        noticia.categoria?.es ||
        "";


    const fecha =
        formatearFecha(
            noticia.fecha,
            idiomaActual
        );


    const imagen =
        noticia.imagen || "";


    const enlace =
        noticia.enlace || "";


    const imagenHTML =
        imagen
            ? `
                <img
                    class="news-card-image"
                    src="${imagen}"
                    alt="${escaparHTML(idiomaData.titulo || "")}"
                    loading="lazy"
                >
            `
            : "";


    const destacadaHTML =
        noticia.destacada
            ? `
                <span class="news-featured-badge">
                    ${textos.newsFeatured}
                </span>
            `
            : "";


    const enlaceHTML =
        enlace
            ? `
                <a
                    class="text-link"
                    href="${enlace}"
                >
                    ${textos.newsReadMore} →
                </a>
            `
            : "";


    article.innerHTML = `

        ${imagenHTML}

        <div class="news-card-content">

            ${destacadaHTML}

            <div class="news-card-meta">

                <span>
                    ${fecha}
                </span>

                ${
                    categoria
                        ? `
                            <span class="news-category">
                                ${escaparHTML(categoria)}
                            </span>
                        `
                        : ""
                }

            </div>


            <h3>
                ${escaparHTML(idiomaData.titulo || "")}
            </h3>


            <p>
                ${escaparHTML(idiomaData.texto || "")}
            </p>


            ${enlaceHTML}

        </div>

    `;


    return article;

}


/* =========================================================
   EVENTOS
========================================================= */

function renderEventos() {

    const container =
        document.getElementById("events-list");


    if (!container) {
        return;
    }


    const textos =
        translations[idiomaActual];


    container.innerHTML = "";


    const lista =
        Array.isArray(window.eventos)
            ? [...window.eventos]
            : [];


    /* Ordenar por fecha */

    lista.sort(
        (a, b) =>
            new Date(a.fecha) -
            new Date(b.fecha)
    );


    if (lista.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    📅
                </div>

                <h3>
                    ${textos.eventsEmptyTitle}
                </h3>

                <p>
                    ${textos.eventsEmptyText}
                </p>

            </div>
        `;

        return;

    }


    lista.forEach(evento => {

        const tarjeta =
            crearTarjetaEvento(
                evento,
                textos
            );


        container.appendChild(tarjeta);

    });

}


/* =========================================================
   CREAR TARJETA DE EVENTO
========================================================= */

function crearTarjetaEvento(
    evento,
    textos
) {

    const article =
        document.createElement("article");


    article.className =
        "card event-card";


    const idiomaData =
        evento[idiomaActual] ||
        evento.es ||
        {};


    const fecha =
        evento.fecha
            ? formatearFecha(
                evento.fecha,
                idiomaActual
            )
            : textos.eventNoDate;


    const imagen =
        evento.imagen || "";


    const enlace =
        evento.enlace || "";


    const imagenHTML =
        imagen
            ? `
                <img
                    class="event-card-image"
                    src="${imagen}"
                    alt="${escaparHTML(idiomaData.titulo || "")}"
                    loading="lazy"
                >
            `
            : "";


    const enlaceHTML =
        enlace
            ? `
                <a
                    class="text-link"
                    href="${enlace}"
                >
                    ${textos.eventsMore} →
                </a>
            `
            : "";


    article.innerHTML = `

        ${imagenHTML}

        <div class="event-card-content">

            <span class="event-date">
                📅 ${fecha}
            </span>


            <h3>
                ${escaparHTML(idiomaData.titulo || "")}
            </h3>


            <p>
                ${escaparHTML(idiomaData.texto || "")}
            </p>


            ${enlaceHTML}

        </div>

    `;


    return article;

}


/* =========================================================
   GALERÍA
========================================================= */

function renderGaleria() {

    const container =
        document.getElementById("gallery-grid");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const lista =
        Array.isArray(window.galeria)
            ? window.galeria
            : [];


    lista.forEach((imagen, indice) => {

        const item =
            document.createElement("button");


        item.type = "button";

        item.className =
            "gallery-item";


        const alt =
            imagen.alt?.[idiomaActual] ||
            imagen.alt?.es ||
            "";


        item.setAttribute(
            "aria-label",
            alt
        );


        item.innerHTML = `
            <img
                src="${imagen.imagen}"
                alt="${escaparHTML(alt)}"
                loading="lazy"
            >
        `;


        item.addEventListener(
            "click",
            () => {

                abrirGaleria(
                    imagen,
                    indice
                );

            }
        );


        container.appendChild(item);

    });

}


/* =========================================================
   LIGHTBOX
========================================================= */

const galleryModal =
    document.getElementById("gallery-modal");

const galleryModalImage =
    document.getElementById("gallery-modal-image");

const galleryModalTitle =
    document.getElementById("gallery-modal-title");

const galleryModalClose =
    document.getElementById("gallery-modal-close");


function abrirGaleria(
    imagen
) {

    if (
        !galleryModal ||
        !galleryModalImage
    ) {
        return;
    }


    const alt =
        imagen.alt?.[idiomaActual] ||
        imagen.alt?.es ||
        "";


    galleryModalImage.src =
        imagen.imagen;


    galleryModalImage.alt =
        alt;


    if (galleryModalTitle) {

        galleryModalTitle.textContent =
            alt;

    }


    galleryModal.classList.add("active");

    galleryModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    if (galleryModalClose) {
        galleryModalClose.focus();
    }

}


function cerrarGaleria() {

    if (!galleryModal) {
        return;
    }


    galleryModal.classList.remove(
        "active"
    );


    galleryModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


if (galleryModalClose) {

    galleryModalClose.addEventListener(
        "click",
        cerrarGaleria
    );

}


if (galleryModal) {

    galleryModal.addEventListener(
        "click",
        evento => {

            if (
                evento.target ===
                galleryModal
            ) {
                cerrarGaleria();
            }

        }
    );

}


/* Cerrar galería con Escape */

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape" &&
            galleryModal?.classList.contains("active")
        ) {

            cerrarGaleria();

        }

    }
);


/* =========================================================
   FORMULARIO DE CONTACTO
========================================================= */

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        evento => {

            evento.preventDefault();


            const name =
                document
                    .getElementById("contact-name")
                    ?.value
                    .trim();


            const email =
                document
                    .getElementById("contact-email")
                    ?.value
                    .trim();


            const message =
                document
                    .getElementById("contact-message")
                    ?.value
                    .trim();


            const status =
                document.getElementById(
                    "form-status"
                );


            const textos =
                translations[idiomaActual];


            if (
                !name ||
                !email ||
                !message
            ) {

                if (status) {

                    status.textContent =
                        textos.formError;

                }

                return;

            }


            const subject =
                encodeURIComponent(
                    `Contacto web AFA - ${name}`
                );


            const body =
                encodeURIComponent(
                    `Nombre: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `Mensaje:\n${message}`
                );


            const mailto =
                `mailto:${siteConfig.email}` +
                `?subject=${subject}` +
                `&body=${body}`;


            if (status) {

                status.textContent =
                    textos.formSuccess;

            }


            window.location.href =
                mailto;

        }
    );

}


/* =========================================================
   FECHA
========================================================= */

function formatearFecha(
    fecha,
    idioma
) {

    if (!fecha) {
        return "";
    }


    const date =
        new Date(`${fecha}T12:00:00`);


    if (Number.isNaN(date.getTime())) {
        return fecha;
    }


    return new Intl.DateTimeFormat(
        idioma === "val"
            ? "ca-ES"
            : "es-ES",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    ).format(date);

}


/* =========================================================
   ESCAPAR HTML
   Evita insertar directamente contenido que pueda
   interpretarse como HTML.
========================================================= */

function escaparHTML(texto) {

    return String(texto)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   DETECCIÓN DEL IDIOMA INICIAL
========================================================= */

function obtenerIdiomaInicial() {

    const guardado =
        localStorage.getItem("afaIdioma");


    if (
        guardado === "es" ||
        guardado === "val"
    ) {

        return guardado;

    }


    /*
       Si no hay idioma guardado, utilizamos
       el idioma del navegador como referencia.
    */

    const navegador =
        navigator.language
            ?.toLowerCase() || "";


    if (
        navegador.startsWith("ca") ||
        navegador.startsWith("val")
    ) {

        return "val";

    }


    return "es";

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cambiarIdioma(
            obtenerIdiomaInicial()
        );

    }
);
