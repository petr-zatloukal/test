import React from 'react';
import './styles/App.scss';
import BookList from "./components/BooksList";
import WishlistBooks from "./components/WishlistBooks";
import {Provider} from "./store/MainStore";

function App() {
    return (
        <>
            <header className="header">
                <div className="header--content">
                    <h1>My Good Reads</h1>
                </div>
            </header>
            <main>
                <Provider>
                    <BookList/>
                    <WishlistBooks/>
                </Provider>
            </main>
        </>
    );
}

export default App;
