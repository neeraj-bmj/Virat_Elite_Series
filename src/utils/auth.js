// this is for register user and save data to local storage
export const registerUser = (email, password) => {
  localStorage.setItem("user", JSON.stringify({ email, password }));
};

// this is for login user and get data from local storage
export const loginUser = (email, password) => {
  console.log("User Logged in!");
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.email === email && user?.password === password;
};

// this is for logout user and remove data from local storage
export const logoutUser = () => {
  localStorage.removeItem("user");
};

// this is for authenticated data from local storage
export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};