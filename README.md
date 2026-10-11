# Trivia en terminal

Juego de preguntas y respuestas para dos jugadores, que se juega en la consola. Un jugador arma las preguntas con sus opciones y el otro las responde. Al final se muestra el puntaje.

## Cómo se juega

1. El jugador 1 indica cuántas preguntas quiere armar.
2. Por cada una escribe la pregunta, las opciones separadas por coma y el número de la opción correcta.
3. El jugador 2 responde eligiendo el número de la opción.
4. Al terminar se muestra el resultado final, por ejemplo `2/3`.

Si se escribe algo que no es un número, el juego vuelve a pedir la respuesta.

## Tecnologías

- TypeScript sobre Node.js
- [readline-sync](https://www.npmjs.com/package/readline-sync) para leer lo que escribe el usuario

## Cómo correrlo

Necesitás tener [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/lunati-luna/trivia-terminal.git
cd trivia-terminal
npm install
npx tsx index.ts
```

Corrélo desde una terminal normal. El panel "Output" de VS Code es de solo lectura y no deja escribir las respuestas.

## Qué practiqué en este proyecto

- Definir tipos con `interface` y tipar funciones, parámetros y valores de retorno.
- Armar y recorrer arrays con `for...of`, `forEach`, `split`, `map` y `push`.
- Leer datos del usuario por consola y validar la entrada.