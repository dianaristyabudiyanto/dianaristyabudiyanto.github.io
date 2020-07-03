function login() {
  let elem = document.getElementById("check");
  elem.parentElement.removeChild(elem);

  let p = document.createElement("p");
  p.innerHTML = ""

  let element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  let form = document.createElement("form");
  element.appendChild(form);

  let label = document.createElement("label");
  label.innerHTML = "Username"
  form.appendChild(label);

  let input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form-login";
  input_username.placeholder = "your name...";
  form.appendChild(input_username);

  let label2 = document.createElement("label");
  label2.innerHTML = "Password";
  form.appendChild(label2);

  let input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form-login";
  input_password.placeholder = "password...";
  form.appendChild(input_password);

  let tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.value = "Login";
  tombol.className = "tombol-login";
  form.appendChild(tombol)
}




