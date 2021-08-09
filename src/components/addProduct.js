// import React, { useEffect, useRef, useState } from 'react';
// // import { useForm } from "react-hook-form";
// // import { useHistory } from "react-router-dom";
// // import { toast } from 'react-toastify';
// import { doApiGet, doApiMethod, URL_API } from '../services/apiService';

// function AddProduct() {

//   // const { register, handleSubmit, errors } = useForm();
//   let [prodAr, setProdAr] = useState([]);
//   let fileRef = useRef();
//   let biznumRef = useRef();
//   let nameRef = register({ required: true, minLength: 3 });
//   let priceRef = register({ required: true, min: 1 });
//   let infoRef = register({ required: true, minLength: 3 });
//   let imageRef = register({});
  
  
//   useEffect(() => {
//     doApiGetCat();
//   },[])

//   // COLLECT category from db
//   const doApiGetAllProds = async(req, res) => {
//     let url = URL_API + "/products" 
//     let data = await doApiGet(url);
//     setProdAr(data);
//   }

//   const onFormSub = (dataBody) => {
//     console.log(dataBody);
    
//     // doApi(dataBody)
//     doApi(dataBody);
//   }

//   const doApi = async(dataBody) => {
//     let url = URL_API + "/products/" + biznumRef;
//     let data = await doApiMethod( url, "POST", dataBody );
//     // if succed we will get _id prop
//     // console.log(data);
//     if(data._id){
//       if(fileRef.current.files.length > 0){
//         uploadFile(data._id)
//       }
//       else{
//       toast.success("product added");
//       history.push("/admin/list");
//       }
//     }
//     else{
//       // toast.error("There is problem try again later");
//     }
//   }


 

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit(onFormSub)} className="col-lg-6 mx-auto p-2 shadow mt-3">
//         <h1>Add new Product</h1>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">name</label>
//           <input defaultValue="pizza" ref={nameRef} name="name" type="text" className="form-control" id="name" />
//           {errors.name && <span className="text-danger">Enter vaild name (at least 2 charts)</span>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">Price:</label>
//           <input defaultValue="5" ref={priceRef} name="price" type="text" className="form-control" id="price" />
//           {errors.price && <span className="text-danger">Enter valid price higer than 0</span>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="info" className="form-label">info</label>
//           <input defaultValue="bla bla" ref={infoRef} name="info" type="text" className="form-control" id="info" />
//           {errors.info && <span className="text-danger">Enter info (at least 2 charts)</span>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">Image:</label>
//           <input defaultValue="http://" ref={imageRef} name="img" type="text" className="form-control" id="image" />
//           {errors.img && <span className="text-danger">Enter valid image higer than 0</span>}
//           <label>Upload image from computer:</label>
          
//           <br/>
//           <input ref={fileRef} type="file" className="me-3" />
//         </div>
      
//         <button type="submit" className="btn btn-primary">Add product</button>


//       </form>

//     </div>
//   )
// }

// export default AddProduct