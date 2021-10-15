const pessoa = {
  nome: 'Daniel',
  idade: '32'
};

for(let key in pessoa) {
  console.log(key, pessoa['idade'])
}

const cores = ['Vermelho', 'Azul', 'Verde']

for (let indice in cores) {
  console.log(indice, cores[indice])
}