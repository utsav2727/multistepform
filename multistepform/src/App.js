import MultiStepForm from "./components/MultiStepForm";
import './App.css';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import Header from "./components/Header";

const theme = createTheme({
  typography: {
    fontFamily: 'Red Hat Display, sans-serif',
  },
  palette: {
    primary: {
      main: "rgb(123, 31, 162)", // Black color
    },
  },
  shape: {
    borderRadius: 10, // Rounded corners for buttons
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bgdiv">
        <div className="bg-overlay">
          <div className="app-container">
            <Header/>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
