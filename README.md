# Javascript test

## Descripción del problema
Tienes que hacer una función que reciba una palabra y una cadena de texto. La función deberá regresar el número de veces que se puede formar la palabra enviada con los caracteres de la cadena de texto.

### Ejemplos

```
Entrada: 
  palabra='hello' 
  cadena='heelleellle'
  la salida esperada es 0, ya que con los caracteres no se puede formar la palabra 'hello'
```

```
Entrada: 
  palabra='hello' 
  cadena='heelloo'
  la salida esperada es 1, ya que con los caracteres se puede formar la palabra 'hello' una vez y nos sobra una 'e' y una 'o'
```

```
Entrada: 
  palabra='hello' 
  cadena='hheelllloo'
  la salida esperada es 2, ya que con los caracteres se puede formar la palabra 'hello' dos veces y no nos sobra ninguna letra
```

## Pruebas

El proyecto tiene casos de pruebas con valores esperados en `src/index.test.js`, para correr los tests solo es necesario correr el comando `npm test`.
