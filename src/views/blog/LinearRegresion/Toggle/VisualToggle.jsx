import React, { useState } from 'react';

function VisualToggle() {
    const [showExplanation, setShowExplanation] = useState(false);

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    return (
        <div>
            <button onClick={toggleExplanation} className='pt-4 border-b'>
                {showExplanation ? '< Ocultar Explicación del Código' : '> Mostrar Explicación del Código'}
            </button>
            {showExplanation && (
                <div>
                    <p className='pt-8 pb-8 font-light'>
                        Esta parte del código se encarga de visualizar los resultados de la regresión lineal mediante un gráfico de dispersión (scatter plot) que compara los precios reales con los precios predichos por el modelo. Aquí tienes una explicación de lo que hace cada línea:
                    </p>

                    <ul className='pl-6'>
                        <li type="circle" className='pb-8 font-light'>
                            <p>
                                <code id='code'>plt.scatter(y_test, y_pred)</code> : Esto crea un gráfico de dispersión que compara los valores reales <code id='code'>(y_test)</code> en el eje y con las predicciones del modelo <code id='code'>(y_pred)</code> en el eje x. Cada punto en el gráfico representa una propiedad inmobiliaria y su precio real vs. precio predicho. Si el modelo predijera perfectamente, todos los puntos se alinearían en una línea recta diagonal.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-light'>
                            <p>
                                <code id='code'>plt.xlabel('Precio Real')</code> : Establece una etiqueta en el eje x del gráfico. En este caso, etiqueta el eje x como "Precio Real", lo que indica que representa los valores reales de los precios.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-light'>
                            <p>
                                <code id='code'>plt.ylabel('Precio Predicho')</code> : Establece una etiqueta en el eje y del gráfico. En este caso, etiqueta el eje y como "Precio Predicho", lo que indica que representa las predicciones del modelo.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-light'>
                            <p>
                                <code id='code'>plt.title('Regresión Lineal: Precio Real vs. Precio Predicho')</code> : Agrega un título al gráfico, que se muestra en la parte superior. En este caso, el título es "Regresión Lineal: Precio Real vs. Precio Predicho", lo que proporciona una descripción del gráfico.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-light'>
                            <p>
                                <code id='code'>plt.show()</code> : Finalmente, esta línea muestra el gráfico en una ventana o en la salida de la consola, dependiendo de dónde estés ejecutando el código. El gráfico de dispersión es una herramienta visual que te permite ver cómo se comparan las predicciones del modelo con los valores reales y evaluar visualmente el rendimiento del modelo.
                            </p>
                        </li>
                    </ul>

                    <p className='pl-8 font-light'>
                        En resumen, esta sección de código utiliza <code id='code'>matplotlib</code>, una biblioteca de visualización en Python, para crear un gráfico que te ayuda a entender cómo se comporta el modelo de regresión lineal en términos de predicciones de precios inmobiliarios en comparación con los valores reales. Si el modelo es preciso, los puntos en el gráfico estarán cerca de una línea diagonal ideal.
                    </p>
                </div>
            )}
        </div>
    );
}

export default VisualToggle;
