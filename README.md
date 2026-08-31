# Entregable 1: Laboratorio de Intenciones Tipadas

## Intención inicial

Este proyecto busca crear una pequeña herramienta interactiva llamada "Máquina de tacos de intención". La idea es que el programa reciba una serie de ingredientes, salsas, proteínas y niveles de intensidad, y genere combinaciones creativas de tacos con una valoración de picante, equilibrio y personalidad del platillo.

La intención central es transformar datos simples en decisiones, combinaciones y diagnósticos no bloqueantes, usando JavaScript avanzado y después una versión tipada en TypeScript. El programa debe ayudar a entender cómo un desarrollador actúa como arquitecto de intención: define reglas, valida entradas y decide cómo se interpreta la información.

## Tema creativo

"Generador de tacos con intención y nivel de picante"

El usuario podrá seleccionar o probar combinaciones de:

- proteínas
- salsas
- ingredientes base
- intensidad deseada
- estilo de taco

La aplicación devolverá una mezcla sugerida con un resultado narrativo, un nivel de picante y una explicación breve de por qué esa combinación funciona.

## Objetivos de aprendizaje

- Comprender el rol del desarrollador como arquitecto de intención.
- Aplicar patrones no bloqueantes con JavaScript avanzado.
- Usar promesas, async/await y funciones reutilizables.
- Migrar un proyecto simple de JavaScript a TypeScript.
- Definir tipos, interfaces y uniones literales para modelar el dominio.

## Criterios de aceptación

1. El programa debe poder generar combinaciones de tacos a partir de una lista de ingredientes y un nivel de intensidad.
2. La lógica debe implementarse primero en JavaScript avanzado usando conceptos como funciones de orden superior, destructuring, async/await o manejo de errores.
3. La versión final debe estar migrada a TypeScript con tipos explícitos y una compilación válida con `tsconfig.json`.

## Estructura inicial del proyecto

```text
project/
├── README.md
├── src/
│   ├── js/
│   │   ├── data.js
│   │   ├── generator.js
│   │   └── index.js
│   └── ts/
│       ├── data.ts
│       ├── generator.ts
│       └── index.ts
├── tsconfig.json
└── package.json
```

## Requisitos del entregable

- Repositorio en GitHub con rama de trabajo visible.
- Versión inicial en JavaScript.
- Versión migrada en TypeScript.
- Uso de al menos 3 conceptos de JavaScript avanzado.
- Configuración mínima de TypeScript.
- Al menos 3 tipos personalizados entre `type` e `interface`.
- Al menos 1 unión literal para estados o categorías.
- README con intención, criterios de aceptación y comandos de ejecución.

## Flujo de trabajo esperado

1. Crear el repositorio en GitHub.
2. Conectar el repositorio local con la rama `feature/proyecto-1`.
3. Desarrollar la versión JavaScript.
4. Migrar a TypeScript.
5. Validar la compilación y documentar los errores detectados por TypeScript.
6. Hacer push y dejar evidencia del flujo de GitHub.

## Comandos de inicio

Se usarán más adelante para ejecutar la aplicación:

```bash
# JavaScript
node src/js/index.js

# TypeScript
npx tsc --project tsconfig.json
node dist/index.js
```

## Aprendizajes esperados

- Reconocer que un programa no solo ejecuta lógica, también expresa intención.
- Aprender a diferenciar entre datos, validación y salida del programa.
- Entender cómo TypeScript mejora la mantenibilidad y la claridad del código.
- Trabajar con Git/GitHub de forma profesional siguiendo la estrategia de ramas.

## Estado actual

Este README se está definiendo como base del proyecto con la intención creativa, la arquitectura inicial y los criterios de aceptación del entregable.

