import React, { useState, useEffect } from "react";
import { Typography, Box, CircularProgress, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';
import { fetchItemsByListId } from "../api/food";
import Food from "../components/Food";

const FoodScreen = () => {
  
  const [foodData, setFoodData] = useState([]);
  
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  
  const { listId, mealName } = useParams();

  const { isFetching, error, data } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchItemsByListId(userId, listId),
    onError: (err) => console.error("Erro na query:", err),
  });

  const handleCardPress = (food) => {
    console.log("CONSOLE FOOD", food)
    navigate(`/Order/${encodeURIComponent(food.name)}/${food.id}`, {
      state: { foodData: food },
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (data) {
      setFoodData(data);
    }
  }, [data]);;

  if (isFetching) {
    return (
      <Box sx={styles.loadingContainer}>
        <CircularProgress size={50} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={styles.errorContainer}>
        <Typography>Error: {error.message}</Typography>
      </Box>
    );
  }

  if (!isFetching) {
    return (
      <Box>
        <AppBar position="static" sx={styles.header}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleGoBack}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {mealName}
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={styles.contentContainer}>
          {data.map((item) => (
            <Food key={item.id} food={item} onPress={handleCardPress} />
          ))}
        </Box>
      </Box>
    );
  }
}

const styles = {
  container: {
    width: '100%',
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    backgroundColor: '#C0AA4D',
    display: 'flex',
    // alignItems: 'center',
    // height: 80,
  },
  backButton: {
    borderRadius: '50%',
    marginRight: 2,
  },
  backIcon: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mealContainer: {
    marginTop: 2
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
};

export default FoodScreen;
