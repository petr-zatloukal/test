import React, {useState} from "react";
import './booksList.scss';
import BookSearch from "../../book-search/BookSearch";
import List from "./List/List";
import {IBook, IBookSearchResponse} from "../../constants/interfaces";


const BookList = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [, setTotalCount] = useState<number>(0);
    const [pageSize] = useState(10);
    const [page] = useState(0);

    const setResults = (result: IBookSearchResponse) => {
        setBooks(result.items);
        setTotalCount(result.totalItems);
    }

    return <div className="booksList">
        <BookSearch setResults={setResults} offset={pageSize * page} pageSize={pageSize}/>
        <List booksList={books}/>
    </div>
}

export default BookList;
