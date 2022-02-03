import { useQuery } from "react-query";
const API_ENDPOINT = "/users";

export const useUsersQuery = () => {
  return useQuery(API_ENDPOINT, async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
  });
};
