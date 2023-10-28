import CodeComponent from '../../../components/CodeComponent';

function LinearRegressionCodes() {

    const codeForCSV = `import pandas as pd
import random

# Crear una lista vacía para almacenar los datos
data = []

# Generar 500 filas de datos ficticios
for _ in range(500):
    area = random.randint(100, 300)
    habitaciones = random.randint(1, 5)
    banos = random.randint(1, 4)
    ubicacion = random.choice(['Zona A', 'Zona B', 'Zona C'])
    edad = random.randint(1, 20)    
    precio = area * 1000 + habitaciones * 5000 + banos * 2000 + edad * 3000 + random.randint(-5000, 5000)
    
    data.append([area, habitaciones, banos, ubicacion, edad, precio])

# Crear un DataFrame de pandas con los datos
df = pd.DataFrame(data, columns=['Área', 'Habitaciones', 'Baños', 'Ubicación', 'Edad de la Propiedad', 'Precio'])

# Guardar el DataFrame en un archivo CSV
df.to_csv('datos_inmobiliarios.csv', index=False)`

    const codeForLinearRegresion = `import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Cargar el archivo de datos
data = pd.read_csv('datos_inmobiliarios.csv')

# Definir las variables independientes (características) y la variable dependiente (precio)
X = data[['Área', 'Habitaciones', 'Baños', 'Edad de la Propiedad']]
y = data['Precio']

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# Crear el modelo de regresión lineal
model = LinearRegression()

# Entrenar el modelo con los datos de entrenamiento
model.fit(X_train, y_train)

# Realizar predicciones en el conjunto de prueba
y_pred = model.predict(X_test)

# Calcular el error cuadrático medio (MSE) y el coeficiente de determinación (R-cuadrado)
from sklearn.metrics import mean_squared_error, r2_score

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Error Cuadrático Medio (MSE): {mse}')
print(f'Coeficiente de Determinación (R^2): {r2}')

# Visualizar los resultados
plt.scatter(y_test, y_pred)
plt.xlabel('Precio Real')
plt.ylabel('Precio Predicho')
plt.title('Regresión Lineal: Precio Real vs. Precio Predicho')
plt.show()`

    const codeDataPreparation = `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Cargar el archivo de datos
data = pd.read_csv('datos_inmobiliarios.csv')

# Definir las variables independientes (características) y la variable dependiente (precio)
X = data[['Área', 'Habitaciones', 'Baños', 'Edad de la Propiedad']]
y = data['Precio']

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)`

    const codeLinearRegressionModel = `# Crear el modelo de regresión lineal
model = LinearRegression()

# Entrenar el modelo con los datos de entrenamiento
model.fit(X_train, y_train)`

    const codeEvaluation = `# Realizar predicciones en el conjunto de prueba
y_pred = model.predict(X_test)

# Calcular el error cuadrático medio (MSE) y el coeficiente de determinación (R-cuadrado)
from sklearn.metrics import mean_squared_error, r2_score

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Error Cuadrático Medio (MSE): {mse}')
print(f'Coeficiente de Determinación (R^2): {r2}')`

    const codeVisualitation = `# Visualizar los resultados
plt.scatter(y_test, y_pred)
plt.xlabel('Precio Real')
plt.ylabel('Precio Predicho')
plt.title('Regresión Lineal: Precio Real vs. Precio Predicho')
plt.show()`

    const codeForCSVComponent = CodeComponent(codeForCSV)
    const codeForLinearRegresionComponent = CodeComponent(codeForLinearRegresion)
    const codeDataPreparationComponent = CodeComponent(codeDataPreparation)
    const codeLinearRegressionModelComponent = CodeComponent(codeLinearRegressionModel)
    const codeEvaluationComponent = CodeComponent(codeEvaluation)
    const codeVisualitationComponent = CodeComponent(codeVisualitation)



    return (
        {
            codeForCSVComponent,
            codeForLinearRegresionComponent, 
            codeDataPreparationComponent, 
            codeLinearRegressionModelComponent, 
            codeEvaluationComponent, 
            codeVisualitationComponent
        }
    );
}

export default LinearRegressionCodes;
