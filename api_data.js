define({ "api": [
  {
    "type": "AgregarQuestion()",
    "url": "/AltaEncuesta/",
    "title": "Agrega preguntas a la encuesta",
    "version": "0.1.0",
    "group": "AltaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question",
            "description": "<p>nombre de la pregunta.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "formato",
            "description": "<p>formato de la pregunta.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cantidad",
            "description": "<p>cantidad de respuestas.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "option",
            "description": "<p>array de respuestas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Agrega pregunta al array de preguntas de la encuesta</p>"
          }
        ]
      }
    },
    "filename": "pages/alta-encuesta/alta-encuesta.ts",
    "groupTitle": "AltaEncuesta",
    "name": "Agregarquestion__Altaencuesta"
  },
  {
    "type": "constructor()",
    "url": "/AltaEncuesta/",
    "title": "Carga los datos del usuario del localStorage y, las encuestas del firebase y las materias del profesor seleccionado",
    "version": "0.1.0",
    "group": "AltaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/alta-encuesta/alta-encuesta.ts",
    "groupTitle": "AltaEncuesta",
    "name": "Constructor__Altaencuesta"
  },
  {
    "type": "SubirQuestion()",
    "url": "/AltaEncuesta/",
    "title": "Sube la encuesta creada",
    "version": "0.1.0",
    "group": "AltaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la encuesta.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horas",
            "description": "<p>horas de duración de la encuesta.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "materia",
            "description": "<p>materia de encuesta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "encuesta",
            "description": "<p>listado de preguntas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Agrega la encuesta al firebase</p>"
          }
        ]
      }
    },
    "filename": "pages/alta-encuesta/alta-encuesta.ts",
    "groupTitle": "AltaEncuesta",
    "name": "Subirquestion__Altaencuesta"
  },
  {
    "type": "constructor()",
    "url": "/Aula/",
    "title": "Carga los datos del usuario del localStorage y de las aulas del firebase",
    "version": "0.1.0",
    "group": "Aula",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/aulas/aulas.ts",
    "groupTitle": "Aula",
    "name": "Constructor__Aula"
  },
  {
    "type": "IrAula()",
    "url": "/Aula/",
    "title": "Redirecciona a la pagina de información de aulas",
    "version": "0.1.0",
    "group": "Aula",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "codigo",
            "description": "<p>codigo del aula.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Se dirige a la página de información de aulas</p>"
          }
        ]
      }
    },
    "filename": "pages/aulas/aulas.ts",
    "groupTitle": "Aula",
    "name": "Iraula__Aula"
  },
  {
    "type": "cancelar()",
    "url": "/Encuesta/",
    "title": "Cancela la encuesta",
    "version": "0.1.0",
    "group": "Encuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Redirige a la página de lista de encuestas sin eviar la respuesta</p>"
          }
        ]
      }
    },
    "filename": "pages/encuesta/encuesta.ts",
    "groupTitle": "Encuesta",
    "name": "Cancelar__Encuesta"
  },
  {
    "type": "constructor()",
    "url": "/Encuesta/",
    "title": "Carga los datos del usuario del localStorage y las encuestas del firebase",
    "version": "0.1.0",
    "group": "Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "AlertController",
            "optional": false,
            "field": "alertCtrl",
            "description": "<p>atributo para el alertController.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/encuesta/encuesta.ts",
    "groupTitle": "Encuesta",
    "name": "Constructor__Encuesta"
  },
  {
    "type": "enviar()",
    "url": "/Encuesta/",
    "title": "Envia las respuestas",
    "version": "0.1.0",
    "group": "Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "respuestas",
            "description": "<p>lista de respuestas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Las respuestas de la encuesta son enviadas al firebase</p>"
          }
        ]
      }
    },
    "filename": "pages/encuesta/encuesta.ts",
    "groupTitle": "Encuesta",
    "name": "Enviar__Encuesta"
  },
  {
    "type": "constructor()",
    "url": "/EstadisticaEncuesta/",
    "title": "Carga los datos del usuario del localStorage y las encuestas del firebase",
    "version": "0.1.0",
    "group": "EstadisticaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Carga las estadísticas de la encuesta seleccionada</p>"
          }
        ]
      }
    },
    "filename": "pages/estadistica-encuesta/estadistica-encuesta.ts",
    "groupTitle": "EstadisticaEncuesta",
    "name": "Constructor__Estadisticaencuesta"
  },
  {
    "type": "mostrar()",
    "url": "/EstadisticaEncuesta/",
    "title": "Muestra el gráfico",
    "version": "0.1.0",
    "group": "EstadisticaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pieChartType",
            "description": "<p>Formato del grafico</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "pieChartLabels",
            "description": "<p>Lista de respuestas de la encuesta</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "pieChartData",
            "description": "<p>Lista de respuestas del grafico</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Muestra el gráfico con las distintas respuestas y cuantas fueron seleccionadas</p>"
          }
        ]
      }
    },
    "filename": "pages/estadistica-encuesta/estadistica-encuesta.ts",
    "groupTitle": "EstadisticaEncuesta",
    "name": "Mostrar__Estadisticaencuesta"
  },
  {
    "type": "ObtenerCantidades()",
    "url": "/EstadisticaEncuesta/",
    "title": "Carga los resultados a los gráficos torta",
    "version": "0.1.0",
    "group": "EstadisticaEncuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Devuelve una lista de respuestas con la cantidad de usuarios que la eligieron</p>"
          }
        ]
      }
    },
    "filename": "pages/estadistica-encuesta/estadistica-encuesta.ts",
    "groupTitle": "EstadisticaEncuesta",
    "name": "Obtenercantidades__Estadisticaencuesta"
  },
  {
    "type": "cancelar()",
    "url": "/GestorAnuncio/",
    "title": "Desabilita el formulario de anuncios",
    "version": "0.1.0",
    "group": "GestorAnuncio",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Ocultara el formulario para crear anuncios y mostrara la tabla de anuncio creados</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-anuncios/gestor-anuncios.ts",
    "groupTitle": "GestorAnuncio",
    "name": "Cancelar__Gestoranuncio"
  },
  {
    "type": "constructor()",
    "url": "/GestorAnuncio/",
    "title": "Carga los datos del usuario del localStorage y de los anuncios del firebase",
    "version": "0.1.0",
    "group": "GestorAnuncio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-anuncios/gestor-anuncios.ts",
    "groupTitle": "GestorAnuncio",
    "name": "Constructor__Gestoranuncio"
  },
  {
    "type": "crearAnuncio()",
    "url": "/GestorAnuncio/",
    "title": "Habilita el formulario de anuncios",
    "version": "0.1.0",
    "group": "GestorAnuncio",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Ocultara la tabla de anuncio creados y mostrara el formulario para crear anuncios</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-anuncios/gestor-anuncios.ts",
    "groupTitle": "GestorAnuncio",
    "name": "Crearanuncio__Gestoranuncio"
  },
  {
    "type": "eliminarAnuncio()",
    "url": "/GestorAnuncio/",
    "title": "Elimina anuncios",
    "version": "0.1.0",
    "group": "GestorAnuncio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "item",
            "description": "<p>anuncio seleccionado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Eliminara el anuncio del firebase y recargara la pagina mostrando la tabla sin el anuncio</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-anuncios/gestor-anuncios.ts",
    "groupTitle": "GestorAnuncio",
    "name": "Eliminaranuncio__Gestoranuncio"
  },
  {
    "type": "modificarAnuncio()",
    "url": "/GestorAnuncio/",
    "title": "Habilita el formulario de anuncios y carga los datos",
    "version": "0.1.0",
    "group": "GestorAnuncio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "item",
            "description": "<p>anuncio seleccionado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Ocultara la tabla de anuncio creados y mostrara el formulario para crear anuncios con los datos del anuncio seleccionado</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-anuncios/gestor-anuncios.ts",
    "groupTitle": "GestorAnuncio",
    "name": "Modificaranuncio__Gestoranuncio"
  },
  {
    "type": "subirAnuncio()",
    "url": "/GestorAnuncio/",
    "title": "Subira un nuevo anuncio",
    "version": "0.1.0",
    "group": "GestorAnuncio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id del anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "titulo",
            "description": "<p>titulo anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contenido",
            "description": "<p>descripción del anuncio</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "opcionSeleccionada",
            "description": "<p>aula a la que pertenece el anuncio</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Sí el id del anuncio es 0 crea un nuevo anuncio, caso contrario modifica el anuncio existente</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-anuncios/gestor-anuncios.ts",
    "groupTitle": "GestorAnuncio",
    "name": "Subiranuncio__Gestoranuncio"
  },
  {
    "type": "constructor()",
    "url": "/GestorEncuesta/",
    "title": "Carga los datos del usuario del localStorage y las encuestas del firebase",
    "version": "0.1.0",
    "group": "GestorEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          },
          {
            "group": "Parameter",
            "type": "AlertController",
            "optional": false,
            "field": "alertCtrl",
            "description": "<p>atributo para el alert</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-encuestas/gestor-encuestas.ts",
    "groupTitle": "GestorEncuesta",
    "name": "Constructor__Gestorencuesta"
  },
  {
    "type": "crearEncuesta()",
    "url": "/GestorEncuesta/",
    "title": "Permite crear una encuesta",
    "version": "0.1.0",
    "group": "GestorEncuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Redirige a la página de alta de encuestas</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-encuestas/gestor-encuestas.ts",
    "groupTitle": "GestorEncuesta",
    "name": "Crearencuesta__Gestorencuesta"
  },
  {
    "type": "eliminarEncuesta()",
    "url": "/GestorEncuesta/",
    "title": "Elimina una encuesta",
    "version": "0.1.0",
    "group": "GestorEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Encuesta selecionada</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Sí confirmamos que si, elimina la encuesta del firebase</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-encuestas/gestor-encuestas.ts",
    "groupTitle": "GestorEncuesta",
    "name": "Eliminarencuesta__Gestorencuesta"
  },
  {
    "type": "modificarEncuesta()",
    "url": "/GestorEncuesta/",
    "title": "Permite modificar una encuesta",
    "version": "0.1.0",
    "group": "GestorEncuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Redirige a la página de modificar encuesta</p>"
          }
        ]
      }
    },
    "filename": "pages/gestor-encuestas/gestor-encuestas.ts",
    "groupTitle": "GestorEncuesta",
    "name": "Modificarencuesta__Gestorencuesta"
  },
  {
    "type": "constructor()",
    "url": "/Información/",
    "title": "Carga los datos del usuario del localStorage y, las asistencia según el aula seleccionada y los anuncios",
    "version": "0.1.0",
    "group": "Informaci_n",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          },
          {
            "group": "Parameter",
            "type": "PopoverController",
            "optional": false,
            "field": "popoverCtrl",
            "description": "<p>atributo para el popOver</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/informacion/informacion.ts",
    "groupTitle": "Informaci_n",
    "name": "Constructor__InformaciN"
  },
  {
    "type": "EstadisticaAlumnos()",
    "url": "/Información/",
    "title": "Muestra las estadisticas de asistencias",
    "version": "0.1.0",
    "group": "Informaci_n",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Muestra",
            "description": "<p>un gráfico de barra con los alumnas del aula y sus faltas.</p>"
          }
        ]
      }
    },
    "filename": "pages/informacion/informacion.ts",
    "groupTitle": "Informaci_n",
    "name": "Estadisticaalumnos__InformaciN"
  },
  {
    "type": "MostrarAnuncio()",
    "url": "/Información/",
    "title": "Muestra el anuncio",
    "version": "0.1.0",
    "group": "Informaci_n",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>anuncio seleccionado.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Muestra",
            "description": "<p>un popOver con los detalles del anuncio</p>"
          }
        ]
      }
    },
    "filename": "pages/informacion/informacion.ts",
    "groupTitle": "Informaci_n",
    "name": "Mostraranuncio__InformaciN"
  },
  {
    "type": "constructor()",
    "url": "/ListaEncuesta/",
    "title": "Carga los datos del usuario del localStorage y las encuestas,respuestas,materias del usuario y profesores del firebase",
    "version": "0.1.0",
    "group": "ListaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": "<p>atributo para el toast</p>"
          },
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          },
          {
            "group": "Parameter",
            "type": "AlertController",
            "optional": false,
            "field": "alertCtrl",
            "description": "<p>atributo para el alert</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-encuestas/lista-encuestas.ts",
    "groupTitle": "ListaEncuesta",
    "name": "Constructor__Listaencuesta"
  },
  {
    "type": "RealizarCuestionario()",
    "url": "/ListaEncuesta/",
    "title": "Permite realizar el cuestionario",
    "version": "0.1.0",
    "group": "ListaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dato",
            "description": "<p>codigo de la encuesta</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Redirige a la página de encuesta con el codigo de la encuesta seleccionada</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorUser",
            "description": "<p>Mostrara un alert si la encuesta ya fue hecha por el usuario</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-encuestas/lista-encuestas.ts",
    "groupTitle": "ListaEncuesta",
    "name": "Realizarcuestionario__Listaencuesta"
  },
  {
    "type": "traerEncuestas()",
    "url": "/ListaEncuesta/",
    "title": "Trae las encuestas disponibles",
    "version": "0.1.0",
    "group": "ListaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "materia",
            "description": "<p>Materia de la encuesta</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "profesor",
            "description": "<p>Creador de la encuesta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Trae las encuestas que coincidan con los datos seleccionados y no que no haya acabado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDatos",
            "description": "<p>Ninguna encuesta fue encontrada.</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-encuestas/lista-encuestas.ts",
    "groupTitle": "ListaEncuesta",
    "name": "Traerencuestas__Listaencuesta"
  },
  {
    "type": "inicioSesionRapido()",
    "url": "/Login/",
    "title": "Completa los campos necesarios para poder conectarse rápidamente",
    "version": "0.1.0",
    "group": "Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>los campos de usuario y contraseña completados</p>"
          }
        ]
      }
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Iniciosesionrapido__Login"
  },
  {
    "type": "ionViewDidLoad()",
    "url": "/Login/",
    "title": "Carga la lista de usuario de firebase",
    "version": "0.1.0",
    "group": "Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Sí el usuario ya había iniciado sesión, se carga automaticamente</p>"
          }
        ]
      }
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Ionviewdidload__Login"
  },
  {
    "type": "loginComun()",
    "url": "/Login/",
    "title": "Inicia sesión con los datos ingresados en los campos de textos",
    "version": "0.1.0",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>contraseña del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Inicia sesion con del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorUser",
            "description": "<p>el usuario no esta habilitado en el sistema.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDatos",
            "description": "<p>campos ingresados incorrectos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorIncompleto",
            "description": "<p>debe ingresar todos los campos.</p>"
          }
        ]
      }
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Logincomun__Login"
  },
  {
    "type": "loginGoogle()",
    "url": "/Login/",
    "title": "Inicia sesión con la cuenta google",
    "version": "0.1.0",
    "group": "Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Inicia sesion con del usuario</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorUser",
            "description": "<p>el usuario no esta habilitado en el sistema.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorSiste",
            "description": "<p>hubo un error al iniciar sesión.</p>"
          }
        ]
      }
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Logingoogle__Login"
  },
  {
    "type": "verificarSiTieneToken()",
    "url": "/Login/",
    "title": "Verifica el token del usuario",
    "version": "0.1.0",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "token",
            "description": "<p>token del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "true/false",
            "description": "<p>True si el token ingresado coincide con el de la base de datos, caso contrario false</p>"
          }
        ]
      }
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Verificarsitienetoken__Login"
  },
  {
    "type": "constructor()",
    "url": "/Menu/",
    "title": "Carga los datos del usuario del localStorage y de los codigos QR de firebase",
    "version": "0.1.0",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "BarcodeScanner",
            "optional": false,
            "field": "barcodeScanner",
            "description": "<p>atributo para el scanner de QR.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados exitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/menu/menu.ts",
    "groupTitle": "Menu",
    "name": "Constructor__Menu"
  },
  {
    "type": "EscanearCodigo()",
    "url": "/Menu/",
    "title": "Habilita el scanner QR",
    "version": "0.1.0",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>redirige a la pagina que establece el codigo QR</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorCode",
            "description": "<p>el codigo no esta disponible en la base de datos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorUsuario",
            "description": "<p>No tiene permitido acceder.</p>"
          }
        ]
      }
    },
    "filename": "pages/menu/menu.ts",
    "groupTitle": "Menu",
    "name": "Escanearcodigo__Menu"
  },
  {
    "type": "logOut()",
    "url": "/Menu/",
    "title": "Desconecta al usuario y limpia el localStorage",
    "version": "0.1.0",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Vuelve a la pagina de Login</p>"
          }
        ]
      }
    },
    "filename": "pages/menu/menu.ts",
    "groupTitle": "Menu",
    "name": "Logout__Menu"
  },
  {
    "type": "MostrarAvisos()",
    "url": "/Menu/",
    "title": "Muestra el aviso de faltas",
    "version": "0.1.0",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Muestra el aviso de a que materias llego a x faltas</p>"
          }
        ]
      }
    },
    "filename": "pages/menu/menu.ts",
    "groupTitle": "Menu",
    "name": "Mostraravisos__Menu"
  },
  {
    "type": "presentActionSheet()",
    "url": "/Menu/",
    "title": "Abre el menu ActionSheet",
    "version": "0.1.0",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Se mostrara un menu actionSheet con todos los enlaces disponibles para el usuario</p>"
          }
        ]
      }
    },
    "filename": "pages/menu/menu.ts",
    "groupTitle": "Menu",
    "name": "Presentactionsheet__Menu"
  },
  {
    "type": "cancelar()",
    "url": "/ModificarEncuesta/",
    "title": "Desabilita el formulario de preguntas",
    "version": "0.1.0",
    "group": "ModificarEncuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Ocultara el formulario para crear preguntas y mostrara la tabla de preguntas creadas</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "ModificarEncuesta",
    "name": "Cancelar__Modificarencuesta"
  },
  {
    "type": "completarPregunta()",
    "url": "/ModificarEncuesta/",
    "title": "Agrega preguntas al array",
    "version": "0.1.0",
    "group": "ModificarEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question",
            "description": "<p>pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "formato",
            "description": "<p>tipo de pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cantidad",
            "description": "<p>cantidad de respuestas.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "option",
            "description": "<p>array de respuestas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Agrega pregunta al array de preguntas de la encuesta</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "ModificarEncuesta",
    "name": "Completarpregunta__Modificarencuesta"
  },
  {
    "type": "constructor()",
    "url": "/ModificarEncuesta/",
    "title": "Carga los datos del usuario del localStorage y, las encuestas y respuestas del firebase y las materias del profesor seleccionado",
    "version": "0.1.0",
    "group": "ModificarEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "ModificarEncuesta",
    "name": "Constructor__Modificarencuesta"
  },
  {
    "type": "eliminarAnuncio()",
    "url": "/ModificarEncuesta/",
    "title": "Elimina pregunta",
    "version": "0.1.0",
    "group": "ModificarEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Indice",
            "description": "<p>indice de la pregunta seleccionada</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Eliminara la pregunta seleccionada</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "ModificarEncuesta",
    "name": "Eliminaranuncio__Modificarencuesta"
  },
  {
    "type": "HabilitarAgregarQuestion()",
    "url": "/ModificarEncuesta/",
    "title": "Habilito el formulario de preguntas",
    "version": "0.1.0",
    "group": "ModificarEncuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Ocultara la tabla de preguntas creadas y mostrara el formulario para crear preguntas</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "ModificarEncuesta",
    "name": "Habilitaragregarquestion__Modificarencuesta"
  },
  {
    "type": "ModificarQuestion()",
    "url": "/ModificarEncuesta/",
    "title": "Actualiza la encuesta",
    "version": "0.1.0",
    "group": "ModificarEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "encuesta",
            "description": "<p>encuesta seleccionada</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "cambio",
            "description": "<p>booleano que habilita la modificación de la duración de la encuesta</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horas",
            "description": "<p>nueva cantidad de horas de duración.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "preguntas",
            "description": "<p>array de preguntas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Actualiza la encuesta en el firebase</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "ModificarEncuesta",
    "name": "Modificarquestion__Modificarencuesta"
  },
  {
    "type": "constructor()",
    "url": "/RespuestaEncuesta/",
    "title": "Carga los datos del usuario del localStorage y, las encuestas del firebase y las materias del usuario",
    "version": "0.1.0",
    "group": "RespuestaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ActionSheetController",
            "optional": false,
            "field": "actionSheetCtrl",
            "description": "<p>atributo para el actionsheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "AngularFireDatabase",
            "optional": false,
            "field": "afDB",
            "description": "<p>atributo para firebase.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Datos de firebase y localStorage cargados éxitosamente</p>"
          }
        ]
      }
    },
    "filename": "pages/respuestas-encuesta/respuestas-encuesta.ts",
    "groupTitle": "RespuestaEncuesta",
    "name": "Constructor__Respuestaencuesta"
  },
  {
    "type": "traerEncuestas()",
    "url": "/RespuestaEncuesta/",
    "title": "Trae las encuestas",
    "version": "0.1.0",
    "group": "RespuestaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "materia",
            "description": "<p>materia de la encuesta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Trae todas las encuesta del usuario y materia seleccionada.</p>"
          }
        ]
      }
    },
    "filename": "pages/respuestas-encuesta/respuestas-encuesta.ts",
    "groupTitle": "RespuestaEncuesta",
    "name": "Traerencuestas__Respuestaencuesta"
  },
  {
    "type": "VerRespuesta()",
    "url": "/RespuestaEncuesta/",
    "title": "Muestra las estadisticas de la encuesta",
    "version": "0.1.0",
    "group": "RespuestaEncuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dato",
            "description": "<p>codigo de la encuesta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>redirige a la página de estadisticas con los datos de la encuesta seleccionada.</p>"
          }
        ]
      }
    },
    "filename": "pages/respuestas-encuesta/respuestas-encuesta.ts",
    "groupTitle": "RespuestaEncuesta",
    "name": "Verrespuesta__Respuestaencuesta"
  }
] });