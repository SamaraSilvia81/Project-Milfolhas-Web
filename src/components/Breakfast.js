import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Card, CardContent, Typography, CardActionArea } from '@mui/material';

const Breakfast = ({ breakfast }) => {
  
  const classes = useStyles();

  return (
    <Link to={`/breakfast/${breakfast.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.item}>
        <CardActionArea>
          <div className={classes.card}>
            <CardContent>
              <div className={classes.textContainer}>
                <Typography variant="h5" className={classes.titleItem}>
                  {breakfast.name}
                </Typography>
              </div>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const useStyles = makeStyles({
  item: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titleItem: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Breakfast;