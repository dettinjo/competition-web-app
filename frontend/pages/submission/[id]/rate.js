import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useQuery, useMutation } from "@apollo/client";
import { useClientRouter } from "use-client-router";
import {
  EDIT_SUBMISSION,
  GET_ONE_SUBMISSION,
} from "../../../GraphQl/submissions";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const theme = createTheme();

export default function Submission() {
  const nextRouter = useRouter();
  const router = useClientRouter();
  const { id } = router.query;
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const {
    loading: submissionLoading,
    error: submissionError,
    data: submissionData,
  } = useQuery(GET_ONE_SUBMISSION, {
    variables: { id },
  });

  const [
    editSubmission,
    {
      data: editSubmissionData,
      loading: editSubmissionLoading,
      error: editSubmissionError,
    },
  ] = useMutation(EDIT_SUBMISSION);

  if (submissionLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (submissionError) {
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      error
    </Alert>;
  }

  const handleSubmit = (event) => {
   

    if (value !== 0) {
      editSubmission({
        variables: {
          id: submissionData.submission._id,
          rating: value,
        },
      });

      if (editSubmissionError) {
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          error
        </Alert>;
      }

      if (editSubmissionLoading) {
        return (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        );
      }
      if (!editSubmissionLoading && !editSubmissionError) {
        nextRouter.push("/submission/all");
      }
      console.log("EDITED: " + editSubmissionData);
    }
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <RateReviewIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Submittion for {submissionData.submission.competition.title}
              from {submissionData.submission.user.name}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: 600, alignItems: "center" }}
            >
              <TextField
                disabled
                margin="normal"
                fullWidth
                defaultValue={submissionData.submission.submissionBody}
                multiline
                rows={13}
                name="submissionBody"
                type="text"
                id="submissionBody"
                onChange={(e) => setText(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                size="large"
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2, width: 300 }}
            >
              Rate
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
