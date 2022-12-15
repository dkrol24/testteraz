
import Image from "next/image"
import {urlFor} from "../sanity"

import { removeFromBasket } from "../redux/basketSlice";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
interface Props {
    items:Product[];
    id:string

}


const CheckoutProduct = ({id,items}:Props) => {
    const dispatch = useDispatch();
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
        toast.error(`${items[0].title} removed from basket`,{position:"bottom-center"})
    }
  return (
    <div>
        <div>

        <Image alt="productcheckout" src={urlFor(items[0].image[0]).url()} width={300} height={300}/>
        </div>
        <div>
            <div>
                <div>
                    <h4>{items[0].title}</h4>
                    <p>{items.length}
                    <p>strzałka</p>
                    </p>
                </div>
                <p>Show product details     <p>strzałka</p></p>
            </div>
            <div>
                <h4>
                    <p>{items.reduce((total,item)=>total+item.price,0)}</p>
                 
                </h4>
                <button onClick={removeItemFromBasket}>Remove</button>
            </div>
        </div>
    </div>

  )
}

export default CheckoutProduct