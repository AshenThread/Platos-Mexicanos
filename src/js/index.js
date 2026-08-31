import {
  proteinas,
  salsas,
  toppings,
  tortillas
} from './data.js';

import {
  construirTacoAsync
} from './generator.js';

async function main() {
  const proteina = proteinas[0];
  const salsa = salsas[2];
  const topping = toppings[4];
  const tortilla = tortillas[0];

  console.log("Preparando taco...");
  const taco = await construirTacoAsync({ proteina, salsa, topping, tortilla });

  console.log("Taco generado:");
  console.log(taco);
}

main();