import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import getproductsservices from "../Services/ProductService";
interface Product {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}
//  export class Products{
//     constructor(private readonly productService: ProductService) {}
//      getproducts = async (req: Request, res: Response, next: NextFunction) => {
//         console.log("controller");
//         return  res.status(200).json(await this.productService.getproductsservices());
//     };
// }
// getting all products
 const getproducts = async (req: Request, res: Response, next: NextFunction) => {
     return  res.status(200).json(await getproductsservices());
 };

// getting a single product
const getproduct = async (req: Request, res: Response, next: NextFunction) => {
    // get the product id from the req
    let id: string = req.params.id;
    // get the product
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/products/${id}`);
    let product: Product = result.data;
    return res.status(200).json({
        message: product
    });
};

// updating a product
const updateproduct = async (req: Request, res: Response, next: NextFunction) => {
    // get the product id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    // update the product
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/products/${id}`, {
        ...(title && { title }),
        ...(body && { body })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a product
const deleteproduct = async (req: Request, res: Response, next: NextFunction) => {
    // get the product id from req.params
    let id: string = req.params.id;
    // delete the product
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/products/${id}`);
    // return response
    return res.status(200).json({
        message: 'product deleted successfully'
    });
};

// adding a product
const addproduct = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the product
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/products`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

export default {  getproducts,getproduct, updateproduct, deleteproduct, addproduct };