import { useQuery, useMutation, useQueryClient } from "react-query";

import { ObjectToQueryString } from "../utils/queryString";
import api from "../services/api";

// User API methods (not exposed out of this class)

const getUsers = async () => {
  const { data } = await api.get(`/user/list`);
  return data;
};

const addUser = async (newUser) => {
  const { data } = await api.post(`/user/register`, newUser);
  return data;
};

const validateUser = async (credentials) => {
  const { data } = await api.get(`/user?${ObjectToQueryString(credentials)}`);
  return data;
};

// User endpoint hooks

export const useGetUsers = () => {
  //TODO: delete endpoint ?
  return useQuery(["users"], () => getUsers());
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: () => {
      //TODO: is there anything worth invalidating?
      queryClient.invalidateQueries(["users"]);
      return;
    },
  });
};

export const useLoginUser = (credentials) => {
  return useQuery(["user", { ...credentials.username }], () => validateUser());
};
