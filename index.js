document.getElementById("login-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-pass").value;
  if (email == "rashedul@gmail.com" && password == "rashedul") {
    window.location.href = "./banking.html";
    document.getElementById("warnings").innerText = "success";
  } else {
    document.getElementById("warning").innerText = "invalid input";
  }
});
