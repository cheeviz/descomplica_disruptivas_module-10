import { ThemeProvider } from "@mui/material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ListarTarefa />
      </ThemeProvider>
    </div>
  );
}

export default App;
