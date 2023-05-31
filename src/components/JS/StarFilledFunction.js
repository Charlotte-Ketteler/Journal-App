import {StarFilled} from "./StarFilled";
import {StarEmpty} from "./StarEmpty";
import { useState } from "react";

export default function StarFilledFunction(){
    const [isFavorite, setIsFavorite] = useState(false);
    function handleClick(){
        setIsFavorite(isFavorite === false ? true : false);
    }
   return (
    <div onClick={handleClick}>
        {isFavorite ? <StarFilled/> : <StarEmpty/>}
    </div>
   )
}