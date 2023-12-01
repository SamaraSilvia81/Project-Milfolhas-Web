import React from "react";
import { Box, Typography, AppBar, Toolbar, IconButton, StatusBar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';

import Meal from "../components/Meal";
import { fetchListas } from "../service/meal";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  
  const navigation = useNavigate();
  const userId = useSelector((state) => state.auth.userId);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchListas(userId),
    onError: (err) => console.error("Erro na query:", err),
  });

  const handleCardPress = (meal) => {
    console.log("Item do café pressionado:", meal);
    console.log("ID da lista:", meal.id);
    navigation('/breakfast', {
      mealName: meal.name,
      listId: meal.id, // Assuming meal.id is the listId
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Box style={styles.container}>
      {isFetching && <Typography>IS FETCHING</Typography>}

      {/* <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
        networkActivityIndicatorVisible={true}
      /> */}

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
          <Typography style={styles.pageTitle}>Refeições Principais</Typography>
        </Toolbar>
      </AppBar>

      <Box style={{ flex: 1 }}>
        {data ? (
          <Box style={{ flex: 1 }}>
            {data.map((item) => (
              <Meal key={item.id} meal={item} onPress={handleCardPress} />
            ))}
          </Box>
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fcfcfc',
    height: '100vh',
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
    left: 150,
    color: '#fff',
    fontWeight: "bold",
  },
};

export default HomePage;
