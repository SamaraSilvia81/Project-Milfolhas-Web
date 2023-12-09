import React, { useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery } from "@tanstack/react-query";
import { fetchItemsByListId } from "../api/food";

const Order = () => {
  
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.userId);
  const { foodName, foodId } = useParams();

  console.log("ORDER ID COMIDA", foodId)

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['AppTotem', userId],
    queryFn: () => fetchItemsByListId(userId, foodId),
    onError: (err) => console.error('Erro na query:', err),
    staleTime: 10000,
  });    

  console.log("Data:", data);
  const price = data?.find((item) => item.id === foodId)?.value || 0;
  console.log("Price:", price);

  const image = data?.find((item) => item.id === foodId)?.image;
  console.log("Imagem:", image)

  const handleCardPress = () => {
    
    setIsButtonPressed((prevState) => !prevState);

    const selectedFood = {
      id: foodId.id,
      foodname: foodName,
      value: price,
      image: foodId.image,
      quantity: counter,
    };

    navigate('Confirm', { selectedFood });
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>

    {isFetching && <p>IS FETCHING</p>}

      <div>
        <div>
          <div>
            <Avatar alt="Food Image" src={image} sx={{ width: 220, height: 220 }} />
          </div>
          <div>
            <div>
              <Typography variant="h4" sx={styles.name}>
                {foodName}
              </Typography>
            </div>
          </div>
          <div>
            <div style={styles.tagItem}>
              <Typography variant="h5" sx={styles.tagText}>
                Valor: R$ {price}
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Typography variant="h6" sx={styles.text}>
            Quantidade do Pedido
          </Typography>
          <div>
            <Button variant="contained" sx={styles.minus} onClick={decrement}>
              -
            </Button>
            <Typography variant="h6" sx={styles.result}>
              {counter}
            </Typography>
            <Button variant="contained" sx={styles.push} onClick={increment}>
              +
            </Button>
          </div>
        </div>
        <div style={styles.actions}>
          <Button
            variant="contained"
            sx={[styles.button, isButtonPressed && styles.buttonPressed]}
            onClick={handleCardPress}
          >
            <ShoppingCartIcon style={{ fontSize: 20, color: 'white' }} />
          </Button>
        </div>
      </div>
      <div style={styles.lineBottom} />
    </div>
  );
};

const styles = {
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  tagItem: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  tagText: {
    fontSize: 16,
    textAlign: 'center',
  },
  push: {
    // backgroundColor: 'transparent',
  },
  minus: {
    // backgroundColor: 'transparent',
  },
  text: {
    // textAlign: 'center',
    // color: '#fff',
    // marginBottom: 15,
  },
  result: {
    // textAlign: 'center',
    // color: '#fff',
    // marginTop: 10,
    // marginHorizontal: 10,
  },
  actions: {
    top: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 60,
    height: 60,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0AA4D',
  },
  buttonPressed: {
    backgroundColor: '#2A234B',
  },
};

export default Order;
