import React from 'react';
import TopBar from '../../global/Topbar';
import BottomLinks from '../../global/BottomLinks';
import "./LinearRegression.css"

// IMAGES
import diegoLaurentin from "../../../assets/diego_laurentin.png"
import pythonBanner from "../../../assets/LinearRegression/Python.png"

// CODES
import LinearRegresion from '../../../assets/LinearRegression/LinearRegression.png'

// COMPONENTS
import LinearRegressionCodes from './LinearRegressionCodes';
import HipotesisToggle from './Toggle/HipotesisToggle';
import DataToggle from './Toggle/DataToggle';
import VisualToggle from './Toggle/VisualToggle';


function LinearRegression() {

    const {
        codeForCSVComponent,
        codeForLinearRegresionComponent,
        codeDataPreparationComponent,
        codeLinearRegressionModelComponent,
        codeEvaluationComponent,
        codeVisualitationComponent
    } = LinearRegressionCodes()

    return (
        <div className="h-full bg-black" style={{ marginTop: 0 }}>

            <TopBar/>

            <div className="max-w-[800px] mx-auto relative pt-24" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <header>
                    <picture>
                        <img src={pythonBanner} alt="" />
                    </picture>
                    <div className='flex pt-3'>
                        <img src={diegoLaurentin} alt="" className="h-max pt-3" />
                        <div className="flex flex-col justify-end h-full pl-4">
                            <h1 className="text-white font-medium text-lg md:text-3xl">
                                Proyecto de Machine Learning: Regresión Lineal con Python para Predecir Precios Inmobiliarios
                            </h1>
                            <div className='flex'>
                                <p className="text-white text-sm">29 octubre 2023 | 10 minutos de lectura</p>
                                {/* <a className='ml-2 text-white text-sm border-b' href={PDF} download="Diego Laurentin - Búsqueda de trabajo y certificaciones en IA y ML">Descargar PDF</a> */}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="text-white mt-12 text-lg font-light">

                    <p>
                        La regresión lineal es una técnica fundamental en el campo del aprendizaje automático y análisis de datos. En este artículo, exploraremos un proyecto práctico de regresión lineal en Python, que tiene como objetivo predecir los precios inmobiliarios en función de diversas características. A lo largo del artículo, presentaremos un caso práctico, desde la creación de datos de ejemplo hasta la construcción y evaluación de un modelo de regresión lineal.
                    </p>

                    <section id='Hipotesis'>
                        <h2 className="text-white font-medium text-2xl pt-8 pb-8">Creación de Datos y Formulación de Hipótesis.</h2>

                        <p className='pb-8 font-light'>
                            Para comenzar nuestro proyecto de regresión lineal, primero creamos un conjunto de datos de ejemplo que simula las características de las viviendas y sus precios. Este paso es esencial para poder aplicar la regresión lineal y predecir los precios. Además, formulamos nuestra hipótesis de trabajo, que establece que existe una relación lineal entre las características de una vivienda y su precio. Por ejemplo, esperamos que el área, el número de habitaciones, el número de baños y la edad de la propiedad influyan en el precio de la vivienda.
                        </p>

                        {codeForCSVComponent}

                        <HipotesisToggle />
                    </section>

                    <section id='Datos' className='pt-8 font-light'>
                        <h2 className="text-white font-medium text-2xl pb-8">Preparación de Datos.</h2>

                        <p className='pb-8'>
                            Una vez que tenemos nuestros datos, utilizamos la biblioteca <code id='code'>pandas</code> en Python para cargarlos en un DataFrame. A continuación, exploramos y limpiamos los datos. Esto implica la eliminación de valores nulos y la codificación de variables categóricas, como la ubicación de las viviendas. Además, dividimos los datos en conjuntos de entrenamiento y prueba, lo que nos permitirá evaluar el modelo más adelante.
                        </p>

                        {codeDataPreparationComponent}

                        <DataToggle />
                    </section>

                    <section id='Construction' className='pt-8 font-light'>
                        <h2 className="text-white font-medium text-2xl pb-8">Construcción del Modelo de Regresión Lineal.</h2>

                        <p>
                            En esta etapa, importamos las bibliotecas necesarias, incluyendo <code id='code'>scikit-learn</code> , y creamos un modelo de regresión lineal. El modelo se entrena con los datos de entrenamiento, lo que significa que encuentra la mejor línea recta que se ajusta a los datos para predecir los precios inmobiliarios. La regresión lineal busca minimizar la suma de los cuadrados de los errores entre los valores predichos y los valores reales.
                        </p>

                        {codeLinearRegressionModelComponent}
                    </section>

                    <section id='Evaluation' className='pt-8 font-light'>
                        <h2 className="text-white font-medium text-2xl pb-8">Evaluación del Modelo.</h2>

                        <p className='pb-8'>
                            Para evaluar el modelo de regresión lineal, calculamos el <code id='code'>Error Cuadrático Medio (MSE)</code> y el <code id='code'>Coeficiente de Determinación (R-cuadrado)</code>. Estas métricas nos ayudan a medir el rendimiento del modelo y a entender cuán bien se ajusta a los datos de prueba. Interpretamos los resultados y discutimos la precisión del modelo en función de estas métricas.
                        </p>

                        {codeEvaluationComponent}

                    </section>

                    <section id='Visualitation' className='pt-8 font-light'>
                        <h2 className="text-white font-medium text-2xl pb-8">Visualización de Resultados.</h2>

                        <p className='pb-8'>
                            La visualización de resultados es crucial para comprender el rendimiento del modelo. Creamos gráficos de dispersión que muestran la relación entre los precios reales y los precios predichos. Utilizamos bibliotecas como <code id='code'>matplotlib</code> o <code id='code'>seaborn</code> para crear visualizaciones efectivas que permiten una fácil interpretación de los resultados.
                        </p>

                        {codeVisualitationComponent}

                        <VisualToggle />
                    </section>

                    <section id='Results' className='pt-8 font-light'>
                        <h2 className="text-white font-medium text-2xl pb-8">Resultados.</h2>

                        <p className='pb-8'>
                            En esta sección, evaluaremos los resultados de nuestro proyecto de regresión lineal y llegaremos a una conclusión sobre su rendimiento.
                        </p>

                        {codeForLinearRegresionComponent}

                        <p className='pb-8 pt-8'>
                            Hemos utilizado la biblioteca scikit-learn para crear un modelo de regresión lineal. Primero, hemos cargado nuestros datos y dividido el conjunto en datos de entrenamiento y prueba. Luego, hemos instanciado el modelo y lo hemos entrenado con los datos de entrenamiento.
                        </p>

                        <picture className='flex items-center justify-center pb-8'>
                            <img src={LinearRegresion} alt="" className='rounded-xl' />
                        </picture>

                        <div className='pb-8'>
                            <p><code id='code'>Error Cuadrático Medio (MSE)</code> : 8210758.475804797</p>
                            <p><code id='code'>Coeficiente de Determinación (R^2)</code> : 0.9984510517959706</p>
                        </div>

                        <p className='pb-8'>
                            Tras el entrenamiento, hemos realizado predicciones en el conjunto de prueba y calculado dos métricas clave: el Error Cuadrático Medio (MSE) y el Coeficiente de Determinación (R^2). Estas métricas nos ayudarán a evaluar la precisión del modelo.
                        </p>

                        <ul className='pl-8'>
                            <li type="circle" className='pb-8 font-light'>
                                <p><code id='code'>Coeficiente de Determinación (R^2)</code> : Un valor de R^2 de 0.9984 es muy cercano a 1, lo que sugiere que el modelo es capaz de explicar aproximadamente el 99.84% de la variabilidad en los datos. En otras palabras, el modelo se ajusta muy bien a los datos y tiene una capacidad de predicción excepcional. Esto podría indicar que el modelo es muy preciso en la predicción de los precios inmobiliarios en función de las características proporcionadas.</p>
                            </li>
                            <li type="circle" className='pb-8 font-light'>
                                <code id='code'>Error Cuadrático Medio (MSE)</code> : El valor del MSE, que es 8,210,758.48, es relativamente alto. Aunque un valor absoluto del MSE no tiene un significado universal, valores más bajos generalmente indican un mejor ajuste del modelo. En este caso, el MSE parece ser alto en comparación con el valor del R^2 cercano a 1. Esto podría indicar que, a pesar de que el modelo explica una gran cantidad de variabilidad, las predicciones reales pueden diferir significativamente de las predicciones del modelo.
                            </li>
                        </ul>



                        <p className='pb-8'>
                            El alto valor de R^2 sugiere que el modelo es capaz de explicar la variabilidad en los precios inmobiliarios utilizando las características proporcionadas, lo cual es positivo. Sin embargo, el MSE alto indica que las predicciones del modelo pueden tener errores significativos en términos de los precios reales.
                        </p>

                        <p className='pb-8'>
                            Es importante recordar que el rendimiento de un modelo no debe evaluarse solo en función de estas métricas. Debes considerar el contexto específico de tu problema, las características de los datos y las aplicaciones prácticas de tus predicciones. Si el objetivo es una aplicación crítica, como la valoración de bienes raíces, incluso pequeños errores en las predicciones pueden ser problemáticos.
                        </p>

                        <p className='pb-8'>
                            Por último, hemos visualizado los resultados en un gráfico de dispersión que compara los precios reales con los precios predichos. Este gráfico nos brinda una idea visual de qué tan bien se ajusta nuestro modelo a los datos.
                        </p>
                    </section>

                    <section id='Conclusion' className='pt-8 font-light'>
                        <h2 className="text-white font-medium text-2xl pb-8">Conclusión:</h2>

                        <p className='pb-8'>
                            En conclusión, este proyecto de regresión lineal en Python demuestra la aplicación de técnicas de aprendizaje automático para predecir precios inmobiliarios. Hemos formulado una hipótesis, creado datos de ejemplo, construido un modelo de regresión lineal y evaluado su rendimiento. Además, hemos visualizado los resultados para una comprensión más clara. Los resultados de este proyecto pueden ser aplicados en situaciones reales para la toma de decisiones basadas en datos en el mercado inmobiliario.
                        </p>

                        <p className='pb-8'>
                            Gracias por leer este artículo sobre el proyecto de regresión lineal. Espero que esta guía te haya proporcionado una comprensión sólida de cómo aplicar la regresión lineal en Python para predecir precios inmobiliarios. Te animo a explorar aún más este campo y a aplicar estos conceptos en proyectos prácticos. Si tienes alguna pregunta o comentario, no dudes en dejarlo a continuación. ¡Buena suerte en tus proyectos de aprendizaje automático!
                        </p>
                    </section>

                </div>

                <BottomLinks />

            </div>
        </div>
    );
}

export default LinearRegression;