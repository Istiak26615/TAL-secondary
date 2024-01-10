import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import basis from '../../assets/img/basislogo.svg'
import ecab from '../../assets/img/E-Cab.png'
import duns from '../../assets/img/duns-logo-1.png'
import { firebase, db } from '../../firebase';
import swal from 'sweetalert'
// import { Container, Grid, Typography } from '@material-ui/core';

const FooterWrapper = styled.footer`
  background-color: transparent;
  padding: 48px 0;
  margin-top: auto;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        swal("Your message has been sent successfully", "",'success');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FooterWrapper >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} className="section">
            <Typography sx={{ textAlign: "center", fontSize: "2rem", color: "white" }} gutterBottom>
              Member of
            </Typography>
            {/* <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mollis orci, vitae commodo metus consectetur ac.
            </Typography> */}
            <Box sx={{ display: "flex", justifyContent:"space-evenly",alignItems:"center"  }}>
              <img width="90px" src={basis} alt='' />
              <img width="110px" src={ecab} alt='' />
              <img width="110px" src={duns} alt='' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className="section">
            <Typography sx={{ fontSize: "2rem", color: "white", textAlign:"center" }} gutterBottom>
              Contact and Address
            </Typography>
            <Typography variant="body2" sx={{ color: "white", textAlign:"center" }}>
              Progress Tower, 4th floor,<br />
              House #01, Road #23, Gulshan 1,<br />
              Dhaka 1212, Bangladesh<br />
              Phone:<br />
              +880248811161<br />
              +880248811162 <br />
              Email: info@techanalyticaltd.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} >
            <Typography sx={{ fontSize: "2rem", color: "white", textAlign:"center" }} gutterBottom>
              Send Message
            </Typography>
            

           
            {/* contact firebase */}
           <Box sx={{textAlign:"center"}}>
            <form className="form" onSubmit={handleSubmit}>
            
              <TextField
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  m: ".5rem",
                  '& input': {
                    color: 'white', // Change the input text color
                  },
                  '& ::placeholder': {
                    color: 'white', // Change the placeholder text color
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', // changes label color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // changes outline color
                    },
                    '&:hover fieldset': {
                      borderColor: '#f7e7ce', // changes outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#f7e7ce', // changes outline color when focused
                    },
                  },
                }}
              />

              <TextField
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  m: ".5rem",
                  '& input': {
                    color: 'white', // Change the input text color
                  },
                  '& ::placeholder': {
                    color: 'white', // Change the placeholder text color
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', // changes label color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // changes outline color
                    },
                    '&:hover fieldset': {
                      borderColor: '#f7e7ce', // changes outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#f7e7ce', // changes outline color when focused
                    },
                  },
                }}
              />


              <TextField
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  color:"white",
                  m: ".5rem",
                  '& input': {
                    color: 'white', // Change the input text color
                  },
                  '& ::placeholder': {
                    color: 'white', // Change the placeholder text color
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', // changes label color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // changes outline color
                    },
                    '&:hover fieldset': {
                      borderColor: '#f7e7ce', // changes outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#f7e7ce', // changes outline color when focused
                    },
                  },
                }}
              /><br />

              <Button
                type="submit"
                // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                variant="contained" sx={{ margin: 2, marginLeft: 1 }}
              >
                Submit
              </Button>
            </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
