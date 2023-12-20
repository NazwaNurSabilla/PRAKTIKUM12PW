function cekLogin() {
    // Mendapatkan nilai dari input username dan password
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Menentukan username dan password yang valid
    var usernameValid = "ahmad2017";
    var passwordValid = "integrity";

    // Pengecekan login
    if (usernameInput === usernameValid && passwordInput === passwordValid) {
        alert("Login Sukses");
        // Redirect ke halaman baru jika login sukses
        window.location.href = "halaman-baru.html";
    } else {
        alert("Login Gagal");
    }
}
