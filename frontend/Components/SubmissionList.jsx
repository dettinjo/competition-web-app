import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";
import { GET_ALL_SUBMISSIONS } from "../GraphQl/submissions";
import SubmissionCard from "./SubmissionCard";

export default function Submissions({submissions}) {
  console.log(submissions)
  return (
    <>
      {submissions.length > 0 && (
        <div>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            style={{ marginTop: 20 }}
          >
            Submissions
          </Typography>
          <Stack spacing={4}>
            {submissions.map((submission) => (
              <SubmissionCard submission={submission} />
            ))}
          </Stack>
        </div>
      )}
    </>
  );
}
