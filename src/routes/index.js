
import App from '../components/App';
import Film from '../components/Film';
import Residents from '../components/Residents';
import Planet from '../components/Planet';
import { Route } from "react-router-dom";
const Routes = () => {
  return (
    <div>
        <Route exact path="/" component={App} />
        <Route exact  path="/planets/:id/films" component={Film} />
        <Route exact  path="/planets/:id/residents" component={Residents} />
        <Route exact  path="/planets/:id" component={Planet} />
    </div>
  );
}

export default Routes;
