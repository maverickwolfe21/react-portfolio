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
      screenshot:
        "https://private-user-images.githubusercontent.com/32653569/291091626-ba46f41d-7b9d-4268-9c83-a2f191007348.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI0MTI1NjUsIm5iZiI6MTcxMjQxMjI2NSwicGF0aCI6Ii8zMjY1MzU2OS8yOTEwOTE2MjYtYmE0NmY0MWQtN2I5ZC00MjY4LTljODMtYTJmMTkxMDA3MzQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA2VDE0MDQyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBkNTRkMmJiNTJmZTM3NzEzZWZmYTQ4YjVkNmNkOTUwMThiMGM2OGFlMzI1YThkMTY1M2YwYTBhNzhhYTdhOTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.wDs3d7FvEStvJmTVGFWxIz3yno5b8csYySlYUVQ-KV0",
    },
    {
      title: "Coding Quiz",
      gitHub: "https://github.com/maverickwolfe21/coding-quiz",
      deploymentLink: "https://maverickwolfe21.github.io/coding-quiz/",
      screenshot:
        "https://private-user-images.githubusercontent.com/32653569/291097349-9c3af69f-5dd0-4335-ac6c-94567897a6f5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI0MTI1NTIsIm5iZiI6MTcxMjQxMjI1MiwicGF0aCI6Ii8zMjY1MzU2OS8yOTEwOTczNDktOWMzYWY2OWYtNWRkMC00MzM1LWFjNmMtOTQ1Njc4OTdhNmY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA2VDE0MDQxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg1NGM3OTBlZGY4MWQ5N2E3ODY0YjUwYTljN2QxOWRlYzcwNjMxYzM3YzhhOWMwYmZlOGM2M2UzYWIwZTYwZmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.S3uK3l0WEMYE2C5rRcbvJz2I1VE0LZnpolPwJSindyE",
    },
    {
      title: "Note Taker",
      gitHub: "https://github.com/maverickwolfe21/note-taker",
      deploymentLink: "https://note-taker-mav-3bb127077ecf.herokuapp.com/",
      screenshot:
        "https://private-user-images.githubusercontent.com/32653569/303069682-d3ae6ff7-8a5b-4e57-bbfd-cb576623ee7c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI0MTI1MzgsIm5iZiI6MTcxMjQxMjIzOCwicGF0aCI6Ii8zMjY1MzU2OS8zMDMwNjk2ODItZDNhZTZmZjctOGE1Yi00ZTU3LWJiZmQtY2I1NzY2MjNlZTdjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA2VDE0MDM1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdlYTI1ZTQyNmE4MjQ4Njc1YTRlYzY0ZTA1NjU3NjliNDgwYjEyMWY4MmY0MDczMGVhNGYyMzcyMDI0NDFlM2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.FO2v_qytzAwKSnntW16StAYZ0znQ7i_kSqdkg5n-qyI",
    },
    {
      title: "Password Generator",
      gitHub: "https://github.com/maverickwolfe21/password-generator",
      deploymentLink: "https://maverickwolfe21.github.io/password-generator/",
      screenshot:
        "https://private-user-images.githubusercontent.com/32653569/282990058-c93dc5ce-b023-4404-908b-905e66b48277.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI0MTI1NzUsIm5iZiI6MTcxMjQxMjI3NSwicGF0aCI6Ii8zMjY1MzU2OS8yODI5OTAwNTgtYzkzZGM1Y2UtYjAyMy00NDA0LTkwOGItOTA1ZTY2YjQ4Mjc3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA2VDE0MDQzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM2YjJhNGY5NDU2MjkzOGU1OWZjMDYxZjFkZTFiOGQyOWNmOGUxMjgxOTExNjdlZGFmYjE0OGYyMGI1ODMwOGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JjFmJZ4jVldoL2W8gR2MWFY1nccxrHmeF84LEsmV0KA",
    },
    {
      title: "Workday Scheduler",
      gitHub: "https://github.com/maverickwolfe21/work-day-scheduler",
      deploymentLink: "https://maverickwolfe21.github.io/work-day-scheduler/",
      screenshot:
        "https://private-user-images.githubusercontent.com/32653569/291078141-01518f4f-08e0-497a-a406-9e5330145123.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI0MTI1ODQsIm5iZiI6MTcxMjQxMjI4NCwicGF0aCI6Ii8zMjY1MzU2OS8yOTEwNzgxNDEtMDE1MThmNGYtMDhlMC00OTdhLWE0MDYtOWU1MzMwMTQ1MTIzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA2VDE0MDQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM3ZDIxYzkyNDMzOTkzODY3MTNiZGEwNzlmMzJmZGYxYWY5ODI3ZGUzNmE5NWRmZDlhYmNiZGZiNzJlOGYyYjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.PYykvJt1g_p8mi7Rc-gLp32Tg5REGFWwMU2foaiLj1M",
    },
    {
      title: "Horiseon",
      gitHub: "https://github.com/maverickwolfe21/horiseon-site",
      deploymentLink: "https://maverickwolfe21.github.io/horiseon-site/",
      screenshot:
        "https://private-user-images.githubusercontent.com/32653569/274464818-62c46f09-ad5b-4f7a-833b-a41fccdea7ab.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI0MTMzMjEsIm5iZiI6MTcxMjQxMzAyMSwicGF0aCI6Ii8zMjY1MzU2OS8yNzQ0NjQ4MTgtNjJjNDZmMDktYWQ1Yi00ZjdhLTgzM2ItYTQxZmNjZGVhN2FiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA2VDE0MTcwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgxZGRkM2ZlNTEwZDVlNjRmZmUzZDZjYWY2NmU1MWU5NzhlNDc2ZDNjZTFkODhmOTdiMWRjZTk2NGIzYTA3NDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hu3cpnpDI30Fpva_PQzu5XtthVACss8QXAas4LxOOMI",
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
