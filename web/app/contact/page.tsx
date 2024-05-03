"use client";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { contactData } from "@/app/utils";
import { GithubSVG, LinkedInSVG, MailSVG } from "../components/ui/icons";

export default function Contact() {
  const { email, github, x, linkedIn } = contactData;

  return (
    <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="grid grid-rows-2 grid-cols-2 gap-5 max-w-2xl mx-auto">
        <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1">
          <CardBody className="flex flex-row justify-center items-center gap-2">
            <Button
              onClick={() =>
                (location.href = `mailto:${email}?subject=Mail from your Portfolio`)
              }
            >
              <MailSVG /> {email}
            </Button>
          </CardBody>
        </Card>

        <Card
          isHoverable
          className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer"
        >
          <Link
            href={x}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody
              className="flex justify-center items-center"
              onClick={() => window.open(`${x}`, "_blank")}
            >
              <LinkedInSVG />
            </CardBody>
          </Link>
        </Card>

        <Card
          isHoverable
          className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer"
        >
          <Link
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody className="flex justify-center items-center gap-2">
              <GithubSVG />
              <h1 className="text-3xl font-bold">Github</h1>
            </CardBody>
          </Link>
        </Card>
      </div>
    </section>
  );
}
