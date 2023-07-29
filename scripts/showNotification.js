cria_lista_notificacao()

function cria_lista_notificacao(){
    const body = document.getElementsByTagName('body')[0];
    const not_space = document.createElement('div');
    const lista_notificacao  = document.createElement('ul');

    lista_notificacao.setAttribute('id', 'lista_notificacao');
    not_space.className = 'lista_notificacao';

    body.insertAdjacentElement('beforeend', not_space);
    not_space.insertAdjacentElement('afterbegin', lista_notificacao);
}

function cria_notificacao(titulo, mensagem){
    const lista_notificacao = document.getElementById('lista_notificacao');
    
    const item_notificacao = document.createElement('li');
    const not_titulo       = document.createElement('h1');
    const not_mensagem     = document.createElement('p');

    not_titulo.className       = 'titulo_notificacao';
    not_mensagem.className     = 'mensagem_notificacao';
    item_notificacao.className = 'notificacao';

    not_titulo.innerText   = titulo;
    not_mensagem.innerText = mensagem;

    item_notificacao.insertAdjacentElement('afterbegin', not_titulo);
    item_notificacao.insertAdjacentElement('beforeend', not_mensagem);
    lista_notificacao.insertAdjacentElement('afterbegin', item_notificacao);

    setTimeout(remove_notificacao, 5000, item_notificacao)

}

function remove_notificacao(item_notificacao){
    item_notificacao.remove()
}

