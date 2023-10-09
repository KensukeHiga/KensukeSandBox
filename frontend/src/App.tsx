import React from "react";
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

function App() {
  const featureList: string[] = ["TODO", "ユーザー情報", "GPT先生"];

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
          <Typography
            variant="h4"
            style={{
              color: "#E0F2F1", // ホワイトの代わりにシアンの薄い色
              fontWeight: "bold",
              marginBottom: "16px", // タイトルとボタンの間にスペースを持たせる
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)", // ソフトな文字の影
            }}
          >
            機能リスト画面
          </Typography>
          <Grid container spacing={3}>
            {featureList.map((feature, index) => (
              <Grid item key={index}>
                <Button variant="contained" color="primary">
                  {feature}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default App;
