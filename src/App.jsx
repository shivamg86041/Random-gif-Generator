import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className="w-screen h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className=" bg-white text-center pl-[32rem] pr-[32rem] rounded-md mt-[25px] pt-[10px] pb-[10px] text-4xl font-bold">Random GIF'S</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
