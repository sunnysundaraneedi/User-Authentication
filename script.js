// Js for Register.html

// const registeredPeeps = document.querySelector("#reg-peeps");
let users = new Array();
users = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const storeUserDate = () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  console.log(email.value, password.value);
  if (email.value == "" || password.value == "") {
    alert("the form cannot be empty");
    return;
  }

  if (
    users.some((user) => {
      console.log(user);
      return user.email == email.value;
    })
  ) {
    alert("Email is already in use");
  } else {
    users.push({
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("User added successfully");

    email.value = "";
    password.value = "";
  }
};

// console.log(
//   [localStorage].map((data) => {
//     return data.email;
//   })
// );

// console.log([localStorage].map(data => data);

// for (let i = 0; i < localStorage.length; i++) {
//   const email = localStorage.key(i);
//   console.log(localStorage.key(i));
//   let pEmail = document.createElement("p");
//   pEmail.innerHTML = email;
//   registeredPeeps.appendChild(pEmail);
// }

// JS for index.html

const checkForUserInDB = () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  if (email.value == "" || password.value == "") {
    alert("the form cannot be empty");
    return;
  }
  console.log(email.value, password.value);
  console.log(users);

  console.log(
    users.some(
      (user) => user.email == email.value && user.password == password.value
    )
  );
  console.log(users);

  if (
    users.some(
      (user) => user.email == email.value && user.password == password.value
    )
  ) {
    alert("Login Successful");
    let currentUser = users.filter(
      (user) => user.email == email.value && user.password == password.value
    )[0];
    sessionStorage.setItem("email", currentUser.email);
    sessionStorage.setItem("password", currentUser.password);
    window.location.href = "home.html";
  } else {
    alert("Access Denied");
  }
};

// JS for home.html

const logOut = () => {
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("password");
  window.location.href = "index.html";
};
