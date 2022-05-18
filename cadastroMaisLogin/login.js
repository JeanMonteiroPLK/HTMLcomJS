/*Criar, utilizando HTML e JS, um sistema de cadastro de login com dados salvos no localStorage. O sistema deve possuir duas telas (CADASTRO e LOGIN) com labels e inputs para digitar os dados (nome de usuário e senha), além de um botão para confirmar o cadastro e um para confirmar o login.

Ao configurar um cadastro, mostrar mensagem e pular automaticamente para a tela de login, onde deve ser feito o login ou não (mostrar mensagem de sucesso ou falha) validando com os dados salvos no localStorage.*/

var nomeUsuario = document.getElementById("nomeUsuario")
var senha = document.getElementById("senha")

var listaUsuariosLS = localStorage.getItem("listaUsuariosKey")
var listaSenhasLS = localStorage.getItem("listaSenhasKey")

var posicaoUsuario

function verificaLogin() {
    if (!inputDeNomeUsuarioExiste(JSON.parse(listaUsuariosLS), nomeUsuario.value)) {
        alert(`Usuário [${nomeUsuario.value}] não existe`)
    } else {
        if (!inputDeSenhaExiste(JSON.parse(listaSenhasLS), senha.value, posicaoUsuario)) {
            alert(`Senha inválida para [${nomeUsuario.value}]`)
        } else {
            alert(`Login realizado com sucesso!\nBem-vindo(a) ${nomeUsuario.value}!`)
        }
    }

}

function inputDeNomeUsuarioExiste(lista, input) {
    var retorno = false
    var elementoAtual
    for (i = 0; i < lista.length; i++) {
        elementoAtual = lista[i]
        if (input === elementoAtual) {
            posicaoUsuario = i
            retorno = true
            break
        }
    }
    return retorno
}

function inputDeSenhaExiste(lista, input, posicao) {
    var retorno = false
    if (input == lista[posicao]) {
        retorno = true
    }
    return retorno
}