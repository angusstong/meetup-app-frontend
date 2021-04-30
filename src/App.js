import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  const api_url = "http://localhost:3001/meetups";

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage api_url={api_url} />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage api_url={api_url} />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
