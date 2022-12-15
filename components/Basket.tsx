
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

function Basket() {
  const items = useSelector(selectBasketItems);

  if (items.length === 0) return null;

  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300" style={{position:'fixed',bottom:'10px',right:'10px',background:'green',zIndex:'50',display:'flex',cursor:'pointer'}}>
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {items.length}
          </span>
        )}
   <p>bag</p>
      </div>
    </Link>
  );
}

export default Basket;