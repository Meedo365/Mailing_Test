import React, { useContext, useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Store } from "../context/store";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let store = useContext(Store);
  let [baseUrl] = store.url;
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();

  let login = () => {
    let url = `${baseUrl}/login`;

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    let data = {
      password,
      email,
    };
    fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          localStorage.setItem("inbox", result.data);
          navigate("/home");
        } else {
          setError(result.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError("An error occurred during login. Please try again.");
      });
  };

  return (
    <>
      <title>Login Page</title>
      <meta name="description" content="Login Page to the Assessment" />
      <div className="container mx-auto">
        <div className="toast">{props.error}</div>
        <div className="flex justify-center items-center h-screen">
          <Card className="w-3/4 md:w-1/2 lg:w-1/4">
            <h3 className="text-center font-extrabold text-2xl">Login</h3>
            <p className="text-red-500 text-sm text-center">{error}</p>
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  required
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button onClick={() => login()}>Submit</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
