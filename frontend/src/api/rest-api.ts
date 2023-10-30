import axios from "axios";

export type TodoForm = {
  name: string;
  content: string;
};

export type Rersponse = {
  message: string;
};

// フォームのデータをAPIにPOSTする
export const postTodo = async (todoForm: TodoForm) => {
  try {
    const response = await axios
      .post<Response>("/api/todos", { ...todoForm })
      .then((res) => {
        return res.data;
      });
    // responseをJson形式でalertで表示する。
    alert(JSON.stringify(response, null, 2));
  } catch (error) {
    // error内容をalertで表示する。
    alert(error);
  }
};
