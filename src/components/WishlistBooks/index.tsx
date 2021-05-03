import React, {useContext} from "react";
import './wishlistBooks.scss';
import MainContext from "../../store/MainStore";
import {ContextType} from "../../constants/interfaces";
import Header from "./Header";
import Item from "./Item";

const WishlistBooks = () => {
    const {wishlistBooks } = useContext(MainContext) as ContextType;
    return <div className="wishlistBooks">
        <Header booksCount={wishlistBooks.length}/>
        {
            wishlistBooks.map((book) => {
                return <Item key={book.id} book={book} />
            })
        }
    </div>
}

export default WishlistBooks;
