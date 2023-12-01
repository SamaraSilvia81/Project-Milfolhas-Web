import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Typography, AppBar, Toolbar, IconButton, Container, Card, CardContent } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { fetchItemsByListId } from "../service/food";
import Check from "../components/Check";

function CheckPage() {
  
  const navigation = useNavigate();
  const route = useParams();

  const { value, quantity } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["AppTotem"],
    queryFn: fetchItemsByListId,
  });

  if (isLoading) {
    return (
      <Container style={styles.loadingContainer}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={styles.errorContainer}>
        <Typography>Error: {error.message}</Typography>
      </Container>
    );
  }

  if (!value || !quantity) {
    return (
      <Container style={styles.errorContainer}>
        <Typography>No food found</Typography>
      </Container>
    );
  }

  return (
    <Container style={styles.container}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={styles.contentContainer}>
        <div style={styles.avatarContainer}>
          <img
            src={require('../assets/logo.png')}
            alt="Logo"
            style={{ width: 120, height: 120 }}
          />
        </div>
        <Check price={value} quantity={quantity} />
      </Container>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 80, // Adjust this value based on your app's design
    padding: 30,
  },
  avatarContainer: {
    marginBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default CheckPage;