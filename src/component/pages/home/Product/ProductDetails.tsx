import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  return (
    <div className="flex flex-col justify-center items-center hover:cursor-pointer border shadow">
      <img className="h-65 w-60" alt="" src={state.image} />
      <span>{`PRICE: ${state.price}`}</span>
      <span>{state.title}</span>
    </div>
  );
};

export default ProductDetails;
