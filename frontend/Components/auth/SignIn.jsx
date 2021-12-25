import React, { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import useLoginQuery from "../../hooks/loginQuery";
import { LOGIN_QUERY } from "../../GraphQl/user";
import { useAuthToken } from "../../hooks/authToken";
import { userContext } from "../../Context/auth-context";

const theme = createTheme();

function SignIn() {
  const { state, dispatch } = useContext(userContext);

  const [queryLogin, { loading, error: loginError, data }] =
    useLazyQuery(LOGIN_QUERY);

  useEffect(() => {
    if (state) {
      this.forceUpdate();
    }
  }, [state]);

  const router = useRouter();

  const [_, setAuthToken, __] = useAuthToken();
  const client = useApolloClient();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { email, password } = loginState;

    if (email.length > 0 && password.length > 0) {
      queryLogin({
        variables: {
          email: email,
          password: password,
        },
        onCompleted: (data) => {
          setAuthToken(data.login.token);
        },
      })
        .then(async (result) => {
          if (result.data) {
            dispatch({
              token: result.data.login.token,
              userId: result.data.login.userId,
              userRole: result.data.login.userRole,
              email: result.data.login.email,
            });
            console.log(state);
          }
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          setError("Benutzername und/oder Passwort stimmt nicht!");
        });
    } else {
      setError("E-Mail und Passwort dürfen nicht leer sein!");
    }
  };

  return (
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && <p tw="my-2 text-sm text-red-600">{error}</p>}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
