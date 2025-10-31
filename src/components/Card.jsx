import { useState } from "react";
import Buttons from "./Buttons";
import Counter from "./Counter";
import Reset from "./Reset";
import Title from "./Title";

export default function Card(){
  const [count, setCount]= useState(0);
    return(<>
    <Title/>
      <Counter count={count} setCount={setCount}/>
      <Reset count={count} setCount={setCount}/>
      <Buttons count={count} setCount={setCount}/>
    </>)
}