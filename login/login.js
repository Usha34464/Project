document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("name").value;
    const password = document.getElementById("pwd").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const result = await response.json();
    console.log(response.status);
    console.log(result);

    if (response.ok) {
        alert("Login Successful");

        localStorage.setItem("student", JSON.stringify(result.student));
       console.log("redirected");
        window.location.href = "../dashboard/index.html";
    } else {
        alert(result.message);
    }
});