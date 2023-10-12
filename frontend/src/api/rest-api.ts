import axios from "axios";

export type TodoForm = {
  name: string;
  content: string;
};

// フォームのデータをAPIにPOSTする
export const postTodo = async (todoForm: TodoForm) => {
  try {
    const response = await axios.post("/api/todos", { ...todoForm });
    if (response.status === 200) {
      alert("データが正常に送信されました！");
    } else {
      // エラーをスローする。
      throw new Error();
    }
  } catch (error) {
    // error内容をalertで表示する。
    alert(error);
  }
};
