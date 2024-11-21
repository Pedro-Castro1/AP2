const token = localStorage.getItem("accessToken");

async function Logout() {

 
      
    const api = await fetch(`https://go-wash-api.onrender.com/api/auth/logout/`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
                }
            });

            if (api.ok) {
                localStorage.removeItem("accessToken");    
                localStorage.removeItem("user");              
                alert("Logout Realizado!");
                window.location.href = "../../index.html"
            } else {
                alert("Erro no Logout");
            }
        }
    
