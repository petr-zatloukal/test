import React, {useEffect, useState} from "react";
import {getBooksByType} from "./book-search.service";


const BookSearch = ({
                        setResults,
                        offset,
                        pageSize
                    }: { setResults: (books: any) => void; offset: number; pageSize: number; }) => {
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    useEffect(() => {
        async function requestBooks() {
            if (bookTypeToSearch) {
                const allBooks = await getBooksByType(bookTypeToSearch, offset, pageSize);
                setResults(allBooks);
            } else {
                setResults([]);
            }
        }

        const debounceTo = setTimeout(() => {
            (async function getAllBooks() {
                await requestBooks();
            })()
        }, 500);

        return () => clearTimeout(debounceTo);
    }, [bookTypeToSearch, offset, pageSize, setResults]);
    return (<>
            <div className="book--container">
                <div className="search-params">
                    <div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <input
                                className="full-width"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={bookTypeToSearch}
                                placeholder="Search for books to add to your reading list and press Enter"
                                onChange={e => updateBookTypeToSearch(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookSearch;
