import './App.css';
import FormComponent from './components/FormComponent.js';
import {uploadHTMLComponent} from "./components/uploadHTMLComponent.js"
import {scheduleCreatorComponent} from "./components/scheduleCreatorComponent.js"
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ut-registration-optimizer/" component={FormComponent}/>
        <Route path="/ut-registration-optimizer/uploadHTML/" component={uploadHTMLComponent}/>
        <Route path="/ut-registration-optimizer/generateSchedule/" component={scheduleCreatorComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
