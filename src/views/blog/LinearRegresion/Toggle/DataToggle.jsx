import React, { useState } from 'react';

function DataToggle() {
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
                        Este código de Python se encarga de cargar un archivo de datos CSV, dividir los datos en conjuntos de entrenamiento y prueba, y prepararlos para la construcción de un modelo de regresión lineal utilizando la biblioteca scikit-learn. Aquí tienes una explicación paso a paso:
                    </p>

                    <ul className='pl-6'>
                        <li type="circle" className='pb-8 font-medium'>
                            Importación de bibliotecas:
                            <ul className='pl-8'>
                                <li type="circle" className='pb-4 pt-4 font-light'>
                                    <p><code id='code'>import pandas as pd</code> : Importa la biblioteca pandas y la apoda como "pd" para que sea más fácil de usar en el código.</p>
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>from sklearn.model_selection import train_test_split</code> :  Importa la función train_test_split de <code id='code'>scikit-learn</code>, que se usará para dividir los datos en conjuntos de entrenamiento y prueba.
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>from sklearn.linear_model import LinearRegression</code> : Importa la clase LinearRegression de <code id='code'>scikit-learn</code>, que se utilizará para construir un modelo de regresión lineal.
                                </li>
                                <li type="circle" className='font-light'>
                                    <code id='code'>import matplotlib.pyplot as plt</code> : Importa la biblioteca matplotlib, que se utilizará para visualizar los resultados más adelante.
                                </li>
                            </ul>
                        </li>
                        <li type="circle" className='pb-8 font-medium'>
                            Cargar el archivo de datos:
                            <p className='pl-8 pt-4 font-light'>
                                <code id='code'>data = pd.read_csv('datos_inmobiliarios.csv')</code> : Carga un archivo CSV llamado 'datos_inmobiliarios.csv' utilizando la función <code id='code'>read_csv</code> de pandas. El archivo contiene datos de propiedades inmobiliarias que se generaron previamente.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-medium'>
                            Definir las variables independientes y la variable dependiente:
                            <ul className='pl-8 pt-4'>
                                <li type="circle" className='pb-4 pt-4 font-light'>
                                    <p><code id='code'>X = data[['Área', 'Habitaciones', 'Baños', 'Edad de la Propiedad']]</code> : Crea un DataFrame <code id='code'>X</code> que contiene las variables independientes (características) del modelo de regresión lineal. En este caso, se seleccionan las columnas 'Área', 'Habitaciones', 'Baños' y 'Edad de la Propiedad' del DataFrame <code id='code'>data.</code></p>
                                </li>
                                <li type="circle" className='font-light'>
                                    <code id='code'>y = data['Precio']</code> : Crea una Serie <code id='code'>Y</code> que contiene la variable dependiente (precio) que se intentará predecir. En este caso, se selecciona la columna 'Precio' del DataFrame <code id='code'>data.</code>
                                </li>
                            </ul>
                            <p className='pl-8 pt-4 font-light'>
                                Todos estos valores se almacenan como una lista en la variable data en cada iteración del bucle.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-medium'>
                            Dividir los datos en conjuntos de entrenamiento y prueba:
                            <p className='pl-8 pt-4 font-light'>
                                <code id='code'>X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)</code> Utiliza la función <code id='code'>train_test_split</code> para dividir los datos en conjuntos de entrenamiento y prueba. Los argumentos son:
                            </p>
                            <ul className='pl-8'>
                                <li type="circle" className='pb-4 pt-4 font-light'>
                                    <p><code id='code'>import pandas as pd</code> : Importa la biblioteca pandas y la apoda como "pd" para que sea más fácil de usar en el código.</p>
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>X y Y</code> : Los datos y las etiquetas.
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>test_size=0.2</code> : Indica que el 20% de los datos se reservarán para el conjunto de prueba, mientras que el 80% se utilizará para el conjunto de entrenamiento.
                                </li>
                                <li type="circle" className='font-light'>
                                    <code id='code'>random_state=0</code> : Establece una semilla aleatoria para que la división sea reproducible. Puedes cambiar este valor si lo deseas.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <p className='pl-8 font-light'>
                        Después de ejecutar este código, tendrás dos conjuntos de datos: <code id='code'>X_train</code> y <code id='code'>y_train</code> para entrenar un modelo de regresión lineal, y <code id='code'>X_test</code> y <code id='code'>y_test</code> y para evaluar el rendimiento del modelo en un conjunto de prueba independiente. Estos conjuntos de datos son esenciales para la construcción y evaluación de un modelo de regresión lineal.

                    </p>
                </div>
            )}
        </div>
    );
}

export default DataToggle;
