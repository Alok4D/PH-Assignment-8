import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../Utility/LocalStorage';

const ViewTheListBooks = () => {
  const jobs = useLoaderData();

  // console.log(jobs);
  // const {bookId} = useParams();
  // const user = jobs.find(u => u.id == bookId);
  // const {bookName} = user;
  // console.log(user);

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  console.log(appliedJobs);

  useEffect(() => {
    const storedJobId = getStoredJobApplication();

    if (jobs.length > 0) {

      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobId, jobsApplied);
    }
  }, [jobs]);

    return (
        <>

       
        <h2>All Card Data : {appliedJobs.length}</h2>
        
       
          <div className='book mt-[36px] text-center h-[100px] border rounded-[16px] bg-[#F3F3F3] flex justify-center items-center'>
            <h2 className='text-[#131313] text-[28px]'>Books</h2>
          </div>
        </>
    );
};

export default ViewTheListBooks;