function validate_form(){
    const classificacao = document.getElementById('classificacao').value
    const obra = document.getElementById('obra').value
    const nome = document.getElementById('nome').value
    const descricao = document.getElementById('descricao').value
    const valor = document.getElementById('valor').value
    // REGRAS DE VALIDAÇÃO

    if (!classificacao)
    throw new Error('Uma classificação deve ser selecionado!');

    // if (!obra)
    // throw new Error('Uma obra deve ser selecionada!');

    if (!dados_compra)
    throw new Error('O Campo Dados de Compra deve ser informado!');

    if (!nome)
    throw new Error('O Campo Nome deve ser informado!');

    if (!descricao)
    throw new Error('O Campo de Descrição deve ser informado!');

    if (!valor)
    throw new Error('O Campo de Valor deve ser informado!');
}
function send_form(){
    const classificacao = document.getElementById('classificacao').value
    const obra = document.getElementById('obra').value
    const nome = document.getElementById('nome').value
    const descricao = document.getElementById('descricao').value
    const valor = document.getElementById('valor').value

    let new_data = {
        'classificacao':classificacao,
        'obra':obra,
        'nome':nome,
        'descricao':descricao,
        'valor':valor
    }

    let stored_data = []
    if (localStorage.getItem("lista_gastos") !== null){
         stored_data = JSON.parse(localStorage.getItem("lista_gastos"));
    }
    stored_data.push(new_data)
    localStorage.setItem('lista_gastos', JSON.stringify(stored_data))
}