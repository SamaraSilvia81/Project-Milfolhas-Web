// import React from 'react';
// import { Card, CardContent, Typography, Button } from '@mui/material';
// import { useSelector } from 'react-redux';
// import { useQuery } from "@tanstack/react-query";
// import { fetchItemsByListId } from "../api/food";
// import { useNavigate, useParams } from 'react-router-dom';

// const FoodScreen = () => {

//   const userId = useSelector((state) => state.auth.userId);
//   const { breakfastName, breakfastId } = useParams();
//   const navigate = useNavigate();

//   const { isLoading, error, data, isFetching } = useQuery({
//     queryKey: ['AppTotem', userId],
//     queryFn: () => fetchItemsByListId(userId, breakfastId),
//     onError: (err) => console.error('Erro na query:', err),
//     staleTime: 10000,
//   });

//   const handleCardPress = (food) => {
//     const serializedFood = JSON.stringify(food);
//     navigate(`/Order/${encodeURIComponent(serializedFood)}`);
//   };

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div style={styles.container}>
//       {isFetching && <p>IS FETCHING</p>}

//       <Card>
//         <CardContent>
//           <Typography variant="h6" style={{ marginBottom: '10px' }}>
//             {breakfastName}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {data.find((item) => item.id === breakfastId)?.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Valor: {data.find((item) => item.id === breakfastId)?.value}
//           </Typography>
//           <Button
//             onClick={() => handleCardPress(data.find((item) => item.id === breakfastId))}
//             variant="contained"
//             color="primary"
//           >
//             Ver Detalhes
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fcfcfc',
//   },
// };

// export default FoodScreen;
