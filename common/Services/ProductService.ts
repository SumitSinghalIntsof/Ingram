import getproduct from "../Repositories/ProductRepository";
interface Product {
    userId: Number,
    
}
 async function getproductsservices() {
    let result =  await getproduct();
     let products: [Product] = result.data;
     return ({
         message: products
     });
 };
 export default getproductsservices;
// export class ProductService{
//     constructor(private readonly productRepo: ProductsRepo) {}
//     async getproductsservices() {
//         console.log("service");

//              let repo = ProductsRepo;
//             let result =  await this.productRepo.getproduct();
//              let products: [Product] = result.data;
//              return ({
//                  message: products
//              });
//          };
// }