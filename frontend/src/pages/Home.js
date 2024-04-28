import React from "react";
import NavbarWithCTAButton from "../components/Nav";
import { Icon } from "@iconify/react";
import { Card } from "flowbite-react";
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Table } from "flowbite-react";

function Home() {
  return (
    <>
      <title>Login Page</title>
      <meta name="description" content="Login Page to the Assessment" />
      <div className="container mx-auto">
        <NavbarWithCTAButton />

        <Banner>
          <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 mt-3">
            <div className="mx-auto flex items-center">
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <MdAnnouncement className="mr-4 h-4 w-4" />
                <span className="[&_p]:inline">
                  Welcome User's Name. You have{" "}
                  <p className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500">
                    3 unread messages
                  </p>
                </span>
              </p>
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
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      First Test
                    </Table.Cell>
                    <Table.Cell className="text-ellipsis">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        View
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      First Test
                    </Table.Cell>
                    <Table.Cell className="text-ellipsis">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        View
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      First Test
                    </Table.Cell>
                    <Table.Cell className="text-ellipsis">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        View
                      </a>
                    </Table.Cell>
                  </Table.Row>
                 
                </Table.Body>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
