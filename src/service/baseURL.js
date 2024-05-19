import axios from "axios";
import { API_URL } from "../lib/constant";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
