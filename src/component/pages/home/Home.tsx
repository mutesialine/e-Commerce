import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProductSuccessAction } from "../../../redux-store/reducer/allProductSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.allProduct.products);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(getAllProductSuccessAction(data));
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2">
        {products.map((item, index) => (
          <Link
            to="/details"
            state={item}
            className="flex flex-col justify-center items-center hover:cursor-pointer border shadow hover:opacity-80"
            key={index}
          >
            <img
              className="md:h-65 md:w-60 w-32 h-46"
              alt=""
              src={item.image}
            />
            <span>{`PRICE: ${item.price}`}</span>
            <span className="text-center">{item.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
