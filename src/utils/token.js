// set token,
export function setToken(token) {
  sessionStorage.setItem("loginToken", token);
}
// get token
export function getToken() {
  const LoginToken = sessionStorage.getItem("loginToken");
  return LoginToken;
}
// clear token
export function clearToken() {
  sessionStorage.clear();
}
