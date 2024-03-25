import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-24'>
            <h2 className='mb-4'>Oops!!!!!!</h2>
          <button className='btn btn-secondary text-4xl'><Link to="/">Go Back To Ghor-Bari!</Link></button>
        </div>
    );
};

export default Error;