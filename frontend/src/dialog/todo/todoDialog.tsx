import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import React, { FC } from "react";

// タイトルとフォームタイプを持つinterface
export interface Todo {
  type: string;
  title: string;
}

interface Props {
  open: string;
  close: () => void;
  todos: Todo[];
}

// TODO:react-hook-foomで入力フォームを作成する。
// controlとuseFormを使ってみる。
export const TodoDialog: FC<Props> = ({ open, close, todos }) => {
  const thisDialog = "TODO";
  return (
    <Dialog
      fullWidth
      scroll="body"
      open={thisDialog === open}
      onClose={() => close()}
    >
      <DialogTitle>TODOリスト</DialogTitle>
      <Divider />
      <DialogContent>
        {todos.map((todo, indedx) => (
          <div key={indedx}>
            <p>{todo.title}</p>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default TodoDialog;
