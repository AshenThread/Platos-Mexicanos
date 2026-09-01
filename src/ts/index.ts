import { proteinas, salsas, toppings, tortillas } from "./data.js";
import {
  construirTacoAsync,
  calcularPicante,
  determinarEstado,
  ensamblarTaco,
  filtrarIngredientesPorPicante
} from "./generator.js";

async function main(): Promise<void> {
  const proteina = proteinas[0];
  const salsa = salsas[2];
  const topping = toppings[4];
  const tortilla = tortillas[0];

  console.log("Preparando taco...");
  const taco = await construirTacoAsync({ proteina, salsa, topping, tortilla });

  console.log("Taco generado:");
  console.log(taco);

  const ingredientesSuaves = filtrarIngredientesPorPicante(salsas, 2);
  console.log("Salsas suaves o moderadas:", ingredientesSuaves.map((item) => item.nombre));

  const estado = determinarEstado(taco.nivelTotal);
  console.log("Estado del taco:", estado);

  const tacoRearmado = ensamblarTaco(proteina, salsa, topping, tortilla);
  console.log("Taco rearmado:", tacoRearmado);

  const picante = calcularPicante(tacoRearmado);
  console.log("Nivel de picante total:", picante);
}

main();
