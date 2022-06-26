import React from "react";
import "./Portfolio.css";
import Nav from "../nav/Nav";
import portfolio from "./Portfolio_items";

function Portfolio() {
  return (
    <section id="Portfolio">
      <Nav />
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {portfolio.map(({ id, IMG, title, git, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={IMG} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={git} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
