import React, { useState } from 'react';

function HipotesisToggle() {
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
                        Este código de Python utiliza la biblioteca pandas y random para generar un conjunto de datos ficticios y luego lo guarda en un archivo CSV. Aquí está la explicación detallada de cómo funciona:
                    </p>

                    <ul className='pl-6'>
                        <li type="circle" className='pb-8 font-medium'>
                            Importación de bibliotecas:
                            <ul className='pl-8'>
                                <li type="circle" className='pb-4 pt-4 font-light'>
                                    <p><code id='code'>import pandas as pd</code> : Importa la biblioteca pandas y la apoda como "pd" para que sea más fácil de usar en el código.</p>
                                </li>
                                <li type="circle" className='font-light'>
                                    <code id='code'>import random</code> : Importa la biblioteca random, que se utilizará para generar valores aleatorios.
                                </li>
                            </ul>
                        </li>
                        <li type="circle" className='pb-8 font-medium'>
                            Creación de una lista vacía para almacenar los datos:
                            <p className='pl-8 pt-4 font-light'>
                                Se crea una lista vacía llamada <code id='code'>data</code> que se utilizará para almacenar los datos generados antes de convertirlos en un DataFrame de pandas.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-medium'>
                            Generación de 500 filas de datos ficticios:
                            <p className='pl-8 pt-4 font-light'>
                                Se utiliza un bucle <code id='code'>for</code> para generar 500 filas de datos ficticios. En cada iteración del bucle, se generan valores aleatorios para las siguientes características de una propiedad inmobiliaria:
                            </p>
                            <ul className='pl-8 pt-4'>
                                <li type="circle" className='pb-4 pt-4 font-light'>
                                    <p><code id='code'>area</code> : Un valor entero aleatorio entre 100 y 300.</p>
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>habitaciones</code> : Un valor entero aleatorio entre 1 y 5.
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>banos</code> : Un valor entero aleatorio entre 1 y 4.
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>ubicacion</code> :  Se elige aleatoriamente una ubicación de las opciones ['Zona A', 'Zona B', 'Zona C'].
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>edad</code> : Un valor entero aleatorio entre 1 y 50.
                                </li>
                                <li type="circle" className='pb-4 font-light'>
                                    <code id='code'>precio</code> : Se calcula un precio ficticio basado en las características generadas y un valor aleatorio entre -5000 y 5000 se suma para crear cierta variabilidad.
                                </li>
                            </ul>
                            <p className='pl-8 pt-4 font-light'>
                                Todos estos valores se almacenan como una lista en la variable data en cada iteración del bucle.
                            </p>
                        </li>
                        <li type="circle" className='pb-8 font-medium'>
                            Creación de un DataFrame de pandas con los datos:
                            <p className='pl-8 pt-4 font-light'>
                                Después de generar los datos, se utiliza la biblioteca <code id='code'>pandas</code> para crear un DataFrame a partir de la lista <code id='code'>data</code>. Cada fila de la lista se convierte en una fila en el DataFrame, y las columnas se nombran de acuerdo con las características de las propiedades inmobiliarias.
                            </p>
                        </li>
                        <li type="circle" className='font-medium'>
                            Guardado del DataFrame en un archivo CSV:
                            <p className='pl-8 pt-4 font-light'>
                                Se crea una lista vacía llamada <code id='code'>data</code> que se utilizará para almacenar los datos generados antes de convertirlos en un DataFrame de pandas.

                                Finalmente, el DataFrame se guarda en un archivo CSV llamado  <code id='code'>'datos_inmobiliarios.csv'</code> utilizando el método <code id='code'>to_csv()</code>. El parámetro <code id='code'>index=False</code> se utiliza para evitar que se guarde el índice de las filas del DataFrame en el archivo CSV.


                            </p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HipotesisToggle;
