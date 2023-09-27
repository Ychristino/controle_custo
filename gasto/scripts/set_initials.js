const classificacao = document.querySelector('#classificacao');
const select_obra = document.querySelector('#obra');

// CRIAÇÃO DOS JSON'S PARA OS CAMPOS VALUE : LABEL
const classificacao_json = 
{
    'Projeto':'Projeto',
    'Mão de Obra':'Mão de Obra',
    'Terceiros':'Terceiros',
    'Custas Legais':'Custas Legais',
    'Material':'Material'
};

const lista_obras = JSON.parse(localStorage.getItem('lista_obras'));

// ADICIONA ELEMENTOS NA INTERFACE
// ADICIONA CLASSIFICAÇÃO AO BOTÃO SELECT
for (let key in classificacao_json){
    let option = document.createElement('option');
    option.value = key;
    option.innerText = classificacao_json[key];
    classificacao.appendChild(option);
}

for (let obra in lista_obras){
    let data = lista_obras[obra];
    let option = document.createElement('option');
    option.value = data.logradouro;
    option.innerText = data.logradouro;
    select_obra.appendChild(option);
}