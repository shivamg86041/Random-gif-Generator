import { useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const[gifname, setGifName] = useState("car");

  function clickHandler(){
    fetchData();
  }
  function keyHandler(e){
    if(e.key === 'Enter'){
      fetchData();
    }
  }
  function changeHandler(event){
    setGifName(event.target.value);
  }
  const {gif, loading, fetchData} = useGif(gifname);

  return(
    <div className="sm:w-[50vw] w-[80vw] bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px] mb-[50px]" >
      <h1 className="mt-[12px] text-xl text-center underline uppercase font-bold">Random {gifname} Gif</h1>
      {
        loading ? <Spinner/> : <img src={gif} alt="" className="sm:w-[51%] w-[200px] h-[220px]"  />
      }

      <input type="text" name="gifname" value={gifname} onChange={changeHandler} className="w-10/12 text-lg py-0.5 rounded-lg outline-none text-center" onKeyDown={keyHandler} />

      <button className="w-10/12 bg-slate-300 text-lg py-0.5 rounded-lg mb-[20px]" onClick={clickHandler}>Generate</button>
    </div>
  )
}

