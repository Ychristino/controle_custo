const estado = document.querySelector('#estado');
const lista_etapas = document.querySelector('#lista_etapas');

// CRIAÇÃO DOS JSON'S PARA OS CAMPOS VALUE : LABEL
const estados_json = 
{
    ac:'Acre',
    ap:'Amapá',
    am:'Amazonas',
    al:'Alagoas',
    ap:'Amapá',
    am:'Amazonas',
    ba:'Bahia',
    ce:'Ceará',
    df:'Distrito Federal',
    es:'Espírito Santo',
    go:'Goiás',
    ma:'Maranhão',
    mt:'Mato Grosso',
    ms:'Mato Grosso do Sul',
    mg:'Minas Gerais',
    pa:'Pará',
    pb:'Paraíba',
    pr:'Paraná',
    pe:'Pernambuco',
    pi:'Piauí',
    rj:'Rio de Janeiro',
    rn:'Rio Grande do Norte',
    rs:'Rio Grande do Sul',
    ro:'Rondônia',
    rr:'Roraima',
    sc:'Santa Catarina',
    sp:'São Paulo',
    se:'Sergipe',
    to:'Tocantins',
};

const etapas_json = {
    fun:'Fundação',
    alv:'Alvenaria',
    est:'Estrutura',
    ele:'Elétrica',
    hid:'Hidráulica',
    cob:'Cobertura',
    aca:'Acabamento',
}

// ADICIONA ELEMENTOS NA INTERFACE
// ADICIONA ESTADOS AO BOTÃO SELECT
for (let key in estados_json){
    let option = document.createElement('option');
    option.value = key;
    option.innerText = estados_json[key];
    estado.appendChild(option);
}
// ADICIONA ETAPAS 'DEFAULT' PARA A OBRA 
for (let key in etapas_json){
    let item = document.createElement('li');
    item.innerText = etapas_json[key];
    item.className = 'etapa';
    lista_etapas.insertAdjacentElement('afterbegin', item);
}
