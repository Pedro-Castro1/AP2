const url = "https://go-wash-api.onrender.com/api/user";

async function cadastro() {
    const cep = document.getElementById('cep').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const pais = document.getElementById('pais').value;

    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "cep": cep,
                "estado": estado,
                "user_type_id": 1,
                "cidade": cidade,
                "pais": pais,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            let data = await response.json();
            console.log('Cadastro bem-sucedido:', data);
            localStorage.setItem('usuario', JSON.stringify({
                cep: cep,
                estado: estado,
                pais: pais,
                cidade: cidade
            }));
    
            window.location.href = "../html/cadastro3.html"
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar cadastrar. Por favor, tente novamente.');
    }
}

document.getElementById('address-form').addEventListener('submit', function (e) {
    e.preventDefault();
    cadastro();
    window.location.href = "../html/cadastro3.html"
});
