import React from 'react';
import { NavLink } from 'react-router-dom';

import './FlipCard.css';

function FlipCard() {
  return (
    <div className="card-menu">
      <div className="flip-card-container" id="--hue: 220">
        <div className="flip-card ">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="sport1"
              ></img>
            </figure>
          </div>
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1593164842249-d74fc06dae05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="sport2"
              ></img>
            </figure>
            <div className="btnFlip">
              <NavLink activeClassName="active" to="/Sport/workout">
                <button className="btn-flipCard">Se Dépenser</button>
              </NavLink>
              <NavLink activeClassName="active" to="/Sport/relax">
                <button className="btn-flipCard">Se Rélaxer</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tpbmd8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="repas1"
              ></img>
            </figure>
          </div>
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1551218372-458e7a497df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                alt="repas2"
              ></img>
            </figure>
            <div className="btnFlip">
              <NavLink activeClassName="active" to="/FeelGoodRecipes/recipes">
                <button className="btn-flipCard">Idées Recettes</button>
              </NavLink>
              <NavLink activeClassName="active" to="/FeelGoodRecipes/restaurants">
                <button className="btn-flipCard">Idées Restaurants</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8emVuJTIweW9nYXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="zen1"
              ></img>
            </figure>
          </div>
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1610344264630-e77bc4bf5983?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8emVuJTIweW9nYXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="zen2"
              ></img>
            </figure>
            <div className="btnFlip">
              <NavLink activeClassName="active" to="/FeelZen/music">
                <button className="btn-flipCard">Zen Musique</button>
              </NavLink>
              <NavLink activeClassName="active" to="/FeelZen/quotes">
                <button className="btn-flipCard">Zen Citation</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
