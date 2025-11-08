import React from "react";
import "./HomePage.css";
import Chatbot from "../components/Chatbot";
import { Typography, Container, Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Container maxWidth="md" className="home-content">
        <Typography variant="h3" gutterBottom>
          Hey There! I'm Cal, Your AI Buddy. Need to Schedule Something? Just Ask Me!
        </Typography>
        <Box mt={4}>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN24wMnpwd2RkdnYydHhkanB4bXJ1d2Jra21nenpqM3p5a3JpbWlrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QXPdeQwJYXv6wKXy2G/giphy.gif"
            alt="Funny GIF"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Typography variant="body1" gutterBottom>
          Scheduling meetings can be a real hassle, with back-and-forth emails,
          conflicting schedules, and endless coordination.
        </Typography>
        <Typography variant="body1" gutterBottom>
          That's where Cal comes in! No more "What time works for you?" emails. Our friendly chatbot is here to make your
          life easier by handling all your meeting scheduling needs. With Cal,
          you can quickly find available time slots, send meeting invites, and
          keep track of your appointments – all in one convenient place.
        </Typography>
      </Container>
      <Chatbot />
    </div>
  );
};

export default HomePage;
