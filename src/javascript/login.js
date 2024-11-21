const url = 'https://go-wash-api.onrender.com/api/login';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEyMDc4Mjg0LCJuYmYiOjE3MTIwNzgyODQsImp0aSI6ImRPajVkTng4WEgxdVJ5TVkiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3M";

async function loginUser() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value;

    try {
        let api = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                "user_type_id": 1
            }),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        });

        let resposta = await api.json();

        if (api.ok) { // Check if the response status is OK
            alert("Sucesso");
            if (resposta.access_token) {
                localStorage.setItem("accessToken", resposta.access_token);
            }

            if (resposta.user) {
                localStorage.setItem("user", JSON.stringify(resposta.user));
            }
            window.location.href = "../../home.html";
        } else {
            // Improved error handling
            const errorMessage = resposta.data && resposta.data.errors ? resposta.data.errors : 'An unknown error occurred.';
            alert(errorMessage);
        }
    } catch (error) {
        // Catch any network or other errors
        console.error('Error during login:', error);
        alert('An error occurred while logging in. Please try again later.');
    }
}
