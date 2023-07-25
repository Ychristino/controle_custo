const btm_nova_etapa = document.querySelector('#btm_nova_etapa');

btm_nova_etapa.addEventListener('click', ()=>{
    let field_nova_etapa = document.querySelector('#nova_etapa');
    let input_nova_etapa = document.querySelector('#nome_nova_etapa');

    let nova_etapa = document.createElement('li');
    nova_etapa.innerText = input_nova_etapa.value;
    input_nova_etapa.value = "";
    field_nova_etapa.insertAdjacentElement('beforebegin', nova_etapa);
})