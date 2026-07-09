document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        father_name: document.getElementById("fname").value,
        education: document.getElementById("education").value,
        college: document.getElementById("college").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        branch: document.querySelector('input[name="branch"]:checked')?.value,
        permanent_address: document.getElementById("paddress").value,
        temporary_address: document.getElementById("taddress").value
    };

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        window.location.href = "../login/index.html";
    }
});