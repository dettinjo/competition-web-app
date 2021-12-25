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

function SubmissionCard({ submission }) {
  const submissionDate = submission.submissionDate;
  const endDate = submission.competition.endDate;

  const diffDays = getDiff(submissionDate, endDate);
  const [markWinner, { error, loading, data }] = useMutation(EDIT_USER);

  const handleWinnerButton = () => {
    markWinner({
      variables: {
        id: submission.user._id,
        winner: true,
      },
    });
  };
  return (
    <Card sx={{ boxShadow: 15, borderRadius: 4 }}>
      <Grid>
        <Box bgcolor="#0B142B">
          <Grid>
            <Box>
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
                    value={submission.rating}
                    readOnly
                  />
                </Box>
              </CardContent>
            </Box>
          </Grid>
          <Grid>
            <CardActions>
              <Link
                href="/submission/[id]"
                as={`/submission/${submission._id}`}
              >
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ color: "white", borderRadius: 2 }}
                >
                  Edit
                </Button>
              </Link>
              <Link
                href="/submission/[id]/rate"
                as={`/submission/${submission._id}/rate`}
              >
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ color: "white", borderRadius: 2 }}
                >
                  Rate
                </Button>
              </Link>
              <Button
                size="medium"
                variant="contained"
                sx={{ color: "white", borderRadius: 2 }}
                onClick={handleWinnerButton}
              >
                Mark as Winner
              </Button>
            </CardActions>
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
}

export default SubmissionCard;
