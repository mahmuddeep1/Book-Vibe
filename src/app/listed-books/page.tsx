"use client"
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import BookCard from '../components/homepage/BookCard';
import { IBook } from '@/types/Book.type';

const ListedBooks = () => {

        const { readBooks, wishlist } = useContext(BooksContext);
        console.log(readBooks, wishlist, "readBooks", "wishlist");
        return (<div className='container mx-auto py-[20px]'>

                <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center'>Listed Books</h2>

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                        <input
                                type="radio"
                                name="my_tabs_3"
                                className="tab"
                                aria-label={`Read Books ${readBooks.length}`} 
                                defaultChecked/>
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                                {readBooks.length > 0 ? readBooks.map((book: IBook) => {
                                        return <BookCard key={book.bookId} book={book} />;
                                }) : (<p className='text-center text-lg font-semibold'>No read books found</p>)}
                        </div>

                        <input
                                type="radio"
                                name="my_tabs_3"
                                className="tab"
                                aria-label={`Wishlist Books ${wishlist.length}`}
                                 />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                                {wishlist.length > 0 ? wishlist.map((book: IBook) => {
                                        return <BookCard key={book.bookId} book={book} />;
                                }) : (<p className='text-center text-lg font-semibold'>No read books found</p>)}
                        </div>

                </div>
        </div>
)};

export default ListedBooks;