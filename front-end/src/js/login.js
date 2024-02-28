document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que o formulário seja enviado automaticamente

        const userInput = document.getElementById('user-input').value;
        const passwordInput = document.getElementById('password-input').value;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: userInput, password: passwordInput })
            });

            const data = await response.json();

            if (response.ok) {
                // Login bem-sucedido
                alert(data.message); // Exemplo de mensagem de sucesso
                // Redirecionar para a próxima página, etc.
            } else {
                // Login falhou
                alert(data.message); // Exemplo de mensagem de erro
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    });
});
