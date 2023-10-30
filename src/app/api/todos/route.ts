import dbConnect from "@/app/lib/dbConnect";
import Todo from "@/app/lib/models/todo.model";

export async function GET(request: Request) {
   let db = await dbConnect();
   let todos = await Todo.find();
   return Response.json(todos);
}
