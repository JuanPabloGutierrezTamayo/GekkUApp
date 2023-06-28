# GekkUApp
Repositorio de la última parte del proyecto de la asignatura Ciencias de la Computación y Aplicaciones Móviles.

---

## ¿Qué es GekkU?
GekkU surge de la idea de entregarle a los estudiantes de la Universidad Nacional una aplicación para que gestionen su información académica de una manera más cómoda que usando el sistema de información oficial.

De acuerdo a esto, a lo largo del desarrollo de la asignatura se pensó en un MVP (Producto Mínimo Viable) de cómo podría ser esta aplicación. Lo principal es el acceso a la información académica, la cual en una versión final de la aplicación será extraída por medio de *web scraping* del sistema de información (SIA). Luego se tendrán otras funcionalidades para la comodidad del estudiante, tales como manejo de alertas, visualización del horario y de las rutas intercampus.

En el caso de este MVP, se cuenta con la realización de tres pantallas que consideramos principales para el funcionamiento de la aplicación, las cuales son:

* **Log In:** pantalla para que el usuario pueda ingresar a la aplicación con sus credenciales institucionales.

* **Menú:** pantalla en donde se encuentran todas las opciones con las que contará el usuario para hacer uso de la aplicación.

* **Información académica:** pantalla en donde estará concentrada la información académica más importante del estudiante. Entre esta información se encuentra el promedio académico, el porcentaje de avance, las asignaturas inscritas en el semestre actual, las calificaciones de las asignaturas de semestres pasados, etc.

Como se ha mencionado, este repositorio no contiene el producto final sino un MVP a modo de muestra de cómo será la dinámica general de la aplicación.

---

## ¿Cómo fue realizado el proyecto?
El proyecto cuenta con una base de datos de SQLite, un Backend en FastAPI y un Frontend en React Native, de acuerdo a las enseñanzas de la clase.

La validación y manejo de seguridad de las cuentas de los usuarios se realizó con un token y JWT, pero es importante aclarar que para este MVP no se encriptan las contraseñas por facilidad de la demostración.

Del lado del Backend y la base de datos, se manejan los endpoints necesarios para la consulta de las credenciales e información del estudiante. La creación por el momento se realiza solo desde la base de datos.