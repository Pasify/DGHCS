import { LoginProvider } from "./context/LoginContext";
import RoutesLayout from "./routes/RoutesLayout";
function App() {
  return (
    <LoginProvider>
      <RoutesLayout />
    </LoginProvider>
  );
}

export default App;
