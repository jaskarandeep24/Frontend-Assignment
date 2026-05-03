export const fetchCars = async () => {
  const res = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos");
  const data = await res.json();
  return data.modelos;
};