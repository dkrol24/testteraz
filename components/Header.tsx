import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);
  return (
    <header style={{position:'sticky', top:'0',zIndex:'30',width:'100%',alignItems:'center',justifyContent:'space-between',display:'flex', background:'#e2d8dd'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Link href="/">
        <div style={{position:'relative',height:'40px',width:'120px',display:'flex',justifyContent:'center',alignContent:'center'}}>
            <Image alt='appleicons' src="https://rb.gy/vsvv2o" height={40} width={40} />
        </div>
      </Link>
      </div>
      <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <ul style={{padding:'0',display:'flex',width:'100%',alignItems:'center',justifyContent:'space-around',listStyleType:'none'}}>
          <li>Product</li>
          <li>Explore</li>
          <li>Support</li>
          <li>Business</li>
        </ul>
      </div>
      <div style={{display:'flex',width:'120px',alignItems:'center',justifyContent:'space-evenly'}}>
        <div>
      <p>bag</p>
      <div style={{position:'relative'}}><span style={{position:'absolute' ,right:'12px', top:'-11px', zIndex:'50',display:'flex', height:'15px',width:'15px', alignItems:'center',fontSize:'12px',justifyContent:'center', borderRadius:'50%', background:'yellow', color:'black'}}>{items.length}</span></div>
        </div>
        <Link href="/checkout">
        <p>search</p>
        </Link>
        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <p>user
{/* onClick={() => signIn()} */}
          </p>
  
        )}
      </div>
    </header>
  )
}

export default Header