import SubmissionList from "../../Components/SubmissionList";
import { GET_ALL_SUBMISSIONS } from "../../GraphQl/submissions";
import { useQuery, useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Router from "next/router";
import React, { useState, useEffect } from "react";

export default function Submission() {
  const { error, loading, data } = useQuery(GET_ALL_SUBMISSIONS);

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
  if (data) {
    return (
      <div>
        <SubmissionList
          onClose={() => Router.back()}
          submissions={data.submissions}
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
