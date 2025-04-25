import React, { FunctionComponent } from "react";
import { IServices } from "../type";

const ServiceCard: FunctionComponent<{ services: IServices }> = ({
  services: { Icon, about, title },

}) => {



  return (
    <div className="flex items-start p-2 space-x-5  jusitfy-center border-gray-500 ">
      <Icon className="max-w-12 max-h-12 min-w-[20px] min-h-[20px] text-green "/>
      <div className={`${''}  flex flex-col gap-1 `}>
        <h4 className="font-bold text-md ">{title} </h4> 
        <p dangerouslySetInnerHTML={{__html : about}} className={`${''} text-gray-500`}/>
      </div>
    </div>
  );
};

export default ServiceCard;
