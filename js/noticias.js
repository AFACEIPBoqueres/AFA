// ======================================================
// NOTICIAS / ACTUALIDAD
// ======================================================
// Para añadir una noticia:
// 1. Sube primero la imagen a: img/noticias/
// 2. Copia la plantilla de abajo.
// 3. Cambia los textos y la fecha.
// 4. Guarda los cambios.
//
// La noticia más reciente aparecerá primero automáticamente.
// ======================================================

window.noticias = [

    
    {
        fecha: "2026-09-21",

        // true = aparece como noticia destacada
        // false = noticia normal
        destacada: true,

        // Ruta de la imagen
        imagen: "img/noticias/noticia_web.jpg",

        // Categoría
        categoria: {
            es: "Información",
            val: "Informació"
        },

        // Texto en castellano
        es: {
            titulo: "¡Tenemos Web del AFA!",
            texto: "Por primera vez hemos creado una web propia del AFA. En esta web mantendremos actualizada toda la información relacionada con AFA y la vida en el colegio."
        },

        // Texto en valenciano
        val: {
            titulo: "Tenim Web de l'AFA!",
            texto: "Per primera vegada hem creat una web pròpia del *AFA. En esta web mantindrem actualitzada tota la informació relacionada amb *AFA i la vida en el col·legi."
        }

        // Opcional:
        // Si quieres que al pulsar la noticia vaya a una sección
        // de la web, puedes poner por ejemplo:
        //
        // enlace: "#extraescolares"
    }
    

];
