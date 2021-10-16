//Velocidade maxima de ate 70
//a cada 5km acima do limite voce ganha 1 ponto na carteira
//Math.Floor()
// caso os pontos maior que 12 -> 'Carteira suspensa'

verificarVelocidade(130);



function verificarVelocidade(velocidade) {

  const limiteVelocidade = 70;
  const limitePontuacao = 12;
  const kmPorPonto = 5;

  if (velocidade <= limiteVelocidade) {
    console.log('OK');
  } else {
    const pontos = ((velocidade -  limiteVelocidade)/kmPorPonto)
    if(pontos >=limitePontuacao) {
    console.log('Carteira Suspensa')
    } else {
      console.log('Pontos: ', Math.floor(pontos))
    }
  }
}
