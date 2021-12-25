import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { GET_ONE_COMPETITION } from "../../../GraphQl/competition";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { useClientRouter } from "use-client-router";
import {
  Card,
  Box,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function Competition() {
  const router = useClientRouter();
  const { id } = router.query;
  const [competition, setCompetition] = useState({});

  const { loading, error, data } = useQuery(GET_ONE_COMPETITION, {
    variables: { id },
  });

  /*   useEffect(() => {
    if (data) {
      setCompetition(data.competition);
      console.log(data);
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
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      error
    </Alert>;
  }

  return (
    <div>
      <h1>Competition</h1>
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
                    Title:
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="white"
                  >
                    {data.competition.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color="white"
                  >
                    Description:
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="white"
                  >
                    {data.competition.description}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color="white"
                  >
                    Until:
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="white"
                  >
                    Friday, 30. December 2021
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid>
              <CardActions sx={{padding: 2}}>
                <Link href="/">
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{ color: "white", borderRadius: 2 }}
                  >
                    Go Home
                  </Button>
                </Link>
              </CardActions>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </div>
  );
}
