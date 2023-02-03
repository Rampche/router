import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav className="ui pointing secondary menu">
          <div className="header item">React Router Demo</div>

          <Link className="item" to="/">
            Home
          </Link>

          <NavLink className="item" to="/dashboard">
            Dashboard
          </NavLink>
        </nav>
      </header>

      <div className="ui container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
