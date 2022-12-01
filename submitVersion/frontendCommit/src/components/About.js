import React from "react";

const About = () => {
  return (
    <div>
      <h1>Documentation</h1>
      <h2>Use instructions</h2>
      <p>
        Our app begins with a sign in page, if you dont have a user you can
        click register to create one, otherwise when clicked sigin the app takes
        you to the food page where you can find the foods in our mongoDB
        database and add or remove them to the cart, when finished click
        checkout to finish the demo. You can also add new foods to the menu or
        search for specific itens by name, price or id, hope you enjoy.
      </p>

      <h2>List of features</h2>
      <ul>
        <li>Sign in page</li>
        <li>Register page</li>
        <li>Displaying foods from mongoDB</li>
        <li>Adding foods to mongoDB</li>
        <li>Search by id</li>
        <li>Search by name</li>
        <li>Search by price</li>
        <li>Add to cart</li>
        <li>Remove from cart</li>
      </ul>
      <h2>Build and run</h2>
      <p>
        For our project we installed express and mongoose in backend. For
        frontend we installed router and axios. To run the backend use the
        command npm run dev, and to start frontend use npm start.
      </p>
      <h2>Sources</h2>
      <h3>Images</h3>
      <p>
        Pictures from <a href="images.pexels.com/photos"></a>
        images.pexels.com/photos
      </p>
      <ul>
        <li>
          Pizza image:{" "}
          <a href="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg">
            https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg
          </a>
        </li>
        <li>
          Soda image:{" "}
          <a href="https://www.shutterstock.com/image-photo/three-cola-glass-ice-cubes-260nw-1675156588.jpg">
            https://www.shutterstock.com/image-photo/three-cola-glass-ice-cubes-260nw-1675156588.jpg
          </a>
        </li>
        <li>
          New foods image:
          <a href="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=800">
            https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=800
          </a>
        </li>
      </ul>
      <h3>Tutorials used as inspiration</h3>
      <ul>
        <li>
          {" "}
          mongoDBAtlas inpired by:
          <a href="https://www.youtube.com/watch?v=nUbNn0voiBI">
            https://www.youtube.com/watch?v=nUbNn0voiBI
          </a>
        </li>
        <li>
          Frontend of shopping cart done by following:{" "}
          <a href="https://youtu.be/AmIdY1Eb8tY">
            "https://youtu.be/AmIdY1Eb8tY"
          </a>
        </li>
        <li>
          Post using axios done by following:{" "}
          <a href="https://youtu.be/9KaMsGSxGno"></a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default About;
