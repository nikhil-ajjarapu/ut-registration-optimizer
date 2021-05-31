import './App.css';
import FormComponent from './components/FormComponent.js';
import {uploadHTMLComponent} from "./components/uploadHTMLComponent.js"
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FormComponent}/>
        <Route path="/uploadHTML/:urls" component={uploadHTMLComponent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
