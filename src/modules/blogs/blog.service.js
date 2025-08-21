import blogModel from "../../DB/models/blog.model.js"
import userModel from "../../DB/models/user.model.js"




export const addBlog = async ( req ,res , next )=>{
    const { title , content , user_id} = req. body 
    try {

        const userExist = await userModel.findByPk(user_id)
        if(!userExist){
            res.status(404).json({message: "user not exist" })
        }
        const blog = blogModel.build({title , content, user_id })
    await blog.save()



    res.status(201).json ({message : "created ", blog})
    } catch (error ){
        res .status ( 500).json({message : "error ", error , message :error.message })
    }
}

export const getAllBlogs = async ( req ,res , next )=>{
    
    try {

         
        
        const blog = await blogModel.findAll({
            include: {
                model : userModel,
                attributes: ["email"]
            }
        })


    res.status(201).json ({message : "created ", blog})
    } catch (error ){
        res .status ( 500).json({message : "error ", error , message :error.message })
    }
}


