import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'


function CompetitionCard({ competition }) {
  return (
    <Card sx={{ boxShadow: 15, borderRadius: 4 }}>
      <Grid justifyContent="center">
        <Grid xs={12}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="400"
            src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2678&q=80"
          />
        </Grid>

        <Box bgcolor="#0B142B" xs={12}>
          <Box>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" color="white">
                {competition.title}
              </Typography>
              <Typography variant="body1" color="white">{competition.excerpt}</Typography>
            </CardContent>
          </Box>
          <Grid xs={12} sx={{ p: 1 }}>
            <CardActions>
              <Link
                href="/competition/[id]/submit"
                as={`/competition/${competition._id}/submit`}
              >
                <Button
                  size="medium"
                  variant="contained"

                  sx={{ color: "white", borderRadius: 2 }}
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Link>
              <Link
                href="/competition/[id]"
                as={`/competition/${competition._id}`}
              >
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ color: "white", borderRadius: 2 }}
                >
                  Learn more
                </Button>
              </Link>
            </CardActions>
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
}

export default CompetitionCard;
