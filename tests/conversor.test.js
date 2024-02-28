const conversorTemp = require('../js/index_1');
  describe('Testa a função de conversão de temperatura', () => {
    test('Analisar se a corversão de temperatura em celcius para Fahrenheit está sendo realizada corretamente', () =>{
      const temperaturaC = 30;
      const conversorDeTemperatura = conversorTemp (temperaturaC);
      expect (conversorDeTemperatura).toBe(86);
  });
});
