document.getElementById('botao-entrar').addEventListener('click', () => {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === 'admin') {
        window.location.href = 'contatos.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});
