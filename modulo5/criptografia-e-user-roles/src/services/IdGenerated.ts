import { v4 } from "uuid";

export const IdGenerated = ():string => {
   return v4();
}