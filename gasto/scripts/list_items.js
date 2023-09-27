const table = document.querySelectorAll("table tbody")[0]
const lista_gastos = JSON.parse(localStorage.getItem('lista_gastos'));

for (gasto in lista_gastos){
    const new_row = document.createElement('tr');
    let nome = new_row.insertCell(0);
    let valor = new_row.insertCell(1);
    let classificacao = new_row.insertCell(2);

    let data = lista_gastos[gasto]
    nome.innerText = data.nome;
    valor.innerText = data.valor;
    classificacao.innerText = data.classificacao;
    

    table.appendChild(new_row);
}
