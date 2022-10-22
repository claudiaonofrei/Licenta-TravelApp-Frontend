import "./App.css";
import MainRouter from "./router";
import { AuthProvider } from "./auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, fab);

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
