import { Link, NavLink, Outlet, Profile } from "react-router-dom";

function App() {
  const user = {
    name: "Jonas",
    age: 25,
  };

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

          <NavLink className="item" to={`/profile/${user.name}/${user.age}`}>
            Profile
          </NavLink>

          <NavLink className="item" to="/login">
            Login
          </NavLink>

          <NavLink className="item" to="/stocks">
            Stocks
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
