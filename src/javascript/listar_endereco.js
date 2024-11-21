const tabela = document.getElementById("minhaTabela").getElementsByTagName("tbody")[0];
const token = localStorage.getItem("accessToken");

async function listarEndereco() {
    const api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    tabela.innerHTML = '';
    const resposta = await api.json();
    resposta.data.forEach((endereco, index) => {
        let linha = document.createElement("tr");
        let colunaId = document.createElement("td");
        colunaId.textContent = endereco.id;

        let colunaTitulo = document.createElement("td");
        colunaTitulo.textContent = endereco.title || 'Sem título';

        let colunaCep = document.createElement("td");
        colunaCep.textContent = endereco.cep;

        let colunaEndereco = document.createElement("td");
        colunaEndereco.textContent = endereco.address || "Sem Endereço";

        let colunaNumero = document.createElement("td");
        colunaNumero.textContent = endereco.number || "Sem numero";

        let colunaComplemento = document.createElement("td");
        colunaComplemento.textContent = endereco.complement || "Sem complemento";

        let colunaAcoes = document.createElement("td");

        let cadastrar = document.createElement("input");
        cadastrar.type = "button";
        cadastrar.value = "Cadastrar";
        cadastrar.onclick = () => teste();

        let atualizar = document.createElement("input");
        atualizar.type = "button";
        atualizar.value = "Atualizar";
        atualizar.onclick = () => atualizarEndereco(endereco.id);

        let deletar = document.createElement("input");
        deletar.type = "button";
        deletar.value = "Deletar";
        deletar.onclick = () => deletarEndereco(endereco.id);


        linha.appendChild(colunaId);
        linha.appendChild(colunaTitulo);
        linha.appendChild(colunaCep);
        linha.appendChild(colunaEndereco);
        linha.appendChild(colunaNumero);
        linha.appendChild(colunaComplemento);
        linha.appendChild(colunaAcoes);

        colunaAcoes.appendChild(atualizar);
        colunaAcoes.appendChild(deletar);
        tabela.appendChild(linha);
    });
}

async function atualizarEndereco(id) {
    window.location.href = `../html/atualizar.html?id=${id}`;
}


async function obterEndereco(id) {
    const api = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (api.ok) {
        const resposta = await api.json();
        return resposta.data;
    } else {
        alert("Erro ao obter os dados do endereço.");
        return {};
    }
}

listarEndereco();

async function deletarEndereco(id) {
    const confirmarDelecao = confirm("Você tem certeza que deseja excluir este endereço?");

    if (confirmarDelecao) {
      
            const api = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (api.ok) {
                alert("Endereço deletado com sucesso!");
                listarEndereco(); 
            } else {
                alert("Erro ao deletar o endereço.");
            }
        }
    
    }  

