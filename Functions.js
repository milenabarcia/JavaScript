// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõem uma estrutura
// e o conteúdo de um documento Web

// Essencial para manipular e interagir com elementos de uma página
// Document.querySelector()

// Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado'; // Modifica o texto do elemento

// Uso principal: Buscar e modificar elemntos HTML


// Document.createElement()
// Cria novos elemntos dinamicamente

// Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);

// Uso principal: Adicionar novos elementos ao DOM


// addEventListener()
// Funções que lidam com interações dos usuários
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  alert('Botão Clicado!');
}
);
// Uso principal: Criar interatividade, como cliques ou movimento do mouse

// setTimeout()
// Controlam ações que ocorrem em intervalos ou após um tempo
// Executa uma função após um período de tempo (unidade de medida > Milisegundos)

setTimeout(() => {
  alert('Executado após 2 segundos!');
},2000);


// alert > ele executa o toString do seu objeto e apresenta em tela
// console.log > ele registra a informação no console do navegador ficando restrita ao conhecimento do desenvolvedor
// Uso principal: Atrasar execuções ou criar temporizadores

// Aula JavaScript > DOM e Functions > Github

document.getElementById()
/*Obtém um elemento pelo seu ID.*/
const elemento = document.getElementById('meuElemento');
//Uso principal: Buscar um elemento específico de forma direta quando se conhece o ID.

addEventListener()
//Adiciona um ouvinte para eventos (como cliques).

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
alert('Botão clicado!');
});
//Uso principal: Criar interatividade, como cliques ou movimento do mouse.

removeEventListener()
//Remove um ouvinte de evento previamente adicionado.

function mensagem() { console.log('Evento
disparado');
}
botao.addEventListener('click', mensagem);
botao.removeEventListener('click', mensagem);
//Uso principal: Remover eventos quando não são mais necessários.

setTimeout()
//Executa uma função após um período de tempo.

setTimeout(() => {
console.log('Executado após 2 segundos!');
}, 2000);
//Uso principal: Atrasar execuções ou criar temporizadores.

setInterval()
//Executa uma função repetidamente em intervalos regulares.

const intervalo = setInterval(() => { console.log('Executando a cada
1 segundo');
}, 1000);
// Para parar o intervalo
setTimeout(() => clearInterval(intervalo), 5000);
//Uso principal: Atualizações periódicas, como animações ou relógios.

map()
//Cria um novo array aplicando uma função a cada elemento do array original.

const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]
//Uso principal: Transformar arrays.
filter()
//Filtra os elementos que atendem a uma condição.

const numeros = [10, 20, 30];
const maioresQue15 = numeros.filter(num => num > 15);
console.log(maioresQue15); // [20, 30]
//Uso principal: Criar subarrays baseados em critérios.

reduce()
//Reduz o array a um único valor.

const numeros = [1, 2, 3];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0); console.log(soma); // 6
//Uso principal: Acumular valores, como somas ou concatenações.        

forEach()
//Itera por cada elemento de um array.

const frutas = ['maçã', 'banana', 'laranja']; frutas.forEach(fruta =>
console.log(fruta));
//Uso principal: Executar ações em cada item de uma lista.

JSON.parse()  
JSON.stringify()
JSON.parse() : //Converte uma string JSON em um objeto.
JSON.stringify() : //Converte um objeto em uma string JSON.

const json = '{"nome":"Ana","idade":30}'; const obj =
JSON.parse(json); console.log(obj.nome); // "Ana"
const novoJson = JSON.stringify(obj); console.log(novoJson); //
'{"nome":"Ana","idade":30}'
//Uso principal: Manipular dados enviados/recebidos por APIs.

fetch()
//Realiza requisições HTTP.

fetch('https://api.exemplo.com/dados')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));
//Uso principal: Obter ou enviar dados para servidores.

if/else
//Executa código com base em condições.
Exemplo:
const idade = 18; if (idade
>= 18) {
console.log('Maior de idade');
} else {
console.log('Menor de idade');
}
//Uso principal: Tomar decisões no código.


switch

//Seleciona uma entre várias opções com base em um valor.

const cor = 'vermelho'; switch
(cor) {
case 'vermelho':
console.log('Pare!'); break;
case 'amarelo':
console.log('Atenção!'); break;
case 'verde': console.log('Siga!');
break;
default:
console.log('Cor inválida');
}
//Uso principal: Substituir vários if/else aninhados.

 Manipulação de Strings
toUpperCase()
//Converte uma string para letras maiúsculas.
const texto = 'olá'; console.log(texto.toUpperCase()); // 'OLÁ'
//Uso principal: Padronizar entrada de usuário.

toLowerCase()
//Converte uma string para letras minúsculas.

const texto = 'OLÁ'; console.log(texto.toLowerCase()); // 'olá'
//Uso principal: Padronizar comparacões de strings.

includes()
//Verifica se uma string contém outra.
const frase = 'JavaScript é incrível';
console.log(frase.includes('incrível')); // true
//Uso principal: Procurar substrings dentro de uma string.

//Estruturas de Dados Modernas
Map
//Uma coleção de pares chave-valor.
const mapa = new Map();
mapa.set('nome', 'João');
console.log(mapa.get('nome')); // 'João'
//Uso principal: Armazenar dados com chaves associadas.

Set
//Armazena valores únicos, sem repetições.
const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set { 1, 2, 3 }
//Uso principal: Garantir que não haja valores duplicados.

//Outras Funções Utilitárias

Math.random()
//Gera um número aleatório entre 0 e 1.

const aleatorio = Math.random();
console.log(aleatorio);
//Uso principal: Geração de números aleatórios.

Math.floor()
//Arredonda um número para baixo.
Exemplo:
const numero = 4.7; console.log(Math.floor(numero)); // 4
//Uso principal: Arredondar valores para inteiros.

//RA em hexadecimal: 3AEBB   nome: MILENA MAZZEI BARCIA 
