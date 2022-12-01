import Header from "./Header";
import { Home } from "./Home";
import Basket from "./Basket";
import { useState, useEffect } from "react";
import axios from "axios";

function FoodPage() {
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const [oneFoodName, setOneFoodName] = useState([]);
  const [oneFoodPrice, setOneFoodPrice] = useState([]);
  const [oneFoodId, setOneFoodId] = useState([]);

  const API_endpoint = "http://localhost:5000/api/foods/";

  const [data, setData] = useState({
    name: "",
    price: "",
  });

  //change number of foods in cart
  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  //add food to cart
  const handleAdd = (food) => {
    const found = cartItems.find((x) => x.id === food.id);
    if (found) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...found, qty: found.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, qty: 1 }]);
    }
  };

  //add new food
  const handleSubmit = async () => {
    await axios.post(API_endpoint, {
      name: data.name,
      price: parseInt(data.price),
    });
  };

  //search by name
  const getByName = async () => {
    const res = await axios.get(API_endpoint + name);
    setOneFoodName(`
            name: ${res.data[0].name}, 
            price: ${res.data[0].price}
    `);
  };

  //search by price
  const getByPrice = async () => {
    const res = await axios.get(API_endpoint + "price/" + price);
    setOneFoodPrice(`
            name: ${res.data[0].name}, 
            price: ${res.data[0].price}
    `);
  };

  //search by id
  const getById = async () => {
    const res = await axios.get(API_endpoint + "id/" + id);
    setOneFoodId(`
            name: ${res.data[0].name}, 
            price: ${res.data[0].price},
            id: ${res.data[0].id}
    `);
  };

  //remove food from cart
  const handleRemove = (food) => {
    const found = cartItems.find((x) => x.id === food.id);
    if (found.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...found, qty: found.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("listOfSelectedFoods");
    setCartItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("listOfSelectedFoods", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    fetch(API_endpoint)
      .then((res) => res.json())
      .then((food) => setFoods(Object.values(food)));
  }, []);

  return (
    <div className="App col-1">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Home foods={foods} handleAdd={handleAdd}></Home>
        <Basket
          cartItems={cartItems}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        ></Basket>
      </div>
      <div>
        <h3>Add a food of your choice:</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleChange(e)}
            id="name"
            value={data.name}
            placeholder="name of food"
            type="text"
          />
          <input
            onChange={(e) => handleChange(e)}
            id="price"
            value={data.price}
            placeholder="price of food"
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
      <div>
        <p>All searches must be exact</p>
        <h3>Get one food by typing its name:</h3>
        <input
          id="getByName"
          onChange={(field) => setName(field.target.value)}
          type="text"
        />
        <br />
        {oneFoodName}
        <br />
        <button onClick={getByName}>Get by name</button>
      </div>
      <div>
        <h3>Get one food by typing its price:</h3>
        <input
          id="getByPrice"
          onChange={(field) => setPrice(field.target.value)}
          type="text"
        />
        <br />
        {oneFoodPrice}
        <br />
        <button onClick={getByPrice}>Get by price</button>
      </div>
      <br />
      <div>
        <h3>Get one food by typing its id:</h3>
        <input
          id="getById"
          onChange={(field) => setId(field.target.value)}
          type="text"
        />
        <br />
        {oneFoodId}
        <br />
        <button onClick={getById}>Get by Id</button>
      </div>
    </div>
  );
}

export default FoodPage;
