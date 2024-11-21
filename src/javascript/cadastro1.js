const url = "https://go-wash-api.onrender.com/api/user";

async function cadastroUsuario() {
    const nome = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const lastname = document.getElementById('lastname').value;
    const senha = document.getElementById('senha').value;
    const termos = document.getElementById('termos').value;

    if (!termos) {
        alert('Você precisa aceitar os termos e condições para se cadastrar.');
        return;
    }

    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "name": nome,
                "email": email,
                "user_type_id": 1,
                "password": senha,
                "cpf_cnpj": cpf,
                "terms": termos ? 1 : 0,
                "lastname": lastname,

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        if (response.ok) {
            let resposta = await response.json();
            alert(resposta.data)
            return
        } else {
            let respostaErro = await api.json();
            alert(respostaErro.data.errors.cpf_cnpj[0])
            alert(respostaErro.data.errors.email[0])
        }


    } catch (error) {
    }
    

}

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  cadastroUsuario();
  
});





