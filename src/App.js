import { CircularProgress } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./configs/theme";
import MessageAlert from "./containers/Message";
import { routes } from "./configs/router";

const extractRoutes = routes.map((route, index) => {
  const { path, exact, component } = route;
  return <Route path={path} exact={exact} key={index} component={component} />;
});

function App() {
  return (
    // ThemeProvider to the top level of component tree.
    // theme is used for all child components.
    <ThemeProvider theme={theme}>
      {/* Routing */}
      <BrowserRouter>
        {/* Suspense lets your components “wait” for something before they can render. */}
        <Suspense fallback={<CircularProgress color="primary" />}>
          <Switch>{extractRoutes}</Switch>
        </Suspense>
      </BrowserRouter>
      {/* <div id="_overlay"></div> */}
      <MessageAlert />
    </ThemeProvider>
  );
}

export default App;
