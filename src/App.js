import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/js/NavBar";
import Welcome from "./components/js/Welcome";
import CreateGroup from "./components/js/CreateGroup";

function App() {
  const [user] = useAuthState(auth);

  return (
    <main>
      <NavBar />
      {user ? <CreateGroup /> : <Welcome />}
    </main>
  );
}
export default App;
