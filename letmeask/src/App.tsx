
import { NewRoom } from "./pages/NewRoom/NewRoom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room/Room";
import { AdminRoom } from "./pages/AdminRoom/AdminRoom";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/new" component={NewRoom} />
          <Route exact path="/rooms/:id" component={Room} />
          <Route exact path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
