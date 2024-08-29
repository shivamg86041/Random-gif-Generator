import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  function clickHandler(){
    fetchData();
  }
  const{gif, loading, fetchData} = useGif();
  return(
    <div className="sm:w-[50vw] w-[80vw] bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]" >
      <h1 className="mt-[12px] text-xl underline uppercase font-bold">a Random GIF</h1>
      {
        loading ? <Spinner/> : <img src={gif} alt="" className="sm:w-[51%] w-[200px] h-[220px]"  />
      }
      <button className="w-10/12 bg-slate-300 text-lg py-0.5 rounded-lg mb-[20px]" onClick={clickHandler}>Generate</button>
    </div>
  )
}
