const conversorBit = require('../js/index_2');
  describe('Testa a função de conversão de Bitcoin', () => {
    test('Analisar se a corversão da moeda em Bitcoin para real está sendo realizada corretamente', () =>{
      const bitcoin = 20;
      const conversorDeBitcoin = conversorBit (bitcoin);
      expect (conversorDeBitcoin).toBe(6000000);
  });
});
