import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';

const App = () => {
  return <div>
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/detail/:idx' component={Detail} />
    </Router>
  </div>
     
}

export default App;
