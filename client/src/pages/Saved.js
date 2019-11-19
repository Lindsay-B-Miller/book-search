import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data },
                )
                console.log(res);
                console.log(this.state.books)
            })
            .catch(err => console.log(err))
    }

    deleteBook = (id) => {
        console.log(id)
        API.deleteBook(id)
            .then(res =>
                this.loadBooks())
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Jumbotron>
                    <div>
                        <h1>My Saved Books</h1>
                        <h4>React Google Book Search</h4>
                    </div>
                </Jumbotron>

                <Container>
                    <div>


                        <Row>
                            <Col size="xs-12">
                                {!this.state.books.length ? (
                                    <Container>
                                        <h2>No Books to Display.</h2>
                                        <h4>Visit the home page to search for and save your favorite titles</h4>
                                    </Container>
                                ) : (
                                        <BookList>
                                            {this.state.books.map(book => {
                                                return (
                                                    <BookListItem
                                                        title={book.title}
                                                        authors={book.authors}
                                                        description={book.description}
                                                        image={book.image}
                                                        link={book.link}
                                                        id={book._id}
                                                        deleteBook={this.deleteBook}
                                                    />
                                                );
                                            })}
                                        </BookList>
                                    )}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Saved;