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

const theme = createTheme();

export default function Submission() {
  const nextRouter = useRouter();
  const router = useClientRouter();
  const { id } = router.query;
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);

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
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (text && box) {
      const editedSubmission = {
        submissionBody: formData.get("submissionBody"),
        submissionDate: new Date(),
      };

      if (editedSubmission) {
        editSubmission({
          variables: {
            id: submissionData.submission._id,
            submissionBody: editedSubmission.submissionBody,
            submissionDate: editedSubmission.submissionDate,
          },
        });
      }

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
              <EditIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit Submittion for {submissionData.submission.competition.title}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                required="true"
                defaultValue={submissionData.submission.submissionBody}
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