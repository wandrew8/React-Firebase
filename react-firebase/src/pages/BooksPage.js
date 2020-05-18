import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Progress from '../components/Progress';
import GridComponent from '../components/Grid';
import CardComponent from '../components/Card';
import firebase from 'firebase';

const db = firebase.firestore();

export default class BooksPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        console.log("1")
        this.unsubscribe = db.collection('favoriteBooks')
        .onSnapshot(snapshot => {
            console.log("Hello")
            this.setState({ books: snapshot.docs, isLoading: false })
        })
    }

    componentWillUnmount() {
        if (this.unsubscribe){
            this.unsubscribe();
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <GridComponent>
                    {this.state.isLoading ? <Progress /> : this.state.books.map(book => {
                        return(
                            <CardComponent book={book.data()} />
                        )
                    })}
                </GridComponent>
            </div>
        )
    }
}
