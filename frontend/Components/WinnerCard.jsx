import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import getDiff from "../helpers/date";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_USER } from "../GraphQl/user";
import { Box } from "@mui/material";

function SubmissionCard() {
  return (
    <div>
      <h1>Winner: </h1>
      <Card sx={{ boxShadow: 15, borderRadius: 4, marginTop: 5 }}>
        <Grid>
          <Box bgcolor="#0B142B">
            <Grid>
              <Box>
                <Grid xs={12}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="400"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                </Grid>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color="white"
                  >
                    From:
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="white"
                  >
                    User name
                    {/* {submission.user.name}*/}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color="white"
                  >
                    For Competition:
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="white"
                  >
                    Competition title
                    {/*submission.competition.title} */}
                  </Typography>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      color="white"
                    >
                      Rating:
                    </Typography>
                    <Rating
                      size="large"
                      name="read-only"
                      color="white"
                      value={5}
                      readOnly
                    />
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </div>
  );
}

export default SubmissionCard;
