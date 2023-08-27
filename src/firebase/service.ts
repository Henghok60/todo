import { db } from ".";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { CreateTodo, Todo } from "@/types/todo.interface";

async function isUniqueValueUnique(value: string) {
  const collections = collection(db, "todo");
  const q = query(collections, where("todo", "==", value));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs.length > 0) {
    return false;
  } else {
    return true;
  }
}

const addTodo = async ({ todo, isCompleted }: any) => {
  try {
    if (await isUniqueValueUnique(todo)) {
      const res = await addDoc(collection(db, "todo"), {
        todo: todo,
        isCompleted: isCompleted,
        createdAt: new Date().getTime(),
      });
      if (res) {
        return { success: true };
      }
    } else {
      return { success: false, message: "todo is already exist." };
    }
  } catch (err) {}
};

const updateTodo = async ({ id, todo, isCompleted }: Todo) => {
  try {
    if (await isUniqueValueUnique(todo)) {
      const todoRef = doc(db, "todo", id);
      await updateDoc(todoRef, {
        todo,
        isCompleted,
        updatedAt: new Date().getTime(),
      });
      return { success: true };
    } else {
      return { success: false, message: "todo is already exist." };
    }
  } catch (err) {}
};

const toggleTodoStatus = async ({ id, isCompleted }: Todo) => {
  try {
    const todoRef = doc(db, "todo", id);
    await updateDoc(todoRef, {
      isCompleted,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (id: string) => {
  try {
    const todoRef = doc(db, "todo", id);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};

export { addTodo, deleteTodo, updateTodo, toggleTodoStatus };
