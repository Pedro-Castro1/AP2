const token = localStorage.getItem("accessToken");

async function atualizarEndereco() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); 

    if (!id) {
        alert("ID não encontrado na URL");
        return;
    }

    if (!token) {
        console.log("Token não encontrado. Faça login.");
        return;
    }

    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;


    if (!title) {
        alert("O campo Título não pode estar vazio.");
        return;
    }

    if (!cep.match(/^\d{5}-\d{3}$/)) {
        alert("O CEP deve estar no formato XXXXX-XXX.");
        return;
    }

    if (!address) {
        alert("O campo Logradouro não pode estar vazio.");
        return;
    }

    if (!number || isNaN(number)) {
        alert("O Número deve ser um valor numérico válido.");
        return;
    }

    const API = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
        method: "POST",  
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            title: title,
            cep: cep,
            address: address,
            number: number,
            complement: complement
        })
    });

    const resposta = await API.json();

    if (API.ok) {
        alert("Cadastro atualizado com sucesso!");
        window.location.href = "../html/usuarios.html";
    } else {
        console.error(resposta);
        alert("Erro ao atualizar o endereço.");
    }
}
