import Image from "next/image";
import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <section style={{position:'sticky',top:'0',display:'flex',height:'100vh',maxWidth:'1350px',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{padding:'8px'}}>
        <h1 style={{margin:'3px',fontSize:'5rem'}}>
          <span  style={{display:'block',background:'pink',color:'transparent'}}>
            Powered
          </span>
          <span style={{display:'block'}}>By Intellect</span>
          <span style={{display:'block'}}>Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <div style={{width:'450px',height:'450px',display:'flex',position:'relative'}}>
        <Image alt="iphone" src="/iphone.png" height={450} width={450} />
      </div>
    </section>
  );
}

export default Landing;