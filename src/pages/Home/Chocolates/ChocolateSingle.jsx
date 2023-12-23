import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolateSingle = ({ chocolate, chocolates, setChocolates }) => {
    const { image, name, _id, country, category } = chocolate;

    const hendleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/chocolates/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = chocolates.filter(chocolate => chocolate._id !== _id);
                            setChocolates(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Chocolate has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });

    }
    return (
        <tr>
            <th>
                <img className='w-16 h-16' src={image} alt="" />
            </th>
            <td>{name}</td>
            <td>{country}</td>
            <td>{category}</td>
            <td className='flex items-center '>
                <Link to={`/update-chocolate/${_id}`}>
                    <button className="btn btn-square bg-orange-100 me-2">
                        ✏
                    </button>
                </Link>
                <button onClick={() => hendleDelete(_id)} className="btn btn-square bg-orange-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default ChocolateSingle;