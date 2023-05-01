import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import Banner from "../images/pizza.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner}` }}>
        <div className="headerContainer">
          <h1>Herb Empire</h1>
          <p>Bringing class to cuisine</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
