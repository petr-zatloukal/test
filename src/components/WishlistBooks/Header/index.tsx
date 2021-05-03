import React from "react";
import './wishlistHeader.scss';

const Header = ({booksCount}: { booksCount: number }) => {
    return <div className="wishlistHeader">
        My Reading Wishlist ({booksCount})
    </div>
}

export default Header;
