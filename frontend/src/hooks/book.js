import { useQuery, useMutation, useQueryClient } from "react-query";
import api from "../services/api";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

// Book API methods

const getBooks = async (type) => {
  const { data } = await api.get(`/book?type=${type}`);
  return data;
};

const getBookById = async (id) => {
  const { data } = await api.get(`/book/${id}`);
  return data;
};

const createBook = async ({ newBook, token }) => {
  const { data } = await api.post(`/book`, newBook, {
    params: { token },
  });
  return data;
};

const updateBook = async ({ id, updatedBook, token }) => {
  const { data } = await api.put(`/book/${id}`, updatedBook, {
    params: { token },
  });
  return data;
};

const deleteBook = async ({ id, token }) => {
  await api.delete(`/book/${id}`, {
    params: { token },
  });
};

const addReviewToBook = async ({ id, newReview, token }) => {
  const { data } = await api.post(
    `/book/${id}/review?token=${token}`,
    newReview
  );
  return data;
};

// Book endpoint hooks

export const useGetBooks = (type) => {
  return useQuery(["books", type], () => getBooks(type));
};

export const useGetBookById = (id) => {
  return useQuery(["book", id], () => getBookById(id));
};

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  const { token } = useContext(AppContext);

  return useMutation((newBook) => createBook({ newBook, token }), {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });
};

export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  const { token } = useContext(AppContext);

  return useMutation(
    ({ id, updatedBook }) => updateBook({ id, updatedBook, token }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["book", data.id]);
        queryClient.invalidateQueries("books");
      },
    }
  );
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const { token } = useContext(AppContext);

  return useMutation((id) => deleteBook({ id, token }), {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });
};

export const useAddReviewToBook = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, newReview, token }) => addReviewToBook({ id, newReview, token }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("books"); // Should I invalidate book query to refresh reviews?
      },
    }
  );
};
