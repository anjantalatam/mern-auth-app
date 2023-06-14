import { useState } from "react";

const BE_ENDPOINT = "http://localhost:3000/api";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BE_ENDPOINT}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-slate-600 shadow-xl">
        <form onSubmit={registerUser}>
          <div className="card-body">
            <p className="text-3xl text-white font-bold mb-3">Register</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="input w-full max-w-xs"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="input w-full max-w-xs"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="input w-full max-w-xs"
            />
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
