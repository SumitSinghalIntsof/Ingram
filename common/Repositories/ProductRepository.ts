import axios from 'axios';
import {db} from '../Connection'

async function getproduct()  {
    console.log("repo");

    const entries =  await db.query('Select * from dbo.Item');
    console.log("data", entries[0]);
    return await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    
};
export default getproduct;

// getting a single product
// const getproduct = async () => {
//     // get the product id from the req
//     // get the product
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/products/${id}`);
//     let product: Product = result.data;
//     return ({
//         message: product
//     });
// };

// // updating a product
// const updateproduct = async () => {
//     // get the product id from the req.params
    
//     // update the product
//     let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/products/${id}`, {
//         ...(title && { title }),
//         ...(body && { body })
//     });
//     // return response
//     return ({
//         message: response.data
//     });
// };

// // deleting a product
// const deleteproduct = async () => {
//     // get the product id from req.params
//     // delete the product
//     let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/products/${id}`);
//     // return response
//     return ({
//         message: 'product deleted successfully'
//     });
// };

// // adding a product
// const addproduct = async () => {
//     // get the data from req.body
  
//     // add the product
//     let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/products`, {
//         title,
//         body
//     });
//     // return response
//     return ({
//         message: response.data
//     });
//};

//export default  getproducts ;
