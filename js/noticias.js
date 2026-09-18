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
        destacada: true,

        // Ruta de la imagen
        imagen: "img/noticias/noticia_web.jpg",
        
        categoria: {
            es: "AFA",
            val: "AFA"
        },

        es: {
            titulo: "¡Tenemos Web del AFA!",
            texto: "El AFA CEIP Boqueres estrena su nueva página web. Un nuevo espacio creado para mantener informadas a las familias sobre la vida en el colegio, compartir nuestras actividades y proyectos, y facilitar el contacto con el AFA."
        },

        val: {
            titulo: "Tenim Web de l'AFA!",
            texto: "L'AFA CEIP Boqueres estrena la seua nova pàgina web. Un nou espai creat per a mantindre informades les famílies sobre la vida en el col·legi, compartir les nostres activitats i projectes, i facilitar el contacte amb l'AFA."
        }
    }

        // Opcional:
        // Si quieres que al pulsar la noticia vaya a una sección
        // de la web, puedes poner por ejemplo:
        //
        // enlace: "#extraescolares"
    }
    

];
