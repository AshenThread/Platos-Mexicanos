# Entregable 1: Laboratorio de Intenciones Tipadas

## Intención inicial

Este proyecto crea una pequeña herramienta llamada "Máquina de tacos con intención". Su función es combinar proteínas, salsas, toppings y tortillas para generar un taco con un nivel de picante acumulado y una clasificación final según ese valor.

La intención del programa es mostrar cómo una idea creativa puede convertirse en una lógica estructurada: se definen datos, se calculan resultados y se interpreta la salida con reglas claras. La lógica principal usa JavaScript avanzado para representar colecciones, funciones reutilizables y un flujo asíncrono simulado.

## Tema creativo

"Generador de tacos según intensidad y personalidad"

El sistema toma datos como:

- proteína
- salsa
- topping
- tortilla

y devuelve un taco con:

- descripción final
- nivel total de picante
- estado de intensidad: suave, medio, picante o extremo

## Objetivo del proyecto

Diseñar un mini-programa que demuestre cómo un conjunto de ingredientes puede producir una respuesta no bloqueante y comprensible. En la versión JavaScript, la lógica se construye con módulos, funciones y un flujo `async/await` simulado. La siguiente etapa será migrarlo a TypeScript para mejorar la seguridad y documentación del código.

## Criterios de aceptación

1. El programa debe crear combinaciones de tacos con datos reales y reutilizables.
2. El nivel de picante debe acumularse a partir de los valores de cada ingrediente seleccionado.
3. La clasificación del pico de picante debe depender del total final y no de una única condición.
4. La lógica debe ejecutarse con JavaScript avanzado y un flujo asíncrono.
5. El proyecto debe dejar evidencia de trabajo con Git y GitHub en la rama `feature/proyecto-1`.

## Estructura del proyecto

```text
Entregabe1-IsmaelZambrano/
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   └── js/
│       ├── data.js
│       ├── generator.js
│       └── index.js
├── dist/
├── .gitignore
└── .git/
```

## Lógica actual de la versión JavaScript

La base de datos contiene objetos con estos datos:

- `nombre`
- `picante`

La función principal calcula el total acumulado del taco y luego clasifica el resultado según el nivel final:

- suave: 0 a 2
- medio: 3 a 5
- picante: 6 a 8
- extremo: 9 o más

También se usa una función asíncrona con `setTimeout` para simular trabajo no bloqueante y aplicar `async/await` antes de devolver el resultado final.

## Requisitos de la entrega

- Repo GitHub con rama de trabajo `feature/proyecto-1`
- Versión JavaScript funcional
- Uso de módulos ES (`import` / `export`)
- Uso de `async/await` y flujo no bloqueante
- Cálculo acumulativo de picante
- README con intención, estructura y comandos de ejecución
- Preparación para migración a TypeScript

## Comandos de ejecución

```bash
# Ejecutar la versión JavaScript
npm start
```

## Evidencia de GitHub Flow

El repositorio se está trabajando en la rama:

```bash
feature/proyecto-1
```

y se ha hecho push al remoto con evidencia de flujo de trabajo profesional.

## Aprendizajes actuales

- Aprender a modelar un problema con datos simples y reglas claras.
- Entender la diferencia entre datos, cálculo y clasificación del resultado.
- Trabajar con JavaScript avanzado sin bloquear la ejecución del programa.
- Preparar la estructura base para migrar después a TypeScript.

## Estado actual

La versión JavaScript del proyecto ya está construida y ejecuta la lógica central del generador de tacos, con cálculo acumulativo de picante, clasificación por intensidad y flujo asíncrono con `async/await`.

La siguiente etapa será migrar esa lógica a TypeScript con tipos explícitos, interfaces, uniones literales y validación de compilación.

