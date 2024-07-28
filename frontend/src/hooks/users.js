import { useQuery, useMutation, useQueryClient } from "react-query";
import { ObjectToQueryString } from "../services/uri";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

// User API methods (not exposed out of this class)

const getUsers = async (token) => {
  const { data } = await api.get(`/user/list?token=${token}`);
  return data;
};

const addUser = async (newUser) => {
  const { data } = await api.post(`/user/register`, newUser);
  return data;
};

const validateUser = async (credentials) => {
  const { data } = await api.get(
    `/user/login?${ObjectToQueryString(credentials)}`
  );
  return data;
};

// User endpoint hooks

export const useGetUsers = () => {
  // TODO: get token from context
  return useQuery(["users"], (token) => getUsers(token));
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { setToken, setRole } = useContext(AppContext);

  return useMutation(addUser, {
    onSuccess: (data) => {
      console.log("Successful registration", data);

      queryClient.invalidateQueries(["users"]);

      setToken(data.token);
      setRole(data.roleName);
      navigate("/");
    },
  });
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { setToken, setRole } = useContext(AppContext);

  return useMutation((credentials) => validateUser(credentials), {
    onSuccess: (data) => {
      console.log("Successful login", data);

      setToken(data.token);
      setRole(data.roleName);
      navigate("/");
    },
  });
};
