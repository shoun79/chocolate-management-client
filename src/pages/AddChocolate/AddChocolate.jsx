import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddChocolate = () => {
    const hendleSave = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const image = form.image.value;
        const category = form.category.value;
        const newChocolate = {
            name, country, category, image
        }
        fetch('http://localhost:5000/chocolates', {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: "Good job!",
                        text: "Chocolate Added",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className='mb-10'>
            <Link to='/'><h4>⤵ All Chocolates</h4></Link>
            <hr className='my-4' />
            <div className='bg-gray-200 py-7 px-4 lg:px-10'>
                <div className='text-center'>
                    <h3 className='font-bold text-lg'>New Chocolates</h3>
                    <p className='text-sm'>Use the below form to create a new product</p>
                </div>
                <form onSubmit={hendleSave} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Chocolate Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <input name='country' type="text" placeholder="Country Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input name='image' type="text" placeholder="Image Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="py-3 rounded-lg px-2  input-bordered" name="category" id="category">
                            <option value="Premium">Premium</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>

                    </div>


                    <div className="form-control mt-6">
                        <input className='btn bg-rose-950 text-white font-bold' type="submit" value="Save" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddChocolate;