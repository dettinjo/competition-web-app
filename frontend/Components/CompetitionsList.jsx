import React, { useState, useEffect } from "react";
import CompetitionCard from "./CompetitionCard";
import Stack from "@mui/material/Stack";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_COMPETITIONS } from "../GraphQl/competition";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";

export default function Competitions() {
  const { error, loading, data } = useQuery(GET_ALL_COMPETITIONS, {
    notifyOnNetworkStatusChange: true,
  });
  const [competitions, setCompetition] = useState([]);

  useEffect(() => {
    if (data) {
      setCompetition(data.competitions);
    }
  }, [data]);

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

  return (
    <>
      {competitions.length > 0 && (
        <div>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            style={{ marginTop: 20 }}
          >
            Competitions
          </Typography>
          <Stack spacing={4}>
            {competitions.map((competition) => (
              <CompetitionCard competition={competition} />
            ))}
          </Stack>
        </div>
      )}
    </>
  );
}
