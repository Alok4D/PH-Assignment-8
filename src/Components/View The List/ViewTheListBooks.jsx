import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const ViewTheListBooks = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  const [data, setData] = useState([]);
  console.log(data);

  useEffect( () => {
    const storData = JSON.parse(localStorage.getItem('readAllReady')) || [];
    setData(storData);
  }, [])
   

  const {bookId, bookName} = data;
 

    return (
        <>
       <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>
      <h2>Name {bookName} </h2>
    <TabPanel>
    {
      data?.map((item) => (<h1>{item.bookName}</h1>))
    }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </>
    );
};

export default ViewTheListBooks;