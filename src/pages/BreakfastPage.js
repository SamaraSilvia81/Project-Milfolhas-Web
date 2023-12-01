import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Typography, AppBar, Toolbar, IconButton, Container, Grid, Card, CardContent } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useSelector } from 'react-redux';
import { fetchItemsByListId } from "../service/food";

const BreakfastPage = () => {

  const navigation = useNavigate();
  const userId = useSelector((state) => state.auth.userId);

  // Extracting additional parameters from route.params
  const { mealName, listId } = useParams();

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, listId),
    onError: (err) => console.error("Erro na query:", err),
  });

  const handleCardPress = (breakfast) => {
    console.log("Comida do café da manhã pressionado: ", breakfast);
    console.log("Nome da comida do café: ", breakfast.name);
    console.log("ID da comida do café: ", breakfast.id);

    // Navegar para a próxima página e passar os dados como estado
    navigation({
      pathname: '/food', // Rota para a próxima página
      state: {
        breakfastName: breakfast.name,
        breakfastId: breakfast.id,
      },
    });
  };

  const handleGoBack = () => {
    // Use navigate(-1) para voltar
    navigation(-1);
  };

  return (
    <Container style={styles.container}>
      {isFetching && <Typography>IS FETCHING</Typography>}

      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={styles.pageTitle}>{mealName}</Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>
        {isLoading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error.message}</Typography>}
        {data && data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card onClick={() => handleCardPress(item)}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                {/* Add other details as needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: 80, // Adjust this value based on your app's design
    padding: 20,
    backgroundColor: '#fcfcfc',
  },
  pageTitle: {
    marginLeft: 20,
    fontWeight: "bold",
  },
};

export default BreakfastPage;