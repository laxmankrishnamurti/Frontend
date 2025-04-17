import { useSelector, useDispatch } from "react-redux";
import {
  handleIncUserAge,
  handleUpdateUsername,
  handleLoginStatus,
} from "./stores/UserStore/UserStore";
import "./App.css";

function App() {
  let data = useSelector((state) => state);

  function handleUsername(e) {
    e.preventDefault();
    handleUpdateUsername(e.target[0].value);
    e.target[0].value = "";
  }

  function handleUserage(e) {
    e.preventDefault();
    handleIncUserAge(e.target[0].value);
    e.target[0].value = "";
  }

  return (
    <>
      <div>
        <form onSubmit={handleUsername}>
          <input
            type="text"
            placeholder="Enter username"
            className="border-2 border-red-500 px-1 py-1 outline-none rounded-md"
          />
          <button
            type="submit"
            className="bg-pink-400 text-white px-4 py-2 rounded-md mx-2 my-2"
          >
            Update Username
          </button>
        </form>

        <form onSubmit={handleUserage}>
          <input
            type="number"
            placeholder="Increase useage by"
            className="border-2 border-red-500 px-1 py-1 outline-none rounded-md"
          />
          <button
            type="submit"
            className="bg-green-400 px-4 py-2 rounded-md mx-2 my-2"
          >
            Increase UserAge
          </button>
        </form>

        <button onClick={handleLoginStatus} className="bg-sky-400 px-4 py-2">
          Login
        </button>

        <p>isLoggedIn : {String(data.login_status)}</p>
        <p>Username is : {data.username}</p>
        <p>User age is : {data.age}</p>
        <p>
          User gitHub profile URL :{" "}
          <a href={data.github_profile} target="_blank">
            Go
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
