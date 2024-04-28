import React from "react";
import NavbarWithCTAButton from "../components/Nav";
import { Card } from "flowbite-react";
function Message() {
  return (
    <>
      <title>Message Page</title>
      <meta name="description" content="Message Page to the Assessment" />

      <div className="container mx-auto">
        <NavbarWithCTAButton />

        <div className="flex justify-center items-center">
          <Card className="max-w-sm overflow-hidden" horizontal>
            <div className="static p-4">
              <p>
                From: <span className="text-amber-500">ahmed@gmail.com</span>
              </p>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </div>

            <div className="scrollable-content overflow-y-auto p-4">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Here are the biggest
                enterprise technology acquisitions of 2021 so far, in reverse
                chronological order. Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Here are the biggest
                enterprise technology acquisitions of 2021 so far, in reverse
                chronological order. Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Here are the biggest
                enterprise technology acquisitions of 2021 so far, in reverse
                chronological order. Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Here are the biggest
                enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Message;
