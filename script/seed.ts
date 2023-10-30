
import { faker } from '@faker-js/faker';
// import {Todo} from "@/app/lib/types";
import dbConnect from "@/app/lib/dbConnect";
import Todo from "@/app/lib/models/todo.model";

function createTodo(){
    return {
        _id: faker.database.mongodbObjectId(),
        title: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        completed: faker.datatype.boolean(),
        user_id: faker.database.mongodbObjectId()
    };
}



async function main() {
    const db = await dbConnect();

    for(let i = 0; i <= 100; i++){
        const todo = createTodo();
        console.log("Todo - " + i + ": " + JSON.stringify(todo));
        await Todo.create(todo);
    }
}

main();