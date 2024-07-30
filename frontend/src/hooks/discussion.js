import { useQuery, useMutation, useQueryClient } from "react-query";
import api from "../services/api";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

// Discussion API methods

const getDiscussions = async () => {
  const { data } = await api.get("/discussion");
  return data;
};

const getDiscussionById = async (id) => {
  const { data } = await api.get(`/discussion/${id}`);
  return data;
};

const createDiscussion = async ({ newDiscussion, token }) => {
  console.log(newDiscussion);
  const { data } = await api.post("/discussion", newDiscussion, {
    params: { token },
  });
  return data;
};

const updateDiscussion = async ({ id, updatedDiscussion, token }) => {
  const { data } = await api.put(`/discussion/${id}`, updatedDiscussion, {
    params: { token },
  });
  return data;
};

const deleteDiscussion = async ({ id, token }) => {
  await api.delete(`/discussion/${id}`, {
    params: { token },
  });
};

const addCommentToDiscussion = async ({ id, newComment, token }) => {
  const { data } = await api.post(
    `/discussion/${id}/comment?token=${token}`,
    newComment
  );
  return data;
};

// Discussion endpoint hooks

export const useGetDiscussions = () => {
  return useQuery(["discussions"], getDiscussions);
};

export const useGetDiscussionById = (id) => {
  return useQuery(["discussion", id], () => getDiscussionById(id));
};

export const useCreateDiscussion = () => {
  const queryClient = useQueryClient();
  const { token, setToken, setRole } = useContext(AppContext);

  return useMutation(
    (newDiscussion) => createDiscussion({ newDiscussion, token }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("discussions");
      },
      onError: () => {
        setToken("");
        setRole("");
      },
    }
  );
};

export const useUpdateDiscussion = () => {
  const queryClient = useQueryClient();
  const { token, setToken, setRole } = useContext(AppContext);

  return useMutation(
    ({ id, updatedDiscussion }) =>
      updateDiscussion({ id, updatedDiscussion, token }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["discussion", data.id]);
        queryClient.invalidateQueries("discussions");
      },
      onError: () => {
        setToken("");
        setRole("");
      },
    }
  );
};

export const useDeleteDiscussion = () => {
  const queryClient = useQueryClient();
  const { token, setRole, setToken } = useContext(AppContext);

  return useMutation((id) => deleteDiscussion({ id, token }), {
    onSuccess: () => {
      queryClient.invalidateQueries("discussions");
    },
    onError: () => {
      setToken("");
      setRole("");
    },
  });
};

export const useAddCommentToDiscussion = () => {
  const queryClient = useQueryClient();
  const { setRole, setToken } = useContext(AppContext);

  return useMutation(
    ({ id, newComment, token }) =>
      addCommentToDiscussion({ id, newComment, token }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("discussions");
      },
      onError: () => {
        setToken("");
        setRole("");
      },
    }
  );
};
