const form = document.getElementById("form-contato")//cria uma variável com id do formulário
const imgTelefone = "<img src='metrophone_metr_11263.png' alt='telefine-aplicativo'/>" // cria uma variável para a imagem de aprovação
const contato = []
const telefone = []

let linhas = "" //adicionar uma nova linha // tem q ser colocado aqui no evento global para que não seja apagado

form.addEventListener("submit", function(e){// cria o evento do submit
    e.preventDefault() //tira o evendo de atualiza a pagina
    
    adicionaLinha()// chama a função   adicionaLinha
    atuaLizaTabela() // chama a função   atuaLizaTabela
    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value} `) // Chama na tela o texto com os valores escritos pelo usuário
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById("mome-contato") //cria uma variável para buscar o nome da atividade
    const inputTelefone = document.getElementById("num-telefone") //cria uma variável para buscar a nota da atividade

    if (telefone.includes(inputTelefone.value)){
        alert(`O telefone ${inputTelefone.value} já foi cadastrado.`) //Cria a regra de não deixar inserir a mesma atividade
    } else {
        contato.push(inputNomeContato.value) // sempre q for adicionado será chamdo esse conteudo nos arrays
        telefone.push(parseFloat(inputTelefone.value))

        let linha = "<tr>" // adicionando a atividade, nota e aprovação no corpo da tabela. como uma linha
        linha += `<td>${inputNomeContato.value}</td>` //o += é uma concatenação o | linha = linha + "conteudo" // Primeira coluna
        linha += `<td>${inputTelefone.value}</td>` // segunda coluna
        linha += `<td>${imgTelefone}</td>`
        linha += '</tr>'

        linhas += linha //adicionar uma nova linha
    }

    inputNomeContato.value = ""
    inputTelefone.value = ""
}

function atuaLizaTabela() {
    const corpoTabela = document.querySelector("tbody") // cria uma variável para criar o conteúde de cima dentro do corpo da tabela no arquivo HTML com o .innerHTML
    corpoTabela.innerHTML = linhas
}
