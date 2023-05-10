import { ProductInfoInterface } from "../ProductInfointerface";
import { CommonStateInterface } from "./CommonStateInterface";

export interface AllProductStateInterface extends CommonStateInterface {
  products: Array<ProductInfoInterface>;
}

//  export interface AllProductStateinterface {
//   products: ProductInfoInterface[];
// }
// interface AllProductStateInterface extends CommonStateInterface {}
