import axios from "axios";

export type TodoForm = {
  name: string;
  content: string;
};

export type LoyaltyOut = {
  discountRate: number;
  message: string;
};

export type LoyaltyIn = {
  rank: string;
};

export type Response = {
  loyaltyOut: LoyaltyOut;
  loyaltyIn: LoyaltyIn;
};

// フォームのデータをAPIにPOSTする
export const postTodo = async (todoForm: TodoForm) => {
  try {
    const response = await axios
      .post<Response>("/api/todos/kogito-server", { ...todoForm })
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
