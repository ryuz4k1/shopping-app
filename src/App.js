import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
