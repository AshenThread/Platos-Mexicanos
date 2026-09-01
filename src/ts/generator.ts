import type { Ingrediente } from "./data.js";

export type EstadoPicante = "suave" | "medio" | "picante" | "extremo";

export type Taco = {
  proteina: string;
  salsa: string;
  topping: string;
  tortilla: string;
  nivelTotal: number;
  estado: EstadoPicante;
  descripcion: string;
};

export function determinarEstado(nivelPicante: number): EstadoPicante {
  if (nivelPicante <= 2) return "suave";
  if (nivelPicante <= 5) return "medio";
  if (nivelPicante <= 8) return "picante";
  return "extremo";
}

export function ensamblarTaco(
  proteina: Ingrediente,
  salsa: Ingrediente,
  topping: Ingrediente,
  tortilla: Ingrediente
): Taco {
  const nivelTotal = proteina.picante + salsa.picante + topping.picante + tortilla.picante;
  const estado = determinarEstado(nivelTotal);

  return {
    proteina: proteina.nombre,
    salsa: salsa.nombre,
    topping: topping.nombre,
    tortilla: tortilla.nombre,
    nivelTotal,
    estado,
    descripcion: `Taco de ${proteina.nombre} con salsa ${salsa.nombre}, topping ${topping.nombre} y tortilla ${tortilla.nombre}.`
  };
}

export function calcularPicante(taco: Taco): number {
  return taco.nivelTotal;
}

export async function construirTacoAsync({
  proteina,
  salsa,
  topping,
  tortilla
}: {
  proteina: Ingrediente;
  salsa: Ingrediente;
  topping: Ingrediente;
  tortilla: Ingrediente;
}): Promise<Taco> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const taco = ensamblarTaco(proteina, salsa, topping, tortilla);
        resolve(taco);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
}

export function filtrarIngredientesPorPicante(
  ingredientes: Ingrediente[],
  nivelMaximo: number
): Ingrediente[] {
  return ingredientes.filter((ingrediente) => ingrediente.picante <= nivelMaximo);
}
