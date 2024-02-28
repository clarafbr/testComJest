function conversorDeTemperatura(temperaturaC) {
  const conversorFahrenheit = (temperaturaC * 1.8) + 32;
  return conversorFahrenheit;
}

module.exports = conversorDeTemperatura;
