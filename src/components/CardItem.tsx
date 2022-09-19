import { ReactNode, useState } from "react";
import { BasicModal } from "./CardModal";

interface CardProps {
    imgUrl: string;
    imgAlt: string;
    date: string;
    description: string;
}


const CardItem = ({ imgUrl, imgAlt, date, description}: CardProps ) => {    
    
    return (
        <div className="bg-card-background border-solid border border-card-border h-[455px] w-[337px] rounded-[12px]" >  

           
            <img src={imgUrl} alt={imgAlt} className="rounded-t h-[211px] w-[337px]"/>                   

            <div className="flex flex-col p-8 gap-5">
                <span className="text-card-text-date">{date}</span>
                <p className="text-card-text-main font-bold">{description}</p>

                <BasicModal img_src={imgUrl} alt={imgAlt}/>
            </div>
        </div>
    )

}

export { CardItem };