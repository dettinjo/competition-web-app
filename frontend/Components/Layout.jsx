import Meta from "./Meta";
import AppBar from "./AppBar";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import { AuthContext } from "../Context/auth-context";

export default function Layout({ children }) {
  /*  const [userState, setUserState] = useState({
    token: null,
    userId: null,
    userRole: null,
    email: null,
  });

  const value = useMemo(() => ({ userState, setUserState }), [userState]); */

  return (
    <div>
      <Meta />
      <AppBar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
}
