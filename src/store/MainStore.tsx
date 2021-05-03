import React, {createContext, useState} from 'react';
import {IBook} from "../constants/interfaces";

const MainContext = createContext({});
export default MainContext;

export const Provider = ({children}: { children: React.ReactNode;}) => {
    const [wishlistBooks, setWishlistBooks] = useState<IBook[]>([]);

    const addBookToWishlist = (book: IBook) => {
        setWishlistBooks((prevState) => {
            const output = [...prevState];
            if (!prevState.find((bookItem) => bookItem.id === book.id)) {
                output.push(book);
            }
            return output;
        })
    }

    const removeBookFromWishlist = (book: IBook) => {
        setWishlistBooks((prevState) => {
            return prevState.filter((bookItem) => bookItem.id !== book.id);
        });
    }

    return <MainContext.Provider value={{wishlistBooks, addBookToWishlist, removeBookFromWishlist}}>
        {children}
    </MainContext.Provider>
}
