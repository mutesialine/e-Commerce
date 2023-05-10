import { useEffect } from "react";
import { getAllProductSuccessAction } from "../../../redux-store/reducer/allProductSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
//import { AllProductStateInterface } from "../../../interfaces/redux-state/AllProductStateInterface";
//import { ProductInfoInterface } from "../../../interfaces/ProductInfointerface";
const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.allProduct.products);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data, "+++++++++++++++++++++");
      dispatch(getAllProductSuccessAction(data));
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 p-2">
      {products.map((item, index: number) => {
        return (
          <div
            className="flex flex-col justify-center items-center hover:cursor-pointer border shadow"
            key={index}
          >
            <img className="h-65 w-60" alt="" src={item.image} />
            <span>{`PRICE: ${item.price}`}</span>
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
