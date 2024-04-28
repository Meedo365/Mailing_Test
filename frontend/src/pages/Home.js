import React, { useContext, useState, useEffect } from "react";
import NavbarWithCTAButton from "../components/Nav";
import { Card, Spinner, Table, Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Store } from "../context/store";
import { Link } from "react-router-dom";

function Home() {
  let store = useContext(Store);
  let [baseUrl] = store.url;
  let [msg, setMsg] = useState([]);
  let [userEmail, setEmail] = useState("");
  let [loading, setLoading] = useState(true);
  let [, setError] = useState("");
  let [unread, setUnread] = useState(0);

  useEffect(() => {
    Promise.all([loadUser(), loadMsgs()])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const loadMsgs = async () => {
    try {
      const token = localStorage.getItem("inbox");
      const url = `${baseUrl}/mails`;
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
      const unreadCount = data.filter((mail) => mail.isRead === false).length;
      setMsg(data);
      setUnread(unreadCount);
    } catch (error) {
      setError("An error occurred. Please try again.");
      throw error;
    }
  };

  const loadUser = async () => {
    try {
      const token = localStorage.getItem("inbox");
      const url = `${baseUrl}/token`;
      const response = await fetch(url, {
        headers: {
          "content-type": "application/json",
          "mailing-user": token,
        },
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const { data } = await response.json();
      setEmail(data.email);
    } catch (error) {
      setError("An error occurred. Please try again.");
      throw error;
    }
  };

  return (
    <>
      <title>Home Page</title>
      <meta name="description" content="Home Page to the Assessment" />
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
          <div>
            <Banner>
              <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 mt-3">
                <div className="mx-auto flex items-center">
                  {userEmail ? (
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                      <MdAnnouncement className="mr-4 h-4 w-4" />
                      <span className="[&_p]:inline">
                        Welcome{" "}
                        <p className="font-bold text-amber-500">{userEmail}</p>.
                        You have{" "}
                        <p className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500">
                          {unread} unread messages
                        </p>{" "}
                        out of {msg.length}
                      </span>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <Banner.CollapseButton
                  color="gray"
                  className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
                >
                  <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
              </div>
            </Banner>

            <div>
              <Card className="rounded-3xl my-4">
                <div className="mb-4 flex items-center justify-between">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Inbox
                  </h5>
                </div>

                <div className="overflow-x-auto">
                  <Table hoverable>
                    <Table.Head>
                      <Table.HeadCell>Subject</Table.HeadCell>
                      <Table.HeadCell>Content</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                      {msg.length === 0 ? (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell colSpan={3} className="text-center py-4">
                            No emails received yet.
                          </Table.Cell>
                        </Table.Row>
                      ) : (
                        msg.map((e, i) => (
                          <Table.Row
                            key={i}
                            className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${
                              e.isRead ? "read-msgs " : ""
                            }`}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {e.subject}
                            </Table.Cell>
                            <Table.Cell className="text-ellipsis">
                              {e.content}
                            </Table.Cell>
                            <Table.Cell>
                              <Link
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                to={`/message/${e.id}`}
                              >
                                View
                              </Link>
                            </Table.Cell>
                          </Table.Row>
                        ))
                      )}
                    </Table.Body>
                  </Table>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
