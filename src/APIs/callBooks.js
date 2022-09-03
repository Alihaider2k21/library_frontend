import http from "../services/httpService";

export const books = async () => {
  let res = http.get("http://localhost:5000/books");
  return res;
};

export const getByID = (id) => {
  return http.get(`http://localhost:5000/books/${id}`);
};
export const postBooks = (book) => {
  if (book.id) {
    const body = { ...book };
    delete body.id;
    return http.put(`http://localhost:5000/books/${book.id}`, body);
  } else {
    return http.post("http://localhost:5000/books", book);
  }
};

export const deleteBooks = (id) => {
  return http.delete(`http://localhost:5000/books/${id}`);
};
