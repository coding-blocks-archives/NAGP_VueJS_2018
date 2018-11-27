import axios from "axios";

export const api = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

export function setToken(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function clearToken() {
  delete api.defaults.headers.common["Authorization"];
}
