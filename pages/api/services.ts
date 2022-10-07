// import { NextApiRequest, NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils";

import { NextApiRequest, NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils";

import { services } from "../../data";

export default (req:NextApiRequest, res:NextApiResponse) => {
    
    res.status(200).json(services)

}