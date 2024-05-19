import { api } from "./baseURL";

export const getData = async (arg) => {
  try {
    const res = await api.get(arg);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
