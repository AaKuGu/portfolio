import React, { FunctionComponent } from "react";
import { IServices } from "../type";

const ServiceCard: FunctionComponent<{ services: IServices }> = ({
  services: { Icon, about, title },

}) => {



  return (
    <div className="flex items-center p-2 space-x-5  jusitfy-center">
      <Icon className="w-12 h-12 text-green"/>
      <div>
        <h4 className="font-bold text-md mb-3">{title} </h4> 
        <p dangerouslySetInnerHTML={{__html : about}}/>
      </div>
    </div>
  );
};

export default ServiceCard;
