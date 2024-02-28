const compararSenha = require('../js/index_3');
  describe('Testa a função que compara senhas', () => {
    test('Analisar se a comparação das senhas está sendo realizada corretamente (senhas iguais)', () =>{
      const senha1 = 20;
      const senha2 = 20;
      const comparaSenhas = compararSenha (senha1, senha2);
      expect (comparaSenhas).toBe('senhas iguais');
  });
});

