import React from "react";
import TopBar from "../global/Topbar";
import BottomLinks from "../global/BottomLinks";

// IMAGES
import diegoLaurentin from "../../assets/diego_laurentin.png";
import ia_oportunities from "../../assets/busquedaTrabajo/ia-oportunities.png";
import ia_courses from "../../assets/busquedaTrabajo/ia-courses.png";
import banner from "../../assets/redesNeuronales/banner.png";
import ia_interview from "../../assets/busquedaTrabajo/ia-interview.png";
import ia_conclution from "../../assets/busquedaTrabajo/ia-conclution.png";

//PDF
import PDF from "../../assets/busquedaTrabajo/Diego Laurentin - Búsqueda de trabajo y certificaciones en IA y ML.pdf";

function RedesNeuronales() {
  return (
    <div className="h-full bg-black" style={{ marginTop: 0 }}>
      <TopBar />

      <div
        className="max-w-[800px] mx-auto relative pt-24"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <header>
          <picture>
            <img src={banner} alt="" />
          </picture>
          <div className="flex pt-3">
            <img src={diegoLaurentin} alt="" className="h-max pt-3" />
            <div className="flex flex-col justify-end h-full pl-4">
              <h1 className="text-white font-medium text-lg md:text-4xl">
                Explorando la Complejidad en Sistemas y Redes Complejas
              </h1>
              <div className="flex">
                <p className="text-white text-sm">
                  08 diciembre 2023 | 10 minutos de lectura{" "}
                </p>
                {/* <a className='ml-2 text-white text-sm border-b' href={PDF} download="Diego Laurentin - Búsqueda de trabajo y certificaciones en IA y ML">Descargar PDF</a> */}
              </div>
            </div>
          </div>
        </header>

        <div className="text-white mt-12 text-lg">
          <p className="pb-8">
            La comprensión de la complejidad en sistemas y redes complejas es
            esencial para abordar los desafíos contemporáneos en campos que van
            desde la inteligencia artificial hasta la investigación científica.
            En este resumen, exploraremos un video introductorio de un taller
            sobre complejidad, analizando sus cuatro partes y reflexionando
            sobre las ideas presentadas.
          </p>

          <p className="pb-8">
            El taller comienza con una reflexión sobre la noción de sistemas,
            destacando la importancia de entender el término más allá de su uso
            común. Se propone la imagen de un sistema como un conjunto de
            elementos con una identidad propia, pero que, en conjunto, persiguen
            un objetivo común. La delimitación de los sistemas con fronteras
            claras es resaltada como un aspecto crucial. Esta primera parte
            establece las bases conceptuales para adentrarse en la complejidad
            de manera estructurada.
          </p>

          <p className="pb-8">
            La segunda parte introduce el concepto de subsistemas, visualizando
            el sistema principal y sus elementos como entidades interconectadas.
            Aquí, se destaca la interconexión entre los subsistemas como la
            cuarta propiedad importante de los sistemas. Esta idea de
            interdependencia y cambio interno resalta la dinámica constante en
            la que operan los sistemas complejos.
          </p>

          <p className="pb-8">
            La tercera parte amplía la perspectiva, reconociendo que un sistema
            es solo uno entre muchos en un universo más amplio. La referencia a
            sistemas estáticos y predecibles frente a sistemas dinámicos,
            afectados por el entorno externo, introduce la complejidad desde
            diferentes perspectivas. La vida es presentada como hermosa y
            simple, pero la complejidad surge al explorar diversas definiciones
            y enfoques de sistemas.
          </p>

          <p className="pb-8">
            La cuarta parte se sumerge en los sistemas dinámicos lineales,
            abordando su previsibilidad y modelado mediante métodos
            probabilísticos. La aplicación de la regresión lineal en machine
            learning se presenta como una herramienta poderosa. Sin embargo, se
            destaca la limitación de estos modelos, ejemplificándolo con la
            simulación de la evolución de una pandemia. Este enfoque proporciona
            una comprensión más profunda de la complejidad en sistemas en
            constante cambio.
          </p>

          <p className="pb-8">
            En el siguiente fragmento, el video explora sistemas dinámicos no
            lineales y caóticos. Se introduce el concepto de caos, destacando la
            imprevisibilidad inherente a estos sistemas. A pesar de la
            contradicción aparente con el método científico tradicional, se
            revela la capacidad de estos sistemas para autoorganizarse,
            regresando a un estado de "caos determinístico". La ciencia de la
            complejidad emerge como un campo que aborda este caos, conectándolo
            con el "efecto mariposa" y la fractalidad en la naturaleza y la
            sociedad.
          </p>

          <p className="pb-8">
            La narrativa evoluciona hacia la aplicación de la complejidad en la
            inteligencia artificial y los sistemas complejos. Se sugiere la
            posibilidad de utilizar herramientas como la computación cuántica
            para predecir sistemas dinámicos caóticos. Se concluye esta sección
            con la introducción de agentes inteligentes, simulando
            comportamientos evolutivos basados en un instinto primitivo de
            supervivencia.
          </p>

          <p className="pb-8">
            A su vez, se explora la interconexión de sistemas, objetos, animales
            y personas en una red compleja. La analogía del aleteo de una
            mariposa en Brasil afectando un tornado en Texas ilustra la
            interdependencia de elementos aparentemente no relacionados. La
            complejidad se ejemplifica en la indexación de artículos científicos
            y la importancia de la blockchain para asegurar la veracidad de la
            información en la red. La permanencia de la información en internet
            se destaca como una advertencia sobre la responsabilidad en la
            publicación.
          </p>

          <p className="pb-8">
            Asimismo, nos vemos invitados a repasar los conceptos clave y
            evaluar el conocimiento con preguntas de selección. Se presenta el
            inicio del viaje en el mundo de la complejidad y la tras complejidad
            como una nueva estrategia de investigación, destacando la evolución
            desde enfoques deterministas y empiristas hacia la adopción de la
            tras complejidad como guía filosófica en la investigación.
          </p>

          <p className="pb-8">
            En el siguiente fragmento, se nos presenta la experiencia del
            profesor en la investigación tras compleja, específicamente en la
            detección de la singularidad tecnológica. Se presentan dos enfoques:
            uno basado en redes bayesianas y eventos probabilísticos, y otro
            basado en la tras complejidad. Este último se apoya en un modelo
            racionalista falsable, utilizando modelos estocásticos
            probabilísticos y aprendizaje de máquinas para simular eventos
            caóticos.
          </p>

          <p className="pb-8">
            La capacidad de la ciencia de la complejidad para abordar fenómenos
            impredecibles se subraya. Se mencionan las herramientas de
            ingeniería utilizadas para el análisis de fenómenos complejos,
            incluyendo la inteligencia artificial y la computación cuántica. Se
            enfatiza la importancia de ir más allá del método científico
            tradicional en la exploración de la complejidad, compartiendo
            sugerencias y estrategias para aquellos que se aventuran en la
            investigación tras compleja.
          </p>

          <p className="pb-8">
            Finalmente, el narrador agradece a los investigadores y profesores
            de la red de investigación de la tras complejidad (redit) y dedica
            el trabajo a la profesora Nancy Yáñez. Se anima a los oyentes a
            repasar el video para evaluar sus conocimientos con preguntas de
            selección.
          </p>

          <p className="pb-8">
            En el último fragmento, el narrador presenta la construcción de un
            grafo del conocimiento utilizando la herramienta Neo4j. Se demuestra
            la conexión de nodos que representan investigadores, grupos de
            investigación y entidades superiores. La versatilidad de Neo4j para
            crear mapas complejos y dinámicos se destaca, al igual que la
            importancia de comprender las propiedades y etiquetas de los nodos y
            conexiones.
          </p>

          <p className="pb-8">
            El video concluye alentando a los espectadores a seguir tutoriales
            para aprovechar al máximo la herramienta Neo4j y crear sus propios
            mapas de conocimiento. Se muestra un ejemplo práctico relacionado
            con películas y actores, ilustrando la utilidad de la herramienta en
            la extracción de información de bases de datos en línea.
          </p>

          <p className="pb-8">
            En resumen, el video introductorio del taller sobre complejidad en
            sistemas y redes complejas proporciona una inmersión profunda en los
            conceptos fundamentales de la complejidad. Desde la reflexión sobre
            sistemas hasta la construcción de grafos del conocimiento, la
            narrativa guía a los espectadores a través de un viaje que va más
            allá de los métodos científicos tradicionales y se sumerge en la
            tras complejidad como guía filosófica en la investigación. Este
            enfoque, marcado por la interconexión, la imprevisibilidad y la
            adaptabilidad, se presenta como esencial para abordar la complejidad
            creciente en los sistemas modernos.
          </p>

          {/* <img src={ia_oportunities} alt="" /> */}

          {/* Oportunidades */}

          {/* <h2 className="text-white font-medium text-2xl pt-8 pb-8">Oportunidades de Trabajo en Inteligencia Artificial y Machine Learning:</h2>

                    <ul className='pl-6'>

                        <li type="circle" className='pb-8'>
                            <b>Ingeniero de Machine Learning (Machine Learning Engineer):</b> Los ingenieros de ML son la columna vertebral de cualquier proyecto de IA. Son responsables de diseñar, desarrollar y mantener modelos de ML. Estos profesionales trabajan en la construcción de sistemas de recomendación, procesamiento de lenguaje natural y visión por computadora, entre otros. Su papel es esencial para llevar la IA a la vida real.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Científico de Datos (Data Scientist):</b> Los científicos de datos son expertos en recopilación y análisis de datos. Utilizan técnicas de ML para extraer conocimientos significativos de conjuntos de datos masivos y ayudan a las organizaciones a tomar decisiones basadas en datos.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Desarrollador de IA (AI Developer):</b> Los desarrolladores de IA crean aplicaciones y sistemas que pueden tomar decisiones inteligentes. Esto puede incluir chatbots, sistemas de recomendación y aplicaciones de procesamiento de lenguaje natural.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Ingeniero de Software de IA (AI Software Engineer):</b> Los ingenieros de software de IA se centran en desarrollar software que utiliza técnicas de IA para mejorar el rendimiento de aplicaciones y sistemas. Esto incluye la implementación de algoritmos de ML y la optimización de rendimiento.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Investigador en IA (AI Researcher):</b> Los investigadores en IA trabajan en la vanguardia de la investigación, desarrollando algoritmos y técnicas avanzadas que impulsan el campo hacia adelante. Su trabajo es fundamental para el avance de la IA.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Analista de Datos (Data Analyst):</b> Los analistas de datos desempeñan un papel crucial al transformar datos en información accionable. Ayudan a las organizaciones a comprender las tendencias y patrones ocultos en los datos.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Ingeniero de Automatización de Procesos Robóticos (RPA Engineer):</b> Los ingenieros de RPA utilizan la automatización para mejorar la eficiencia en los procesos empresariales. Esto puede incluir tareas repetitivas y procesos de back-office.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Ingeniero de Visión por Computadora (Computer Vision Engineer):</b> Estos ingenieros se centran en el desarrollo de sistemas capaces de interpretar y comprender imágenes y videos. Sus aplicaciones van desde vehículos autónomos hasta diagnóstico médico.
                        </li>
                        <li type="circle" className='pb-8'>
                            <b>Especialista en Procesamiento de Lenguaje Natural (NLP Specialist):</b> Los especialistas en NLP se dedican a la comprensión y generación de lenguaje humano. Su trabajo es fundamental en aplicaciones como chatbots, traducción automática y análisis de sentimiento en redes sociales.
                        </li>
                    </ul> */}
        </div>

        <BottomLinks />
      </div>
    </div>
  );
}

export default RedesNeuronales;
