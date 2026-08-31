export function ensamblarTaco(proteina, salsa, topping, tortilla) {
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

export function calcularPicante(taco) {
  const valores = [
    taco.proteina.picante,
    taco.salsa.picante,
    taco.topping.picante,
    taco.tortilla.picante
  ];

  return valores.reduce((total, valor) => total + valor, 0);
}

export function determinarEstado(nivelPicante) {
    if (nivelPicante <= 2) return "suave";
    if (nivelPicante <= 5) return "medio";
    if (nivelPicante <= 8) return "picante";
    return "muy picante";
}

export async function construirTacoAsync({ proteina, salsa, topping, tortilla }) {
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