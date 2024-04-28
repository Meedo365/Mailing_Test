import React, { useContext, useState, useEffect } from "react";
import NavbarWithCTAButton from "../components/Nav";
import { Card, Spinner } from "flowbite-react";
import { Store } from "../context/store";
import { useParams } from "react-router-dom";

function Message() {
  let store = useContext(Store);
  let [baseUrl] = store.url;
  let [mail, setMail] = useState({});
  let [, setError] = useState("");
  let { id } = useParams();
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMail();
  }, []);

  const loadMail = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("inbox");
      const url = `${baseUrl}/mail/${id}`;
      const response = await fetch(url, {
        headers: {
          "content-type": "application/json",
          "mailing-user": token,
        },
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      const { data } = await response.json();
      setMail(data);
    } catch (error) {
      setError("An error occurred. Please try again.");
      throw error;
    }
    setLoading(false);
  };
  
  return (
    <>
      <title>Message Page</title>
      <meta name="description" content="Message Page to the Assessment" />

      <div className="container mx-auto">
        <NavbarWithCTAButton />

        {loading && (
          <div className="flex justify-center items-center h-[80vh]">
            <Spinner
              color="warning"
              aria-label="Warning spinner example"
              size="xl"
            />
          </div>
        )}
        {!loading && (
          <div className="flex justify-center items-center">
            {mail && (
              <Card
                className="max-w-sm min-w-[400px]  overflow-hidden"
                horizontal
              >
                <div className="static p-4">
                  <p>
                    From: <span className="text-amber-500">{mail.from}</span>
                  </p>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {mail.subject}
                  </h5>
                </div>

                <div className="scrollable-content overflow-y-auto px-4 py-0">
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {mail.content}
                  </p>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Message;
