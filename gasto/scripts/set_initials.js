const classificacao = document.querySelector('#classificacao');

// CRIAÇÃO DOS JSON'S PARA OS CAMPOS VALUE : LABEL
const classificacao_json = 
{
    pr:'Projeto',
    mo:'Mão de Obra',
    te:'Terceiros',
    cl:'Custas Legais',
    ma:'Material',
};

// ADICIONA ELEMENTOS NA INTERFACE
// ADICIONA CLASSIFICAÇÃO AO BOTÃO SELECT
for (let key in classificacao_json){
    let option = document.createElement('option');
    option.value = key;
    option.innerText = classificacao_json[key];
    classificacao.appendChild(option);
}
