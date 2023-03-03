import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./theme";
import { router } from "./Routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
