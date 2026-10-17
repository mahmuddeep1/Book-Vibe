"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/Book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({book}: {book: IBook}) => {
    const {wishlist, setWishlist} = useContext(BooksContext)

    
    
const handleAddToWishlist = () => {
    console.log("read book btn triggered", book);

    setWishlist([...wishlist, book]);
    toast.success(`You have added "${book.bookName}" to your wishlish`)
};


    return( <button className="btn h-auto min-h-0 rounded-xl border border-violet-200 bg-violet-50 px-6 py-4 text-base font-semibold normal-case text-violet-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-100" onClick={() => handleAddToWishlist()}>
              ♡
           </button>   
    );  
};

export default WishlistButton;