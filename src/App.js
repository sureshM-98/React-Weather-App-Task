import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddUser from './components/AddUser';
import Users from './components/Users';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AddUser} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/weather" component={Weather} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
