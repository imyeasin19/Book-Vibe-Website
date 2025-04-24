import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const Readlist = () => {
    const data = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedBookId = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => ConvertedBookId.includes(book.bookId))
        setReadList(myReadList);
    }, [])
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort by</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Pages</a></li>
                    <li><a>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(b => <Book key={b.bookId} book={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Readlist;