import React from "react";
import c from './AvaDescription.module.css'
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
const AvaDescription = () => {
    return (
        <div className={c.avaDescription}>
            <Ava/>
            <Description/>
        </div>
    )
}
export default AvaDescription;