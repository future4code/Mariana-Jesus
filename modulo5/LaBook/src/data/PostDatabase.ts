import { postDTO } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    private static tablePost =  "labook_posts"
    async create({
        id,
        photo,
        description,
        type,
        author_Id
    }:postDTO) {
        await BaseDatabase.connection()
         .insert({
            id,
            photo,
            description,
            type,
            author_Id
         })
         .into(PostDatabase.tablePost)
    }

    async getById (id:string){
        const result = await BaseDatabase.connection()
        .select("*")
        .where({ id })
        .from(PostDatabase.tablePost)

        console.log(result)
        return result
    }
}