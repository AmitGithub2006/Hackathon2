import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import "./style.css"

function VoiceRecognition() {
  const [myText, setMyText] = useState('Hello');
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const startListening = () => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onstart = () => {
      setListening(true);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const spokenText = event.results[last][0].transcript;
      setTranscript(spokenText);
      checkMatching(spokenText);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const checkMatching = (spokenText) => {
    const isMatch = spokenText.toLowerCase() === myText.toLowerCase();

    if (isMatch) {
      // If the spoken text matches the expected text
      setFeedbackMessage("Correct! You said the right word.");
      console.log('True', spokenText);
      // You can perform any actions or render specific content here
    } else {
      // If the spoken text does not match the expected text
      setFeedbackMessage("Incorrect. Try again!");
      console.log('False:', spokenText);
      // You can perform different actions or render different content here
    }
  };

  const speakExpectedText = () => {
    speak(myText);
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (listening) {
      startListening();
    }
  }, [listening]);

  const feedbackClass = feedbackMessage.includes("Correct") ? "correct" : "incorrect";

  return (
    <>
     <Card sx={{ maxWidth: 500, textAlign:"center" , mt:20, ml:75,backgroundColor:"rgb(241, 240, 232)"}}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Speak Below Word
        </Typography>
        <Grid container sx ={{mt:3}} >
        <Grid item sx={{ml:20,}}>
          <Typography variant="h4" color="text.secondary">
            { myText} 
          </Typography>
        </Grid>
        <Grid item xs={3} >
        <Button onClick={speakExpectedText}>
        {/* <VolumeOffIcon  /> */}
        <VolumeUpIcon />
        </Button>
         
        </Grid>
        </Grid>
        <Button
        variant="contained"
        color={listening ? 'secondary' : 'primary'}
        onClick={() => setListening(!listening)}
        sx ={{mt :3,height:50,borderRadius:50}}
        
        
      >
        {listening ? 'Listening...' : 'Start Listening'}
      </Button>
      {/* <Typography variant="body1">Transcript: {transcript}</Typography> */}
      </CardContent>
        <CardActions>
          <Grid container>
            <Grid xs={6} sx={{textAlign:'left'}}>
            <Button size="larg">Back</Button>
            </Grid>
            <Grid xs={6} sx={{textAlign:'right'}}>
              <Button size="larg">Next</Button>
            </Grid>
          </Grid>
        </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 500, textAlign:"center" , mt:10, ml:75,backgroundColor:"rgb(241, 240, 232)"}}>
      <Stack sx={{ mt:2, mb:2}}>
      <p className={feedbackClass}>{feedbackMessage}</p>
      <Typography variant="body1">Your Pronunciation: {transcript}</Typography>
      </Stack>
    </Card>
     
   

  </>
  );
}

export default VoiceRecognition;

