import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import CardInfo  from './components/CardInfo';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '240px',
      display: 'flex',
    },
  },
}));

function App() {
  const [card, setCard] = useState(false);

  const handleSubmit = e => {
    e.preventDefault()
    setCard(true)
}

  const classes = useStyles();
  return (
    <div className="App">
      <Typography
          variant="h3"
      >
          Parser
        </Typography>
      <form 
        className={classes.root}
      >
        <TextField
          id="filled-basic"
          label="Enter link"
          variant="filled"
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          style={{marginBottom : '30px'}}
        >
          Send
        </Button>
      </form>
      { card ?
      <CardInfo />
      : null }
    </div>
  );
}

export default App;
