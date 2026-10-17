"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/Book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}: {book: IBook}) => {
    const {readBooks, setReadBooks} = useContext(BooksContext)

    
    
const handleReadBook = () => {
    console.log("read book btn triggered", book);

    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`)
};


    return( <button className="btn h-auto min-h-0 rounded-xl border-0
     bg-gradient-to-r from-violet-600 to-indigo-600 px-32 py-4 text-base font-semibold
      normal-case text-white shadow-lg shadow-violet-200/60 transition-all duration-300
       hover:-translate-y-0.5 hover:from-violet-700 hover:to-indigo-700 hover:shadow-violet-300/70"
        onClick={() => handleReadBook()}>
                  Read
                  <span aria-hidden="true">→</span>
                </button>  
    );  
};

export default ReadButton;