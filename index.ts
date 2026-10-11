import readlineSync from 'readline-sync';

interface Pregunta {
  texto: string;
  opciones: string[];
  respuesta: number;
}

function crearPreguntas(cantidad: number): Pregunta[] {
  const preguntas: Pregunta[] = [];

  for (let i = 0; i < cantidad; i++) {
    console.log(`\n--- Pregunta ${i + 1} ---`);
    const texto = readlineSync.question('Escribi la pregunta: ');
    const opcionesTexto = readlineSync.question('Opciones separadas por coma: ');
    const opciones = opcionesTexto.split(',').map(op => op.trim());
    const respuesta = readlineSync.questionInt('Numero de la opcion correcta: ') - 1;

    preguntas.push({ texto, opciones, respuesta });
  }

  return preguntas;
}

const cantidadPreguntas = readlineSync.questionInt('¿Cuantas preguntas quiere armar el jugador 1?: ');
const preguntas = crearPreguntas(cantidadPreguntas);

console.log('\n¡Turno del jugador 2!\n');

let puntaje = 0;

for (const p of preguntas) {
    console.log(p.texto);
    p.opciones.forEach((opcion, i) => {
        console.log(`  ${i + 1}. ${opcion}`);   
    });

const respuestaUsuario = readlineSync.questionInt('Tu respuesta (numero): ') - 1;

if (respuestaUsuario === p.respuesta) {
    console.log('Muy bien!\n');
    puntaje++;
} else {
    console.log(`Que burrazo. Era: ${p.opciones[p.respuesta]}\n`);
}
}

console.log(`Resultado final: ${puntaje}/${preguntas.length}`);

