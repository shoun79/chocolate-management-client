import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChocolateSingle from './ChocolateSingle';

const Chocolates = () => {

    const loadedchocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedchocolates);

    return (
        <div>
            <Link to='/add-chocolate'>
                <button className="btn btn-outline rounded-none">➕  <span className='text-xl'>New Chocolate</span> 🍫 </button>

            </Link>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead className='bg-amber-100'>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            chocolates.map(chocolate =>
                                <ChocolateSingle
                                    key={chocolate._id}
                                    chocolate={chocolate}
                                    chocolates={chocolates}
                                    setChocolates={setChocolates}
                                ></ChocolateSingle>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Chocolates;