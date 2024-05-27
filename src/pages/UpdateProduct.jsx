import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
 const data=useLoaderData();
 const [id,setId]=useState(data.id);
 const [title,setTitle]=useState(data.title);
 const [brand,setBrand]=useState(data.brand);
 const [price,setPrice]=useState(data.price);
 const [description,setDescription]=useState(data.description);
 const [photo,setPhoto]=useState(data.photo);
 const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const id = form.id.value;
  const title = form.title.value;
  const brand = form.brand.value;
  const price = form.price.value;
  const description = form.description.value;
  const photo = form.photo.value;

  const product = { id, title, brand, price, description, photo };

  const result = await Swal.fire({
    title: "Do you want update this product?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Update",
    denyButtonText: `Don't Update`
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`http://localhost:3000/shoes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(product)
      });

      const data = await response.json();
      console.log(data);

      Swal.fire("Updated!", "", "success");
      form.reset();
    } catch (error) {
      Swal.fire("Error!", "There was an error updating the product.", "error");
      console.error('Error:', error);
    }
  } else if (result.isDenied) {
    Swal.fire("Product is not updated", "", "info");
  }
};

 return (
  <div className="p-5">
  <h1 className="text-4xl font-semibold text-center mb-8">Update Product </h1>
 <form onSubmit={handleSubmit} className="space-y-4">

 <label className="text-xl"> ID</label>
  <input className="p-4 border-0 border-none  w-full rounded-lg bg-slate-200" 
   type="text" name="id" 
   value={id} 
   placeholder="id"
   onChange={(e)=>setId(e.target.value)} />

  <label className="text-xl"> Title</label>
  <input className="p-4 border-0 border-none  w-full rounded-lg bg-slate-200" 
  value={title} 
  type="text" 
  name="title" 
  placeholder="title" 
  onChange={(e)=>setTitle(e.target.value)}/>

  <label className="text-xl"> Brand</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="text" 
  value={brand} 
  name="brand" 
  placeholder="brand"
  onChange={(e)=>setBrand(e.target.value)}/>

  <label className="text-xl"> Price</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="number" 
  value={price} 
  name="price"
  placeholder="price" 
  onChange={(e)=>setPrice(e.target.value)}/>

  <label className="text-xl"> Description</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="text" 
  value={description} 
  name="description" 
  placeholder="description"
  onChange={(e)=>setDescription(e.target.value)}/>

  <label className="text-xl"> Photo URl</label>
   <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
   type="text" 
   name="photo" 
   value={photo} 
   placeholder="photo url"
   onChange={(e)=>setPhoto(e.target.value)}/>

  <input className="btn w-full btn-primary" type="submit" value="Update Now" />
 </form>
 </div>
 );
};

export default UpdateProduct;