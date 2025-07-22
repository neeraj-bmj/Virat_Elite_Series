import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Magnet from '../components/Magnet'


const ProductCard = ({ product }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const { name, category, image, description, price, brand, id } = product;

  const handleClick = () => {
    console.log(product.id);
    toast.success("See all information about product.");
    navigate(`/product/service-details/${product.id}`);
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 p-3">
      <Link to={`/product/service-details/${product.id}`}>
        <img
          className="w-full h-52 object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </Link>
      <div className="pt-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {category} • {brand}
        </p>
        <p className="text-sm text-gray-600 mt-2 ">
          {description.slice(0, 100)}
          <span>...</span>
          <span className="text-xs text-blue-500 font-semibold">More</span>
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">{price}</span>
         
          {/* this is button */}
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <button
              onClick={handleSubmit(handleClick)}
              className="cursor-pointer px-3 py-1 bg-blue-600 text-white text-md rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out" >
              View Details
            </button>
          </Magnet>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
