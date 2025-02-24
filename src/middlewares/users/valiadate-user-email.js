import { Users } from "../../models/comment.model"

export const ValidateEmail = async (req,res next) => {
  const userEmail = await Users.findOne({email}) ;
  if(userEmail) {
    
  }

}