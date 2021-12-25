import React, { useState, useEffect } from "react";
import { GET_ONE_COMPETITION } from "../../../GraphQl/competition";
import { useMutation, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useClientRouter } from "use-client-router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CREATE_SUBMISSION,
  GET_ALL_SUBMISSIONS,
} from "../../../GraphQl/submissions";
import { useRouter } from "next/router";

const theme = createTheme();

export default function CompetitionSubmit() {
  const router = useClientRouter();
  const nextRouter = useRouter();
  const { id } = router.query;
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);

  const [
    createSubmission,
    {
      data: submissionData,
      loading: submissionLoading,
      error: submissionError,
    },
  ] = useMutation(CREATE_SUBMISSION);

  const {
    error: competitionError,
    loading: competitionLoading,
    data: competitionData,
  } = useQuery(GET_ONE_COMPETITION, {
    variables: { id },
  });

  if (competitionLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (competitionError) {
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      error
    </Alert>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (text && box) {
      const submission = {
        submissionBody: formData.get("submissionBody"),
        submissionDate: new Date(),
        competition: competitionData.competition._id,
      };

      if (submission) {
        createSubmission({
          variables: {
            submissionBody: submission.submissionBody,
            submissionDate: submission.submissionDate,
            competition: submission.competition,
          },
          refetchQueries: [{ query: GET_ALL_SUBMISSIONS }],
          awaitRefetchQueries: true,
        });
      }

      if (submissionError) {
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          error
        </Alert>;
      }

      if (submissionLoading) {
        return (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        );
      }
      if (!submissionLoading && !submissionError && submissionData) {
        nextRouter.push("/");
      }
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
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
              <SendIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Submit for {competitionData.competition.title}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                required="true"
                multiline
                rows={13}
                name="submissionBody"
                label="Enter Submission"
                type="text"
                id="submissionBody"
                onChange={(e) => setText(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="false"
                    color="primary"
                    required="true"
                    error={!box}
                  />
                }
                label="Choose when you have read the"
                onChange={(e) => setBox(e.target.checked)}
              />
              <Link href="/conditions">Conditions</Link>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
