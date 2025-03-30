# IIC3585 - T1: JS Funcional
> ## Grupo 7
> - Camila Gervasoni
> - Juan Palma
> - Giacomo Pasquali

Desarrollar funciones que permitan convertir un archivo CSV en otro de acuerdo a lo especificado.

Funciones a desarrollar:
- InsertRow **_JP_**
- InsertColumn **_JP_**
- RowDelete (eliminar fila) **_G_**
- ColumnDelete (eliminar columna) **_G_**
- Swap entre columnas (m, n) **_C_**
- ToHtmlTable **_C_**
- Rows to Columns (transponer matriz) **_-_**
- Columns to Rows (transponer matriz) **_-_**

Aproach es funcional como paradigma de programación:

- _Iterators_ y _Generators_
- Uso de la librería _[Lodash](https://lodash.com/docs/4.17.15)_
- _Currying_ y _partial evaluation_
- Composición y _Pipes_
- _Chaining_

# Documentación de Funciones

## Funciones de Manipulación de CSV

### `insertRow(file, n, row)`
Inserta una nueva fila en el archivo CSV en la posición especificada.

**Parámetros:**
- `file`: Ruta del archivo CSV
- `n`: Posición donde insertar la fila (0-based)
- `row`: Array con los valores de la nueva fila

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

insertRow("data.csv", 1, ["Giacomo", "28", "Santiago"]);

Resultado:
// nombre,edad,ciudad
// Giacomo,28,Santiago
// Juan,25,Concepción
// Camila,30,La Serena
```

### `insertColumn(file, n, column)`
Inserta una nueva columna en el archivo CSV en la posición especificada.

**Parámetros:**
- `file`: Ruta del archivo CSV
- `n`: Posición donde insertar la columna (0-based)
- `column`: Array con los valores de la nueva columna

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

insertColumn("data.csv", 1, ["ocupación", "Ingeniero", "Diseñador"]);

Resultado:
// nombre,ocupación,edad,ciudad
// Juan,Ingeniero,25,Concepción
// Camila,Diseñador,30,La Serena
```

### `deleteRow(file, n)`
Elimina una fila del archivo CSV en la posición especificada.

**Parámetros:**
- `file`: Ruta del archivo CSV
- `n`: Posición de la fila a eliminar (0-based)

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

deleteRow("data.csv", 1);

Resultado:
// nombre,edad,ciudad
// Camila,30,La Serena
```

### `deleteColumn(file, n)`
Elimina una columna del archivo CSV en la posición especificada.

**Parámetros:**
- `file`: Ruta del archivo CSV
- `n`: Posición de la columna a eliminar (0-based)

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

deleteColumn("data.csv", 1);

Resultado:
// nombre,ciudad
// Juan,Concepción
// Camila,La Serena
```

### `swapColumns(file, n, m)`
Intercambia la posición de dos columnas en el archivo CSV.

**Parámetros:**
- `file`: Ruta del archivo CSV
- `n`: Posición de la primera columna (0-based)
- `m`: Posición de la segunda columna (0-based)

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

swapColumns("data.csv", 0, 2);
Resultado:
// ciudad,edad,nombre
// Concepción,25,Juan
// La Serena,30,Camila
```

### `transformToHTMLTable(file)`
Convierte el archivo CSV en una tabla HTML.

**Parámetros:**
- `file`: Ruta del archivo CSV

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

transformToHTMLTable("data.csv");
Resultado (data.html):
// <table>
//   <tr>
//     <td>nombre</td>
//     <td>edad</td>
//     <td>ciudad</td>
//   </tr>
//   <tr>
//     <td>Juan</td>
//     <td>25</td>
//     <td>Concepción</td>
//   </tr>
//   <tr>
//     <td>Camila</td>
//     <td>30</td>
//     <td>La Serena</td>
//   </tr>
// </table>
```

### `columnsToRows(file)`
Convierte las columnas del CSV en filas.

**Parámetros:**
- `file`: Ruta del archivo CSV

**Ejemplo:**
```javascript
// CSV original:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena

columnsToRows("data.csv");

Resultado:
// nombre,Juan,Camila
// edad,25,30
// ciudad,Concepción,La Serena
```

### `rowsToColumns(file)`
Convierte las filas del CSV en columnas.

**Parámetros:**
- `file`: Ruta del archivo CSV

**Ejemplo:**
```javascript
// CSV original:
// nombre,Juan,Camila
// edad,25,30
// ciudad,Concepción,La Serena

rowsToColumns("data.csv");

Resultado:
// nombre,edad,ciudad
// Juan,25,Concepción
// Camila,30,La Serena
```