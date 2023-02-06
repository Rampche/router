import { Link, Outlet } from "react-router-dom";

const Stocks = () => {
  return (
    <div>
      <h2>Stocks</h2>
      <hr />
      <nav>
        <Link to="/stocks">News</Link>
        <Link to="/stocks/trending">Trending</Link>
        <Link to="/stocks/buy">Buy</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Stocks;
