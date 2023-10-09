import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

function App() {
  const featureList: string[] = ["TODO", "ユーザー情報", "GPT先生"];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
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
  );
}

export default App;
