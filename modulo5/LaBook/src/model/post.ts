enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    author_Id: string
 }
 
 
 export type postDTO = {
     id: string,
     photo: string,
     description: string,
     type: POST_TYPES,
     author_Id: string
  }