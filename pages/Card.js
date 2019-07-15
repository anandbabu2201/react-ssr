import './Card.css';

const Card = (props) =>  (
    <div className="card">
      <div className="front">
        <img src="/static/juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>sample Card <span className="price">$50</span></h3> 
          <p>sample data to check the server side rendering from nextJs and react with redux state management.</p>
        </div>
      </div>
    </div>
);

export default Card;
