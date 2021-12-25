import SubmissionList from "../../Components/SubmissionList";
import Router from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../GraphQl/user";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React, { useState, useEffect } from "react";

export default function Submission() {
  const userId = "61b161e725e8537bc15985bf";
  const [submissions, setSubmissions] = useState({});
  const { error, loading, data } = useQuery(GET_ONE_USER, {
    variables: {
      id: userId,
    },
  });

  /* useEffect(() => {
    if (data) {
      setSubmissions(data.submissions);
      console.log(submissions);
    }
  }, [data]); */

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <div style={{ marginTop: 20 }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {JSON.stringify(error.networkError.result)}
        </Alert>
      </div>
    );
  }

  if (data.user) {
    return (
      <div>
        <SubmissionList
          onClose={() => Router.back()}
          submissions={data.user.submissions}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>No Submissions</h1>
    </div>
  );
}
