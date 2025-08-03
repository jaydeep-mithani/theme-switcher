import { GET_ALL_PRODUCTS } from "../routes";

export const getAllProducts = async () => {
  const res = await fetch(GET_ALL_PRODUCTS);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  return await res.json();
};
