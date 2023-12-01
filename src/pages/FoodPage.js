import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Typography, Container, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { useSelector } from 'react-redux';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Food from "../components/Food";
import { fetchItemsByListId } from "../service/food";

function FoodPage ({ route }) {

  const userId = useSelector((state) => state.auth.userId);
  const navigation = useNavigate();

  // Extrair parâmetros adicionais de route.params
  const { breakfastName, breakfastId } = route.params;

  console.log('BreakfastName:', breakfastName);
  console.log('breakfastId:', breakfastId);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, breakfastId),
    onError: (err) => console.error("Erro na query:", err),
    staleTime: 10000,
  });

  console.log('Data FoodScreen:', data);

  const handleCardPress = (food) => {
    console.log("FOODSCREEN PARA ORDER", food);
    navigation('/order', { foodId: food.id });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Typography>Loading</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Typography>Error: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container style={styles.container}>
      {isFetching && <Typography>IS FETCHING</Typography>}

      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            style={styles.arrowIconContainer}
            onClick={handleGoBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography style={styles.pageTitle}>{breakfastName}</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ flex: 1 }}>
        {data.find((item) => item.id === breakfastId) && (
          <Food
            food={data.find((item) => item.id === breakfastId)}
            onPress={(food) => handleCardPress(food)}
          />
        )}
      </Container>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
  },
  arrowIconContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    padding: 5,
    left: 30,
  },
  pageTitle: {
    fontSize: 18,
    left: 190,
    color: '#fff',
    fontWeight: "bold",
  },
};

export default FoodPage ;