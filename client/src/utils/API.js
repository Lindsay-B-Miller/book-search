import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        return axios.post("/search", { title: title });
    },
    addBookToDB: (id, bookData) => {
        console.log(bookData)
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}