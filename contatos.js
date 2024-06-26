const contatos = [];
let indiceContatoAtual = -1;

document.getElementById('botao-incluir').addEventListener('click', () => {
    limparFormulario();
    alternarBotoesFormulario(true);
    indiceContatoAtual = -1;
});


document.getElementById('botao-editar').addEventListener('click', () => {
    if (indiceContatoAtual === -1) {
        alert('Nenhum contato selecionado');
        return;
    }

    alternarBotoesFormulario(true);
});


document.getElementById('botao-salvar').addEventListener('click', () => {
    const contato = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value,
    };

    if (contato.nome && contato.sobrenome && contato.endereco && contato.telefone) {
        if (indiceContatoAtual === -1) {
            contatos.push(contato);
            alert('Contato adicionado com sucesso');
            navegarContatos(contatos.length - 1);
        } else {
            contatos[indiceContatoAtual] = contato;
            alert('Contato atualizado com sucesso');
            navegarContatos(indiceContatoAtual);
        }
        alternarBotoesFormulario(false);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('botao-cancelar').addEventListener('click', () => {
    if (indiceContatoAtual !== -1) {
        navegarContatos(indiceContatoAtual);
    } else {
        limparFormulario();
    }
    alternarBotoesFormulario(false);
});

document.getElementById('botao-excluir').addEventListener('click', () => {
    if (indiceContatoAtual === -1) {
        alert('Nenhum contato selecionado');
        return;
    }

    contatos.splice(indiceContatoAtual, 1);
    alert('Contato excluído com sucesso');
    limparFormulario();
    alternarBotoesFormulario(false);
    if (contatos.length > 0) {
        navegarContatos(indiceContatoAtual > 0 ? indiceContatoAtual - 1 : 0);
    } else {
        indiceContatoAtual = -1;
    }
});

document.getElementById('primeiro').addEventListener('click', () => {
    if (contatos.length > 0) {
        navegarContatos(0);
    }
});
document.getElementById('anterior').addEventListener('click', () => {
    if (indiceContatoAtual > 0) {
        navegarContatos(indiceContatoAtual - 1);
    }
});
document.getElementById('proximo').addEventListener('click', () => {
    if (indiceContatoAtual < contatos.length - 1) {
        navegarContatos(indiceContatoAtual + 1);
    }
});
document.getElementById('ultimo').addEventListener('click', () => {
    if (contatos.length > 0) {
        navegarContatos(contatos.length - 1);
    }
});

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
}

function alternarBotoesFormulario(editando) {
    document.getElementById('botao-incluir').classList.toggle('desabilitado', editando);
    document.getElementById('botao-editar').classList.toggle('desabilitado', editando || indiceContatoAtual === -1);
    document.getElementById('botao-salvar').classList.toggle('desabilitado', !editando);
    document.getElementById('botao-cancelar').classList.toggle('desabilitado', !editando);
    document.getElementById('botao-excluir').classList.toggle('desabilitado', editando || indiceContatoAtual === -1);
    document.getElementById('primeiro').classList.toggle('desabilitado', contatos.length === 0);
    document.getElementById('anterior').classList.toggle('desabilitado', contatos.length === 0 || indiceContatoAtual <= 0);
    document.getElementById('proximo').classList.toggle('desabilitado', contatos.length === 0 || indiceContatoAtual >= contatos.length - 1);
    document.getElementById('ultimo').classList.toggle('desabilitado', contatos.length === 0);
    document.getElementById('nome').disabled = !editando;
    document.getElementById('sobrenome').disabled = !editando;
    document.getElementById('endereco').disabled = !editando;
    document.getElementById('telefone').disabled = !editando;
}

function navegarContatos(indice) {
    if (indice >= 0 && indice < contatos.length) {
        indiceContatoAtual = indice;
        const contato = contatos[indice];
        document.getElementById('nome').value = contato.nome;
        document.getElementById('sobrenome').value = contato.sobrenome;
        document.getElementById('endereco').value = contato.endereco;
        document.getElementById('telefone').value = contato.telefone;
        alternarBotoesFormulario(false);
    }
}

alternarBotoesFormulario(false);
