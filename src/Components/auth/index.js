import { API } from "../../config";

// for signup
export const signup = (user) => {
  return fetch(`http://localhost:5000/api/adduser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

// for signin
export const signin = (user) => {
  return fetch(`http://localhost:5000/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

// for authentication
export const authenticate = (data, next) => {
  localStorage.setItem("jwt", JSON.stringify(data));
  next();
};

// for redirecting according to user role/to check if user is signed in or not
export const isAuthenticated = () => {
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

// for signout
export const signout = (next) => {
  localStorage.removeItem("jwt");
  next();
  return fetch(`http://localhost:5000/api/signout`, {
    method: "GET",
  })
    .then((res) => console.log("signout", res))
    .catch((error) => console.log(error));
};

export const forgetPassword = (email) => {
  return fetch(`http://localhost:5000/api/forgetpassword`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

// reset password
export const resetPassword = (token, email, new_password) => {
  const data = {email, new_password}
  return fetch(`http://localhost:5000/api/resetpassword/${token}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
