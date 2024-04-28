import React from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
function Login() {
  return (
    <>
      <title>Login Page</title>
      <meta name="description" content="Login Page to the Assessment" />
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <Card className="w-3/4 md:w-1/2 lg:w-1/4">
            <h3 className="text-center font-extrabold text-2xl">Login</h3>
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Enter Email"
                  required
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
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
