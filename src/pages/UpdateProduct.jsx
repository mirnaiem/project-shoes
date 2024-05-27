
const UpdateProduct = () => {
 return (
  <div className="p-5">
  <h1 className="text-4xl font-semibold text-center mb-8">Update Product </h1>
 <form className="space-y-4">
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