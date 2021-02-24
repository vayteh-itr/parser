import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import CardInfo  from './components/CardInfo';
import axios  from 'axios';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '240px',
      display: 'flex',
    },
  },
  btn: {
    marginBottom : 30,
  },
}));

const getHTML = async (url) => {
  const { data } = await axios.get(url);
  console.log("data+++++")
  console.log(data)
  console.log("data-----")
  return data
}

function App() {
  const [isCard, setIsCard] = useState(false);
  const [info, setInfo] = useState(null);
  const [value, setValue] = useState('');

  const recursion = (elem) => {
    elem.childNodes.forEach(element => {
      console.log(element)
      if (element.nodeName === "#text") {
        return
      }
      else {
        recursion(element)
      }
    });
  }

  const handleChange = e => {
    e.preventDefault()
    const result = e.target.value
    setValue(result)
    console.log("RESULT+++++")
    console.log(result)
    console.log("RESULT-----")
}

  const handleSubmit = async (val) => {
    const res = await getHTML(val)
    const el = document.createElement( 'html' );
    el.innerHTML = res;
    console.log("el+++++")
    console.log(el)
    console.log("el-----")
    console.log("el.chilNodes+++++")
    console.log(el.childNodes)
    console.log("el.chilNodes-----")

    const result = recursion(el)
  
    setIsCard(true)
    setInfo(result)
    console.log("RES+++++")
    console.log(result)
    console.log("RES-----")
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
          onChange={handleChange}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(value)}
          className={classes.btn}
        >
          Send
        </Button>
      </form>
      { isCard ?
      <CardInfo />
      : null }
      <div >{info ? info : null}</div>
    </div>
  );
}

export default App;
