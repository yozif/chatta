import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/js/NavBar";
import Chat from "./components/js/Chat";
import Welcome from "./components/js/Welcome";

function App() {
  const [user] = useAuthState(auth);

  return (
    <main>
      <NavBar />
      {user ? <Chat /> : <Welcome />}
    </main>
  );
}
export default App;
