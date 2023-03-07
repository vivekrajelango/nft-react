import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Route';
import ErrorBoundaries from './Components/ErrorBoundaries';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ErrorBoundaries>
          <Router />
        </ErrorBoundaries>
      </BrowserRouter>
    </div>
  );
}

export default App;
