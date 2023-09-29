// import React, { useState, useEffect } from 'react';
// import { Button, Typography } from '@mui/material';

// function VoiceRecognition() {
//   const [listening, setListening] = useState(false);
//   const [transcript, setTranscript] = useState('');
//   const expectedText = 'hello are you'; // Replace with your expected text

//   const startListening = () => {
//     const recognition = new window.SpeechRecognition();
//     recognition.lang = 'en-US';

//     recognition.onstart = () => {
//       setListening(true);
//       setTranscript('');
//     };

//     recognition.onresult = (event) => {
//       const last = event.results.length - 1;
//       const spokenText = event.results[last][0].transcript;
//       setTranscript(spokenText);
//       checkMatching(spokenText);
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };

//     recognition.start();
//   };

//   const checkMatching = (spokenText) => {
//     const isMatch = spokenText.toLowerCase() === expectedText.toLowerCase();

//     if (isMatch) {
//       // If the spoken text matches the expected text
//       console.log('True', spokenText);
//       // You can perform any actions or render specific content here
//     } else {
//       // If the spoken text does not match the expected text
//       console.log('False:', spokenText);
//       // You can perform different actions or render different content here
//     }
//   };

//   useEffect(() => {
//     if (listening) {
//       startListening();
//     }
//   }, [listening]);

//   return (
//     <div>
//       <Typography variant="h5">Speak in English:</Typography>
//       <Typography variant="body">{expectedText}</Typography>
//       <Button> Speaker </Button>
//       <Button
//         variant="contained"
//         color={listening ? 'secondary' : 'primary'}
//         onClick={() => setListening(!listening)}
//       >
//         {listening ? 'Listening...' : 'Start Listening'}
//       </Button>
//       <Typography variant="body1">Transcript: {transcript}</Typography>
      
//     </div>
//   );
// }

// export default VoiceRecognition;



import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function VoiceRecognition() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const expectedText = 'Hi'; // Replace with your expected text

  const startListening = () => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onstart = () => {
      setListening(true);
      setTranscript('');
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
    const isMatch = spokenText.toLowerCase() === expectedText.toLowerCase();

    if (isMatch) {
      // If the spoken text matches the expected text
      console.log('True', spokenText);
      // You can perform any actions or render specific content here
    } else {
      // If the spoken text does not match the expected text
      console.log('False:', spokenText);
      // You can perform different actions or render different content here
    }
  };

  const speakExpectedText = () => {
    speak(expectedText);
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

  return (
     <Card sx={{ maxWidth: 500, textAlign:"center" , mt:20, ml:75,backgroundColor:"rgb(241, 240, 232)"}}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Speak Below Word
        </Typography>
        <Grid container sx ={{mt:3}} >
        <Grid item sx={{ml:20,}}>
          <Typography variant="h4" color="text.secondary">
            { expectedText} 
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
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
     
     

  
  );
}

export default VoiceRecognition;

