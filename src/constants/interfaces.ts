export type IBook = {
    id: string;
    volumeInfo: {
        imageLinks?: {
            smallThumbnail?: string
        };
        title: string;
        authors: string[];
        publisher: string;
        description: string;
        publishedDate?: string;
    }
}

export type IBookSearchResponse = {
    items: IBook[];
    totalItems: number;
}

export type ContextType = {
    wishlistBooks: IBook[]
    addBookToWishlist: (book: IBook) => void
    removeBookFromWishlist: (book: IBook) => void
}
