import React from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import Meal from "../components/Meal";
import { fetchListas } from "../api/meal";

function HomeScreen() {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);

  const { error, data, isFetching } = useQuery({
    queryKey: ["AppTotem", userId],
    queryFn: () => fetchListas(userId),
    onError: (err) => console.error("Erro na query:", err),
  });

  const handleCardPress = (meal) => {
    navigate(`/Breakfast/${meal.id}/${meal.name}`);
  };

  const handleGoBack = () => {
    navigate('/');
  };

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
      <Box sx={styles.container}>
      
      <Box sx={styles.header}>
        <Button onClick={handleGoBack} sx={styles.backButton}>
          <ArrowBackIcon sx={styles.backIcon} />
        </Button>
        <Typography variant="h6" sx={styles.title}>Refeições Principais</Typography>
      </Box>

      <Box sx={styles.mealContainer}>
        {data ? (
          <Box sx={styles.mealBox}>
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
    alignItems: 'center',
    height: 80,
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
};

export default HomeScreen;
