import main from "../database/connection";
import UserModel from "../database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));

  const highest = await UserModel
  .find({})
  .sort({"price":-1})
  .limit(4)

  const featured = await UserModel.find({isFeatured : true}).limit(4)
  const latest = await UserModel.find({}).sort({_id: -1}).limit(4)
  const category = await UserModel.find().distinct('category') 
  const arr = [{title:'highest', data:highest} , {title: 'featured' , data :featured} , {title:  'latest',data : latest} , {title:  'category',data : category}];
  res.status(200).json({ arr })
 
}