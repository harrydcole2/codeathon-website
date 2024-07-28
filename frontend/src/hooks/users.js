import { useQuery, useMutation, useQueryClient } from "react-query";
import { ObjectToQueryString } from "../services/uri";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

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

  return useMutation(addUser, {
    onSuccess: () => {
      //TODO: is there anything worth invalidating?
      queryClient.invalidateQueries(["users"]);
      return;
    },
  });
};

// export const useLoginUser = (credentials) => {
//   return useQuery(["user", { ...credentials.username }], () =>
//     validateUser(credentials)
//   );
// };

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation((credentials) => validateUser(credentials), {
    onSuccess: () => {
      // TODO: Handle successful login (e.g., store token, update user context)

      navigate("/");
    },
  });
};
