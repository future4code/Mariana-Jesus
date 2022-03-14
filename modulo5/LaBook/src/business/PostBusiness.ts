import { PostDatabase } from "../data/PostDatabase"
import { post, postDTO } from "../model/post"
import { getTokenData } from "../services/authentication"
import { generateId } from "../services/generateId"
import {authenticationData} from "../services/authentication"

const postDatabase = new PostDatabase()

export class PostBusiness {

    createPostBusiness = async ({ photo, description, type, token }:any ): Promise<any>=> {

          
        const tokenData: authenticationData = getTokenData(token)
  
        const id: string = generateId()

     const newPost: postDTO = { id, photo, description, type, author_Id: tokenData.id }

        await postDatabase.create(newPost)
      }


      getPostByIdBusiness = async ({id, token}:any): Promise<post> => {
      
        const tokenData: authenticationData = getTokenData(token)
      
        const queryResult: any = await postDatabase.getById(id)
     
        if (!queryResult[0]) {
            throw new Error(`"Post not found"`)
        }
  
           const post: post = {
           id: queryResult[0].id,
           photo: queryResult[0].photo,
           description: queryResult[0].description,
           type: queryResult[0].type,
           createdAt: queryResult[0].created_at,
           author_Id: queryResult[0].author_id,
        }
     
return post
      }  
}