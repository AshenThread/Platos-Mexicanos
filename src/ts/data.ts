export type Ingrediente = {
  nombre: string;
  picante: number;
};

export const proteinas: Ingrediente[] = [
  { nombre: "pollo", picante: 1 },
  { nombre: "res", picante: 0 },
  { nombre: "cerdo", picante: 1 },
  { nombre: "camaron", picante: 2 },
  { nombre: "huevo", picante: 0 }
];

export const salsas: Ingrediente[] = [
  { nombre: "verde", picante: 2 },
  { nombre: "roja", picante: 3 },
  { nombre: "chipotle", picante: 5 },
  { nombre: "mole", picante: 2 },
  { nombre: "pico de gallo", picante: 1 }
];

export const toppings: Ingrediente[] = [
  { nombre: "cebolla", picante: 0 },
  { nombre: "cilantro", picante: 0 },
  { nombre: "queso", picante: 0 },
  { nombre: "aguacate", picante: 0 },
  { nombre: "jalapeño", picante: 2 },
  { nombre: "pico de gallo", picante: 1 }
];

export const tortillas: Ingrediente[] = [
  { nombre: "maiz", picante: 0 },
  { nombre: "harina", picante: 0 },
  { nombre: "nopal", picante: 0 },
  { nombre: "trigo", picante: 0 }
];
