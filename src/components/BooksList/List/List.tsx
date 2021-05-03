import React, {useContext} from "react";
import {ContextType, IBook} from "../../../constants/interfaces";
import MainContext from "../../../store/MainStore";
import '../booksList.scss';

const List = ({booksList}: { booksList?: IBook[] }) => {
    const {wishlistBooks, addBookToWishlist, removeBookFromWishlist} = useContext(MainContext) as ContextType;

    const columns = [
        {
            id: 'image',
            title: '',
            dataDisplay: ({volumeInfo: {title, imageLinks}}: IBook) => imageLinks?.smallThumbnail &&
              <img alt={title} src={imageLinks.smallThumbnail}/>
        },
        {id: 'title', title: 'Title', width: '15%', dataDisplay: ({volumeInfo: {title}}: IBook) => title},
        {
            id: 'description',
            title: 'Description',
            dataDisplay: ({volumeInfo: {description}}: IBook) => description
        },
        {
            id: 'authors',
            title: 'Authors',
            dataDisplay: ({volumeInfo: {authors}}: IBook) => authors?.join(', ')
        },
        {
            id: 'publisher',
            title: 'Publisher',
            dataDisplay: ({volumeInfo: {publisher}}: IBook) => publisher
        },
        {
            id: 'published',
            title: 'Published',
            dataDisplay: ({volumeInfo: {publishedDate}}: IBook) => publishedDate
        },
        {
            id: 'actions', title: '', dataDisplay: (book: IBook) => {
                return wishlistBooks?.find((wishListBook) => wishListBook.id === book.id) ?
                    <div className="pointer" onClick={() => {
                        removeBookFromWishlist(book);
                    }}>remove</div> : <div className="pointer" onClick={() => {
                        addBookToWishlist(book);
                    }}>add</div>
            }
        },
    ];

    return <>
        <div className={'booksListGrid'}>
            {columns.map(({title, id}) => <div key={id}>{title}</div>)}
            {
                booksList?.map((book) => {
                    return columns.map(({id, dataDisplay}) => <div key={id}>{dataDisplay(book)}</div>)
                })
            }
        </div>
    </>
}

export default List;
