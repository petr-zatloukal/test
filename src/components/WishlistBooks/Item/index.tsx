import React, {useContext} from "react";
import {ContextType, IBook} from "../../../constants/interfaces";
import './wishlistItem.scss';
import MainContext from "../../../store/MainStore";

const Item = ({book}: { book: IBook }) => {
    const {removeBookFromWishlist } = useContext(MainContext) as ContextType;
    return <div className={'wishlistItem'}>
        <div>
            {book.volumeInfo.title}
        </div>
        <div onClick={() => {removeBookFromWishlist(book)}}>
            remove
        </div>
    </div>
}

export default Item;
