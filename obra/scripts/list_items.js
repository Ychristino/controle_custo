const table = document.querySelectorAll("table tbody")[0]
const lista_obras = JSON.parse(localStorage.getItem('lista_obras'));

for (obra in lista_obras){
    const new_row = document.createElement('tr');
    let cidade = new_row.insertCell(0);
    let estado = new_row.insertCell(1);
    let bairro = new_row.insertCell(2);
    let logradouro = new_row.insertCell(3);

    let data = lista_obras[obra]
    cidade.innerText =  data.cidade
    estado.innerText =  data.estado
    bairro.innerText =  data.bairro
    logradouro.innerText = data.logradouro 
    
    table.appendChild(new_row);
}
