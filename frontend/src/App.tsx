import React, { FC, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import logo from "./logo.svg";
import TodoDialog, { Todo } from "./dialog/todo/todoDialog";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            height: "100vh",
            background: "linear-gradient(45deg, #2c3e50, #34495e)",
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "50%",
            backgroundBlendMode: "overlay",
          },
        },
      },
    },
  });

  return (
    // sx={{background:"linear-gradient(45deg, rgba(0,216,255,1) 0%, rgba(77,110,243,1) 100%)"}} // Reactブルーの線形グラデーション
    // sx={{ background: "linear-gradient(45deg, #2c3e50, #34495e)" }} // ダークな色合い
    <Box sx={{ background: "linear-gradient(45deg, #2c3e50, #34495e)" }}>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <MainContent />
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export const MainContent: FC<{}> = () => {
  const featureList: string[] = ["TODO", "ユーザー情報", "GPT先生"];
  // usestateでopenなダイアログを管理するstateの作成
  const [open, setOpen] = useState<string>("");
  // Todo型の配列を作成
  const todos: Todo[] = [
    { type: "string", title: "タイトル" },
    { type: "string", title: "内容" },
  ];

  return (
    <>
      <Typography
        variant="h4"
        style={{
          color: "#E0F2F1",
          fontWeight: "bold",
          marginBottom: "16px",
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)", // ソフトな文字の影
        }}
      >
        機能リスト画面
      </Typography>
      <Grid container spacing={3}>
        {featureList.map((feature, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(feature)}
            >
              {feature}
            </Button>
          </Grid>
        ))}
      </Grid>
      <TodoDialog open={open} close={() => setOpen("")} todos={todos} />
    </>
  );
};

export default App;
