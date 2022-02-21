import {connection} from "../connection";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection('to_do_list_task')
    .insert({
        id,
        title,
        description,
        limit_date: deadline,
        creator_user_id: authorId
    })
}

