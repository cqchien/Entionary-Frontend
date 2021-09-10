import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./configs/theme";
import MessageAlert from "./containers/Message";
import RegisterPage from "./pages/register";

function App() {
  return (
    // ThemeProvider to the top level of component tree.
    // theme is used for all child components.
    <ThemeProvider theme={theme}>
      <RegisterPage />
      {/* <div id="_overlay"></div> */}
      <MessageAlert />
    </ThemeProvider>
  );
}

export default App;
