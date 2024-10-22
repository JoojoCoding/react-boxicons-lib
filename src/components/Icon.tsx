import { IconProps } from "../types/IconProps";
import React from "react";
import "../index.css"
 

const checkType = (type: string): string => {
    switch(type) {
        case "regular":
            return "bx"
        case "solid":
            return "bxs"
        case "logo":
            return "bxl"
        default:
            return ""
    }
}
const checkBorder = (border: string): string => {
    if(border == "square") return "bx-border"
    else if(border == "circle") return "bx-border-circle"
    else return ""
}
 
const Icon = ({
    name, 
    type = "regular", 
    size = "md", 
    color = "", 
    rotate = 0,
    flip = "",
    animation = "",
    pull = "",
    border = "",
    addClassName = ""
    }: IconProps) => {
    return <i className={`bx ${checkType(type)}-${name} bx-${size} bx-rotate-${rotate} ${flip != "" ? `bx-flip-${flip}` : ""} ${animation != "" ? `bx-${animation}` : ""} ${pull != "" ? `bx-pull-${pull}` : ""} ${checkBorder(border)} ${addClassName != "" ? addClassName : ""}`}  
        style={{color: color}}
        />
}
 
export default Icon