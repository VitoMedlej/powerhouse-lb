import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/mongodb'; 

export default async (_req: NextApiRequest, res: NextApiResponse) => { 
  if (_req.method === 'GET') {


       const ProductsCollection = await client.db("Power").collection("Products")
       const docs = await ProductsCollection.distinct('videoUrl')
    //   const products : any[] = [];
    //    await docs.forEach((prod:any) =>{ 
    //           products.push(prod);
    //     })
        if (docs.length > 0) { 
            return res.status(200).json(docs);
          }
}
return res.status(404).json({success:false}); 
}
