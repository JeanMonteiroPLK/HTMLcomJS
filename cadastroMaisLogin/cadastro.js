/*Criar, utilizando HTML e JS, um sistema de cadastro de login com dados salvos no localStorage. O sistema deve possuir duas telas (CADASTRO e LOGIN) com labels e inputs para digitar os dados (nome de usuário e senha), além de um botão para confirmar o cadastro e um para confirmar o login.

Ao configurar um cadastro, mostrar mensagem e pular automaticamente para a tela de login, onde deve ser feito o login ou não (mostrar mensagem de sucesso ou falha) validando com os dados salvos no localStorage.*/

var nomeUsuario = document.getElementById("nomeUsuario")
var senha = document.getElementById("senha")

var listaUsuarios = []
var listaSenhas = []

var listaUsuariosValid = []
var listaSenhasValid = []

var flag = 0

function cadastrar() {
    verificaSeExisteListaDeUsuariosNoLocalStorage()
    verificaSeExisteListaDeSenhasNoLocalStorage()

    // TENTATIVA DE TRATAR EXCEÇÃO DE INPUT VAZIO
    /*while(flag != 1){
        if(!ehCampoUsuarioVazio(nomeUsuario.value)){
            flag++
        } else {
            alert('Campo [NOME DE USUÁRIO] obrigatório')
        }
    }
    flag--
    while(flag != 1){
        if(!ehCampoSenhaVazio(senha.value)){
            flag++
        } else {
            alert('Campo [SENHA] obrigatório')
        }
    }*/

    listaUsuarios.push(nomeUsuario.value)
    listaSenhas.push(senha.value)
    localStorage.setItem("listaUsuariosKey", JSON.stringify(listaUsuarios))
    localStorage.setItem("listaSenhasKey", JSON.stringify(listaSenhas))
    alert('Cadastro realizado com sucesso!')
}

function verificaSeExisteListaDeUsuariosNoLocalStorage() {
    listaUsuariosValid = JSON.parse(localStorage.getItem("listaUsuariosKey"))
    if (listaUsuariosValid == null) {
        listaUsuarios = []
    } else {
        listaUsuarios = listaUsuariosValid
    }
}

function verificaSeExisteListaDeSenhasNoLocalStorage() {
    listaSenhasValid = JSON.parse(localStorage.getItem("listaSenhasKey"))
    if (listaSenhasValid == null) {
        listaSenhas = []
    } else {
        listaSenhas = listaSenhasValid
    }
}
/*
function ehCampoUsuarioVazio(input) {
    if (input == '' || input == null || input == undefined) {
        return true
    }
    return false
}

function ehCampoSenhaVazio(input) {
    if (input == '' || input == null || input == undefined) {
        return true
    }
    return false
}*/