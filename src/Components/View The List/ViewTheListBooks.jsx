import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookDetails from "./Book Details/BookDetails";


const ViewTheListBooks = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  const [data, setData] = useState([]);

  const [tabIndex,setTabIndex] = useState(0)
  useEffect( () => {
    const storData = JSON.parse(localStorage.getItem('readAllReady')) || [];
    setData(storData);
  }, [])
  



    return (
        <>
 <div className='w-[90%] mx-auto'>
 <div className="h-[100px] bg-slate-300 border rounded-[16px] mt-[50px] mb-8 flex justify-center items-center">
          <h2 className="text-[#131313] text-[28px] ">Books</h2>
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
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
 </div>
    
        </>
    );
};

export default ViewTheListBooks;