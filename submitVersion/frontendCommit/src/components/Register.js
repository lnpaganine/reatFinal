import "../App.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <form>
      <p>Name: </p>
      <textArea></textArea>
      <p>Adress: </p>
      <textArea></textArea>
      <p>Email: </p>
      <textArea></textArea>
      <br></br>
      <br></br>
      <button>
        <Link to="/food">Submit</Link>
      </button>
    </form>
  );
}

export default Register;
