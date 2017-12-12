define({ "api": [
  {
    "type": "AgregarQuestion()",
    "url": "-",
    "title": "Agrega preguntas a la encuesta",
    "version": "0.1.0",
    "group": "Alta_Encuesta",
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
    "groupTitle": "Alta_Encuesta",
    "name": "Agregarquestion__"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage y, las encuestas del firebase y las materias del profesor seleccionado",
    "version": "0.1.0",
    "group": "Alta_Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el navController.</p>"
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": "<p>atributo para el toast.</p>"
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
    "groupTitle": "Alta_Encuesta",
    "name": "Constructor__"
  },
  {
    "type": "SubirQuestion()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Encuesta/",
    "title": "Sube la encuesta creada",
    "version": "0.1.0",
    "group": "Alta_Encuesta",
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
    "groupTitle": "Alta_Encuesta",
    "name": "Subirquestion__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataEncuesta"
  },
  {
    "type": "constructor()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Aulas/",
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
            "field": "navCtrl",
            "description": "<p>atributo para el navController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el navParams.</p>"
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
    "name": "Constructor__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAulas"
  },
  {
    "type": "IrAula()",
    "url": "-",
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
    "name": "Iraula__"
  },
  {
    "type": "cancelar()",
    "url": "-",
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
    "name": "Cancelar__"
  },
  {
    "type": "constructor()",
    "url": "-",
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
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": "<p>atributo para el toast.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "name": "Constructor__"
  },
  {
    "type": "enviar()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Respuestas/",
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
    "name": "Enviar__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataRespuestas"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage y las encuestas del firebase",
    "version": "0.1.0",
    "group": "Estadistica_Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Estadistica_Encuesta",
    "name": "Constructor__"
  },
  {
    "type": "mostrar()",
    "url": "-",
    "title": "Muestra el gráfico",
    "version": "0.1.0",
    "group": "Estadistica_Encuesta",
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
    "groupTitle": "Estadistica_Encuesta",
    "name": "Mostrar__"
  },
  {
    "type": "ObtenerCantidades()",
    "url": "-",
    "title": "Carga los resultados a los gráficos torta",
    "version": "0.1.0",
    "group": "Estadistica_Encuesta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Carga la lista de respuestas con la cantidad de usuarios que la eligieron</p>"
          }
        ]
      }
    },
    "filename": "pages/estadistica-encuesta/estadistica-encuesta.ts",
    "groupTitle": "Estadistica_Encuesta",
    "name": "Obtenercantidades__"
  },
  {
    "type": "cancelar()",
    "url": "-",
    "title": "Desabilita el formulario de anuncios",
    "version": "0.1.0",
    "group": "Gestor_Anuncio",
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
    "groupTitle": "Gestor_Anuncio",
    "name": "Cancelar__"
  },
  {
    "type": "constructor()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Anuncios/",
    "title": "Carga los datos del usuario del localStorage y de los anuncios del firebase",
    "version": "0.1.0",
    "group": "Gestor_Anuncio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": "<p>atributo para el toast.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Gestor_Anuncio",
    "name": "Constructor__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAnuncios"
  },
  {
    "type": "crearAnuncio()",
    "url": "-",
    "title": "Habilita el formulario de anuncios",
    "version": "0.1.0",
    "group": "Gestor_Anuncio",
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
    "groupTitle": "Gestor_Anuncio",
    "name": "Crearanuncio__"
  },
  {
    "type": "eliminarAnuncio()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Anuncios/",
    "title": "Elimina anuncios",
    "version": "0.1.0",
    "group": "Gestor_Anuncio",
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
    "groupTitle": "Gestor_Anuncio",
    "name": "Eliminaranuncio__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAnuncios"
  },
  {
    "type": "modificarAnuncio()",
    "url": "-",
    "title": "Habilita el formulario de anuncios y carga los datos",
    "version": "0.1.0",
    "group": "Gestor_Anuncio",
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
    "groupTitle": "Gestor_Anuncio",
    "name": "Modificaranuncio__"
  },
  {
    "type": "subirAnuncio()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Anuncios/",
    "title": "Subira un nuevo anuncio",
    "version": "0.1.0",
    "group": "Gestor_Anuncio",
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
    "groupTitle": "Gestor_Anuncio",
    "name": "Subiranuncio__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAnuncios"
  },
  {
    "type": "constructor()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Encuestas/",
    "title": "Carga los datos del usuario del localStorage y las encuestas del firebase",
    "version": "0.1.0",
    "group": "Gestor_Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Gestor_Encuesta",
    "name": "Constructor__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataEncuestas"
  },
  {
    "type": "crearEncuesta()",
    "url": "-",
    "title": "Permite crear una encuesta",
    "version": "0.1.0",
    "group": "Gestor_Encuesta",
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
    "groupTitle": "Gestor_Encuesta",
    "name": "Crearencuesta__"
  },
  {
    "type": "eliminarEncuesta()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Encuestas/",
    "title": "Elimina una encuesta",
    "version": "0.1.0",
    "group": "Gestor_Encuesta",
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
    "groupTitle": "Gestor_Encuesta",
    "name": "Eliminarencuesta__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataEncuestas"
  },
  {
    "type": "modificarEncuesta()",
    "url": "-",
    "title": "Permite modificar una encuesta",
    "version": "0.1.0",
    "group": "Gestor_Encuesta",
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
    "groupTitle": "Gestor_Encuesta",
    "name": "Modificarencuesta__"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage y, las asistencia según el aula seleccionada y los anuncios",
    "version": "0.1.0",
    "group": "Informacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Informacion",
    "name": "Constructor__"
  },
  {
    "type": "EstadisticaAlumnos()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/asistencias/",
    "title": "Muestra las estadisticas de asistencias",
    "version": "0.1.0",
    "group": "Informacion",
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
    "groupTitle": "Informacion",
    "name": "Estadisticaalumnos__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAsistencias"
  },
  {
    "type": "MostrarAnuncio()",
    "url": "-",
    "title": "Muestra el anuncio",
    "version": "0.1.0",
    "group": "Informacion",
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
    "groupTitle": "Informacion",
    "name": "Mostraranuncio__"
  },
  {
    "type": "buscarGeneral()",
    "url": "-",
    "title": "Muestra listado de asistencia",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "opcionSeleccionada",
            "description": "<p>opcion de filtro por la que hace la búsqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "alumnosMetodologia",
            "description": "<p>Lista de alumnos de metodologia</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "alumnosLegislacion",
            "description": "<p>Lista de alumnos de legislacion</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "alumnosLabIV",
            "description": "<p>Lista de alumnos de laboratorio IV</p>"
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
            "description": "<p>Muestra lista de alumnos y sus faltas</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Buscargeneral__"
  },
  {
    "type": "constructor()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/asistencias",
    "title": "Carga los datos del usuario del localStorage y, las asistencia según el aula seleccionada y los anuncios de faltas que haya en el sistema",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Printer",
            "optional": false,
            "field": "printer",
            "description": "<p>atributo para exportación archivo pdf</p>"
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": "<p>atributo para el toast</p>"
          },
          {
            "group": "Parameter",
            "type": "AlertController",
            "optional": false,
            "field": "alertCtrl",
            "description": "<p>atributo para el alert1</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>atributo para exportación archivo csv</p>"
          },
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Constructor__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAsistencias"
  },
  {
    "type": "exportarCSV()",
    "url": "-",
    "title": "Exportacíon de archivos pdf",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Descarga",
            "description": "<p>archivo pdf a ruta a eleccion</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Exportarcsv__"
  },
  {
    "type": "exportarCSV()",
    "url": "-",
    "title": "Exportacíon de archivos csv",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Descarga archivo excel a la ruta android/data/io.ionic.jujuro</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Exportarcsv__"
  },
  {
    "type": "filtrado()",
    "url": "-",
    "title": "Muestra el combo de filtro de asistencia según la opcion seleccionada",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "opcion",
            "description": "<p>opcion de filtro</p>"
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
            "description": "<p>Combo con opciones mostrado</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Filtrado__"
  },
  {
    "type": "guardarAsistencia()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Asistencia/",
    "title": "Toma las asistencias",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Pone presenetes a los alumnos seleccionados, si se vuelve a guardar en el mismo día modificara las asistencias</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Guardarasistencia__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAsistencia"
  },
  {
    "type": "tomarAsistencia()",
    "url": "-",
    "title": "Habilitación",
    "version": "0.1.0",
    "group": "Lista_Asistencia",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Habilita la toma de asistencias</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-asistencia/lista-asistencia.ts",
    "groupTitle": "Lista_Asistencia",
    "name": "Tomarasistencia__"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage y las encuestas,respuestas,materias del usuario y profesores del firebase",
    "version": "0.1.0",
    "group": "Lista_Encuesta",
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
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Lista_Encuesta",
    "name": "Constructor__"
  },
  {
    "type": "RealizarCuestionario()",
    "url": "-",
    "title": "Permite realizar el cuestionario",
    "version": "0.1.0",
    "group": "Lista_Encuesta",
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
            "description": "<p>Mostrara un alert si la encuesta ya fue respondida por el usuario</p>"
          }
        ]
      }
    },
    "filename": "pages/lista-encuestas/lista-encuestas.ts",
    "groupTitle": "Lista_Encuesta",
    "name": "Realizarcuestionario__"
  },
  {
    "type": "traerEncuestas()",
    "url": "-",
    "title": "Trae las encuestas disponibles",
    "version": "0.1.0",
    "group": "Lista_Encuesta",
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
    "groupTitle": "Lista_Encuesta",
    "name": "Traerencuestas__"
  },
  {
    "type": "inicioSesionRapido()",
    "url": "-",
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
    "name": "Iniciosesionrapido__"
  },
  {
    "type": "ionViewDidLoad()",
    "url": "-",
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
    "name": "Ionviewdidload__"
  },
  {
    "type": "loginComun()",
    "url": "-",
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Logincomun__"
  },
  {
    "type": "loginGoogle()",
    "url": "-",
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
            "field": "ErrorSistem",
            "description": "<p>hubo un error al iniciar sesión.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Logingoogle__"
  },
  {
    "type": "verificarSiTieneToken()",
    "url": "-",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"response\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "pages/login/login.ts",
    "groupTitle": "Login",
    "name": "Verificarsitienetoken__"
  },
  {
    "type": "constructor()",
    "url": "-",
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
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "name": "Constructor__"
  },
  {
    "type": "EscanearCodigo()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/QR/",
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
    "name": "Escanearcodigo__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataQr"
  },
  {
    "type": "logOut()",
    "url": "-",
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
    "name": "Logout__"
  },
  {
    "type": "MostrarAvisos()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Avisos/",
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
    "name": "Mostraravisos__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataAvisos"
  },
  {
    "type": "presentActionSheet()",
    "url": "-",
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
    "name": "Presentactionsheet__"
  },
  {
    "type": "cancelar()",
    "url": "-",
    "title": "Desabilita el formulario de preguntas",
    "version": "0.1.0",
    "group": "Modificar_Encuesta",
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
    "groupTitle": "Modificar_Encuesta",
    "name": "Cancelar__"
  },
  {
    "type": "completarPregunta()",
    "url": "-",
    "title": "Agrega preguntas al array",
    "version": "0.1.0",
    "group": "Modificar_Encuesta",
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
    "groupTitle": "Modificar_Encuesta",
    "name": "Completarpregunta__"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage y, las encuestas y respuestas del firebase y las materias del profesor seleccionado",
    "version": "0.1.0",
    "group": "Modificar_Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "ToastController",
            "optional": false,
            "field": "toastCtrl",
            "description": "<p>atributo para el toast</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Modificar_Encuesta",
    "name": "Constructor__"
  },
  {
    "type": "eliminarPregunta()",
    "url": "-",
    "title": "Elimina pregunta",
    "version": "0.1.0",
    "group": "Modificar_Encuesta",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDatos",
            "description": "<p>Mostrara un toast informando que la encuesta ya fue respondida y no se podra eliminar las preguntas</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "Modificar_Encuesta",
    "name": "Eliminarpregunta__"
  },
  {
    "type": "HabilitarAgregarQuestion()",
    "url": "-",
    "title": "Habilito el formulario de preguntas",
    "version": "0.1.0",
    "group": "Modificar_Encuesta",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDatos",
            "description": "<p>Mostrara un toast informando que la encuesta ya fue respondida y no se podra agregar las preguntas</p>"
          }
        ]
      }
    },
    "filename": "pages/modificar-encuesta/modificar-encuesta.ts",
    "groupTitle": "Modificar_Encuesta",
    "name": "Habilitaragregarquestion__"
  },
  {
    "type": "ModificarQuestion()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Encuestas/",
    "title": "Actualiza la encuesta",
    "version": "0.1.0",
    "group": "Modificar_Encuesta",
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
    "groupTitle": "Modificar_Encuesta",
    "name": "Modificarquestion__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataEncuestas"
  },
  {
    "type": "cancelar()",
    "url": "-",
    "title": "",
    "version": "0.1.0",
    "group": "Registro_Pro_Adm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Quita el formulario de registro y vuelve a cargar la tabla</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-pro-adm/registro-pro-adm.ts",
    "groupTitle": "Registro_Pro_Adm",
    "name": "Cancelar__"
  },
  {
    "type": "completarRegistro()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Operación de registro de personal",
    "version": "0.1.0",
    "group": "Registro_Pro_Adm",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "perfil",
            "description": "<p>perfil del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": "<p>apellido del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>sexo del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>contrasenia del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confPassword",
            "description": "<p>repetición de confirmación de la contraseña</p>"
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
            "description": "<p>Personal agregado al sistema</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-pro-adm/registro-pro-adm.ts",
    "groupTitle": "Registro_Pro_Adm",
    "name": "Completarregistro__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "constructor()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Carga los datos del usuario del localStorage y del firebase",
    "version": "0.1.0",
    "group": "Registro_Pro_Adm",
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
            "type": "AlertController",
            "optional": false,
            "field": "alertCtrl",
            "description": "<p>atributo para el alert1</p>"
          },
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "filename": "pages/registro-pro-adm/registro-pro-adm.ts",
    "groupTitle": "Registro_Pro_Adm",
    "name": "Constructor__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "eliminarPersonal()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Desabilita personal",
    "version": "0.1.0",
    "group": "Registro_Pro_Adm",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>usuario elegido</p>"
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
            "description": "<p>Atributo habilitado del usuario modificado a false</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-pro-adm/registro-pro-adm.ts",
    "groupTitle": "Registro_Pro_Adm",
    "name": "Eliminarpersonal__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "habilitarPersonal()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Habilita personal",
    "version": "0.1.0",
    "group": "Registro_Pro_Adm",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>usuario elegido</p>"
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
            "description": "<p>Atributo habilitado del usuario modificado a true</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-pro-adm/registro-pro-adm.ts",
    "groupTitle": "Registro_Pro_Adm",
    "name": "Habilitarpersonal__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "registrarPersonal()",
    "url": "-",
    "title": "Formulario para personal",
    "version": "0.1.0",
    "group": "Registro_Pro_Adm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Muestra formulario para registrar nuevo personal</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-pro-adm/registro-pro-adm.ts",
    "groupTitle": "Registro_Pro_Adm",
    "name": "Registrarpersonal__"
  },
  {
    "type": "agregarMaterias()",
    "url": "-",
    "title": "Agrega materia al usuario",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "usuario",
            "description": "<p>usuario pasado por archivo</p>"
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
            "description": "<p>Carga al usuario al firebase con nombre, apellido, legajo, cantidad de faltas 0 y en materia Laboratorio IV por defecto</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Agregarmaterias__"
  },
  {
    "type": "cancelar()",
    "url": "-",
    "title": "",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Quita el formulario de registro y vuelve a cargar la tabla</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Cancelar__"
  },
  {
    "type": "completarRegistro()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Operación de registro de alumno",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "materias",
            "description": "<p>lista de materias del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": "<p>apellido del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>sexo del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>contrasenia del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confPassword",
            "description": "<p>repetición de confirmación de la contraseña</p>"
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
            "description": "<p>Personal agregado al sistema</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Completarregistro__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage, de todos los alumnos y sus asistencias del firebase",
    "version": "0.1.0",
    "group": "Registro_alumno",
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
            "type": "AlertController",
            "optional": false,
            "field": "alertCtrl",
            "description": "<p>atributo para el alert1</p>"
          },
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Constructor__"
  },
  {
    "type": "eliminarAlumno()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Desabilita al alumno",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>alumno elegido</p>"
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
            "description": "<p>Atributo habilitado del alumno modificado a false</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Eliminaralumno__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "habilitarAlumno()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/usuarios/",
    "title": "Habilita personal",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>alumno elegido</p>"
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
            "description": "<p>Atributo habilitado del alumno modificado a true</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Habilitaralumno__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataUsuarios"
  },
  {
    "type": "mandarAlServidor()",
    "url": "-",
    "title": "Manda el archivo al servidor",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FileUploader",
            "optional": false,
            "field": "uploader",
            "description": "<p>archivo importado</p>"
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
            "description": "<p>Manda el archivo al servidor y carga a los nuevos alumnos que no esten en el sistema</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 \n{\n  \"error\": \"Can'tOpenFile\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Mandaralservidor__"
  },
  {
    "type": "regCsv()",
    "url": "-",
    "title": "Formulario para carga de archivo",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Muestra formulario para cargar archivo de alumnos</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Regcsv__"
  },
  {
    "type": "registrarAlumno()",
    "url": "-",
    "title": "Formulario para alumno",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "void",
            "description": "<p>Muestra formulario para registrar nuevo alumno</p>"
          }
        ]
      }
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Registraralumno__"
  },
  {
    "type": "separarComas()",
    "url": "-",
    "title": "Separa el nombre y el apellido",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "obj",
            "description": "<p>Nombre y apellido del usuario pasado por archivo</p>"
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
            "field": "Object",
            "description": "<p>Devuelve un objeto con los campos nombre y apellido separados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"response\": {nombre:\"Rodrigo\",apellido:\"Balabasquer\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Separarcomas__"
  },
  {
    "type": "verificarSiExisteArchivo()",
    "url": "-",
    "title": "Verifica que el usuario no se encuestre en el archivo",
    "version": "0.1.0",
    "group": "Registro_alumno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "alumno",
            "description": "<p>alumno seleccionado</p>"
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
            "field": "bool",
            "description": "<p>true/false Devuelve true si el usuario no se encontraba en el sistema y false si ya existía</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 0,\n   \"response\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1  Already exist\n{\n  \"error\": \"UserAlreadyExist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "pages/registro-alumno/registro-alumno.ts",
    "groupTitle": "Registro_alumno",
    "name": "Verificarsiexistearchivo__"
  },
  {
    "type": "constructor()",
    "url": "-",
    "title": "Carga los datos del usuario del localStorage y, las encuestas del firebase y las materias del usuario",
    "version": "0.1.0",
    "group": "Respuesta_Encuesta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NavController",
            "optional": false,
            "field": "navCtrl",
            "description": "<p>atributo para el NavController.</p>"
          },
          {
            "group": "Parameter",
            "type": "NavParams",
            "optional": false,
            "field": "navParams",
            "description": "<p>atributo para el NavParams.</p>"
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
    "groupTitle": "Respuesta_Encuesta",
    "name": "Constructor__"
  },
  {
    "type": "traerEncuestas()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/data/Encuestas/",
    "title": "Trae las encuestas",
    "version": "0.1.0",
    "group": "Respuesta_Encuesta",
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
    "groupTitle": "Respuesta_Encuesta",
    "name": "Traerencuestas__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcDataEncuestas"
  },
  {
    "type": "VerRespuesta()",
    "url": "/https://console.firebase.google.com/project/testauth-12ddc/database/testauth-12ddc/Encuestas/",
    "title": "Muestra las estadisticas de la encuesta",
    "version": "0.1.0",
    "group": "Respuesta_Encuesta",
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
    "groupTitle": "Respuesta_Encuesta",
    "name": "Verrespuesta__HttpsConsoleFirebaseGoogleComProjectTestauth12ddcDatabaseTestauth12ddcEncuestas"
  }
] });
