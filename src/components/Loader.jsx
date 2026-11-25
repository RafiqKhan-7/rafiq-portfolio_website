import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../App.css"
export default function Loader() {

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">

      {/* Icon */}
       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
    <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />
  </div>

      {/* Name */}

      {/* Loading text */}
      <p className="mt-3 text-2xl text-center text-gray-400">
        Just a Moment... <br />
        <span className="text-yellow-800">  
        This is Rafiq Khan Kharoty
        </span>
      </p>

      {/* Loading bar */}

     </div>
  );
}