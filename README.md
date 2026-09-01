# Entregable 1: Laboratorio de Intenciones Tipadas

## Intención inicial

Este proyecto consiste en una pequeña herramienta creativa llamada "Máquina de tacos con intención". Su objetivo es combinar proteína, salsa, topping y tortilla para generar un taco con un nivel de picante acumulado y una clasificación final según la cantidad total.

La intención principal es demostrar cómo un problema visual y lúdico puede resolverse con lógica estructurada: datos, cálculo, clasificación y flujo no bloqueante. La versión JavaScript funciona como base del software y la versión TypeScript será una migración con tipos explícitos y validación de compilación.

## Tema creativo

"Generador de tacos por intensidad"

La aplicación toma elementos como:

- proteína
- salsa
- topping
- tortilla

y devuelve un taco con:

- descripción del resultado
- nivel total de picante
- estado final (suave, medio, picante o extremo)

## Objetivos de aprendizaje

- Aplicar JavaScript avanzado con módulos, funciones reutilizables y `async/await`.
- Comprender el rol del desarrollador como arquitecto de intención y coordinador del flujo.
- Migrar una solución simple de JavaScript a TypeScript con tipos, interfaces y uniones literales.
- Documentar y entender los errores que detecta TypeScript.

## Criterios de aceptación

1. El programa debe generar tacos con ingredientes reales y diferenciados.
2. El picante debe calcularse acumulando el valor de cada elemento.
3. El estado del taco debe depender del total final y no de una única condición.
4. La lógica debe ejecutarse con JavaScript no bloqueante usando `async/await`.
5. La versión final debe migrarse a TypeScript con tipos y compilación válida.

## Estructura del proyecto

```text
Entregabe1-IsmaelZambrano/
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── js/
│   │   ├── data.js
│   │   ├── generator.js
│   │   └── index.js
│   └── ts/
│       ├── data.ts
│       ├── generator.ts
│       └── index.ts
├── dist/
├── .gitignore
└── .git/
```

## Lógica del proyecto

Los datos se representan como objetos con este formato:

```js
{ nombre: "chipotle", picante: 5 }
```

La lógica principal hace lo siguiente:

1. toma una proteína, una salsa, un topping y una tortilla
2. suma todos los valores de picante
3. determina el estado final
4. devuelve un objeto final con descripción y nivel total
5. simula un proceso asíncrono con `setTimeout` para aplicar `async/await`

## Estados de picante

- suave: 0 a 2
- medio: 3 a 5
- picante: 6 a 8
- extremo: 9 o más

## Requisitos del entregable

- repositorio en GitHub con rama `feature/proyecto-1`
- versión JavaScript funcional
- versión TypeScript migrada con tipos
- uniones literales y funciones tipadas
- `tsconfig.json` con compilación válida
- README con intención, decisiones y comandos de ejecución

## Comandos de ejecución

```bash
# Versión JavaScript
npm start

# Compilar la versión TypeScript
npm run build

# Ejecutar la versión compilada
node dist/index.js
```

## Evidencia de GitHub Flow

La rama activa del proyecto es:

```bash
feature/proyecto-1
```

Se ha trabajado en esta rama y se ha realizado push al repositorio remoto para dejar evidencia del flujo de GitHub.

## Aprendizajes obtenidos

- aprender a separar datos, lógica y salida del programa
- entender cómo el picante se acumula y cómo se interpreta el resultado
- aplicar `async/await` y `Promise` para simular tareas no bloqueantes
- preparar la ruta de migración hacia TypeScript con tipos y validación

## Estado actual

La versión JavaScript ya está funcional y demuestra la lógica principal del proyecto. El siguiente paso es la migración a TypeScript con tipos explícitos, interfaces y una compilación correcta para dejar el proyecto listo para entregar.

