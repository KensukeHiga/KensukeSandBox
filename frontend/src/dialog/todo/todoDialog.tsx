import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";
import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// タイトルとフォームタイプを持つinterface
export interface Todo {
  type: string;
  title: string;
  name: "name" | "content";
}

interface Props {
  open: string;
  onClose: () => void;
  todos: Todo[];
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("名前は必須です")
    .max(255, "名前は255文字以下で入力してください"),
  content: yup
    .string()
    .required("内容は必須です")
    .max(255, "内容は255文字以下で入力してください"),
});

// TODO:react-hook-foomで入力フォームを作成する。
// controlとuseFormを使ってみる。
export const TodoDialog: FC<Props> = ({ open, onClose, todos }) => {
  const thisDialog = "TODO";
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: any) => {
    // 実行処理を書く
    alert(JSON.stringify(data, null, 2));
    onClose();
  };

  return (
    <Dialog
      fullWidth
      scroll="body"
      open={thisDialog === open}
      onClose={() => onClose()}
    >
      <DialogTitle>TODOリスト</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {todos.map((todo, indedx) => (
            <div key={indedx} style={{ marginTop: "10px" }}>
              <Controller
                name={todo.name}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={todo.title}
                    error={!!errors[todo.name]}
                    helperText={errors[todo.name]?.message}
                  />
                )}
              />
            </div>
          ))}
        </form>
      </DialogContent>
      <DialogActions>
        <Button disabled={!isValid} onClick={handleSubmit(handleFormSubmit)}>
          登録
        </Button>
        <Button onClick={onClose}>キャンセル</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDialog;
