import React from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import { Item } from '@mui/material';
import Card from "@mui/material/Card";
import { Paper, Box } from "@mui/material";
// import { CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Portfolio = () => {
  const projects = [
    {
      title: "Weather Dashboard",
      gitHub: "https://github.com/maverickwolfe21/weather-dashboard",
      deploymentLink: "https://maverickwolfe21.github.io/weather-dashboard/",
      screenshot: "/assets/weather-dashboard.png",
    },
    {
      title: "Coding Quiz",
      gitHub: "https://github.com/maverickwolfe21/coding-quiz",
      deploymentLink: "https://maverickwolfe21.github.io/coding-quiz/",
      screenshot: "/assets/coding-quiz.png",
    },
    {
      title: "Note Taker",
      gitHub: "https://github.com/maverickwolfe21/note-taker",
      deploymentLink: "https://note-taker-mav-3bb127077ecf.herokuapp.com/",
      screenshot: "/assets/note-taker.png",
    },
    {
      title: "Password Generator",
      gitHub: "https://github.com/maverickwolfe21/password-generator",
      deploymentLink: "https://maverickwolfe21.github.io/password-generator/",
      screenshot: "/assets/password-generator.png",
    },
    {
      title: "Workday Scheduler",
      gitHub: "https://github.com/maverickwolfe21/work-day-scheduler",
      deploymentLink: "https://maverickwolfe21.github.io/work-day-scheduler/",
      screenshot: "/assets/workday-scheduler.png",
    },
    {
      title: "Horiseon",
      gitHub: "https://github.com/maverickwolfe21/horiseon-site",
      deploymentLink: "https://maverickwolfe21.github.io/horiseon-site/",
      screenshot: "/assets/horiseon.png",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-medium text-3xl text-center">Projects</h1>
      <div className="grid grid-cols-3 gap-5 gap-y-6">
        {projects.map((p) => (
          <Card>
            <CardMedia sx={{ height: 200, width: 380 }} image={p.screenshot} title={p.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.title}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" href={p.gitHub} target="_blank">
                GitHub
              </Button>
              <Button size="small" href={p.deploymentLink} target="_blank">
                Demo
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
