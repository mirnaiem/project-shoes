import Swal from "sweetalert2";

const UpdateProduct = () => {
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
    title: "Do you want add this product?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Add",
    denyButtonText: `Don't Add`
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch('http://localhost:3000/shoes/', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(product)
      });

      const data = await response.json();
      console.log(data);

      Swal.fire("Added!", "", "success");
      form.reset();
    } catch (error) {
      Swal.fire("Error!", "There was an error adding the product.", "error");
      console.error('Error:', error);
    }
  } else if (result.isDenied) {
    Swal.fire("Product is not saved", "", "info");
  }
};

 return (
  <div className="p-5">
  <h1 className="text-4xl font-semibold text-center mb-8">Update Product </h1>
 <form onSubmit={handleSubmit} className="space-y-4">
  <label className="text-xl"> Title</label>
  <input className="p-4 border-0 border-none  w-full rounded-lg bg-slate-200" type="text" placeholder="title" />
  <label className="text-xl"> Brand</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" type="text" placeholder="brand" />
  <label className="text-xl"> Price</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" type="number" placeholder="price" />
  <label className="text-xl"> Description</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" type="text" placeholder="description" />
  <input className="btn w-full btn-primary" type="submit" value="Update Now" />
 </form>
 </div>
 );
};

export default UpdateProduct;