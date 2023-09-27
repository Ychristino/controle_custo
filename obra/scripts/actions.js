const btm_nova_etapa = document.querySelector('#btm_nova_etapa');

btm_nova_etapa.addEventListener('click', ()=>{
    let field_nova_etapa = document.querySelector('#nova_etapa');
    let input_nova_etapa = document.querySelector('#nome_nova_etapa');

    let nova_etapa = document.createElement('li');
    nova_etapa.innerText = input_nova_etapa.value;
    nova_etapa.className = 'etapa';
    input_nova_etapa.value = "";
    field_nova_etapa.insertAdjacentElement('beforebegin', nova_etapa);
})

function validate_form(){
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    
    if (!logradouro)
        throw new Error('O Campo Logradouro deve ser informado!');

    if (!numero)
    throw new Error('O Campo de Número do logradouro deve ser informado!');

    if (!bairro)
    throw new Error('O Campo Bairro deve ser informado!');

    if (!cidade)
    throw new Error('O Campo de Cidade deve ser informado!');

    if (!estado)
    throw new Error('Um Estado deve ser selecionado!');

    // REGRAS DE VALIDAÇÃO
}
function send_form(){
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    // const lista_etapas = document.getElementById('lista_etapas').getElementsByTagName('li')

    let new_data = {
        'logradouro':logradouro,
        'numero':numero,
        'complemento':complemento,
        'bairro':bairro,
        'cidade':cidade,
        'estado':estado,
        // 'lista_etapas':lista_etapas
    }

    let stored_data = []
    if (localStorage.getItem("lista_obras") !== null){
         stored_data = JSON.parse(localStorage.getItem("lista_obras"));
    }
    stored_data.push(new_data)
    localStorage.setItem('lista_obras', JSON.stringify(stored_data))
}