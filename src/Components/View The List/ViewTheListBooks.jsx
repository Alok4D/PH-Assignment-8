import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookDetails from "./Book Details/BookDetails";
import WishlistBooks from './Wishlist Books/WishlistBooks';



const ViewTheListBooks = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  const [data, setData] = useState([]);

  const [wishListData, setWishListData] = useState([]);
  console.log(wishListData);


  useEffect( () => {
    const storData = JSON.parse(localStorage.getItem('readAllReady')) || [];
    setData(storData);
  }, [])

  useEffect( () => {
    const wishData = JSON.parse(localStorage.getItem('WishListAllReady')) || [];
    setWishListData(wishData);
  }, [])

    return (
        <>
 <div className='w-[90%] mx-auto'>
 <div className="h-[6.25rem] bg-slate-300 border rounded-[1rem] mt-[3.125rem] mb-8 flex justify-center items-center">
          <h2 className="text-[#131313] text-[1.75rem] ">Books</h2>
  </div>
     
     <div className='text-center'>
     <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
    </div>
     </div>

  <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
          {
            data.map(item => <BookDetails key={item.id} item={item}></BookDetails>)
          }
    </TabPanel>
   
    <TabPanel>
          {
            wishListData.map(item => <WishlistBooks key={item.id} item={item}></WishlistBooks>)
          }
    </TabPanel>
  </Tabs>
 </div>
    
        </>
    );
};

export default ViewTheListBooks;