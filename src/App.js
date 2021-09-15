import Products from './pages/Products';
import Categories from './pages/Categories';
import Create from './pages/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
// import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    // secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
