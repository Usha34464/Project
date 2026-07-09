const student = JSON.parse(localStorage.getItem("student"));

document.getElementById("username").innerText = student.username;
document.getElementById("name").innerText = student.name;
document.getElementById("age").innerText = student.age;
document.getElementById("dob").innerText = student.dob;
document.getElementById("gender").innerText = student.gender;
document.getElementById("father").innerText = student.father_name;
document.getElementById("education").innerText = student.education;
document.getElementById("college").innerText = student.college;
document.getElementById("contact").innerText = student.contact;
document.getElementById("email").innerText = student.email;
document.getElementById("branch").innerText = student.branch;
document.getElementById("paddress").innerText = student.permanent_address;
document.getElementById("taddress").innerText = student.temporary_address;

function logout() {
    localStorage.removeItem("student");
    window.location.href = "../login/index.html";
}