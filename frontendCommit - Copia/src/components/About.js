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
        frontend we installed router.
      </p>
    </div>
  );
};

export default About;
