"use client";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { Education } from "../Education";
import { iconType, educationType } from "@/app/types";
import { educationList, techonologyIconList, whoAmIData } from "@/app/utils";
import IconComponent from "../ui/IconComponent";
import { Button } from "@nextui-org/button";

const { fullName, whoAmI } = whoAmIData;

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      <Card>
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://res.cloudinary.com/dhd7fpcgh/image/upload/v1713420634/lfz3ivsgj1ubnw9yvszu.jpg"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {fullName}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                Fullstack Developer
              </h5>
            </div>
          </div>
          <Button
            className="bg-transparent text-foreground border-default-200"
            color="primary"
            radius="full"
            size="sm"
          >
            #Explore the unseen
          </Button>
        </CardHeader>
        <CardBody className="text-small text-default-400">
          <p>{whoAmI}</p>
          <span className="pt-2 text-white">
            #ReactJS #Python #Flutter #MongoDB
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        {/* <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small"></p>
            <p className=" text-default-400 text-small"></p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small"></p>
            <p className="text-default-400 text-small"></p>
          </div>
        </CardFooter> */}
      </Card>

      <Card>
        <CardBody className="gap-4">
          <h2 className="text-2xl font-bold">Skills</h2>

          <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
            {techonologyIconList.map(({ name, icon }: iconType) => (
              <Tooltip key={`technology-item-${name}`} content={name}>
                <IconComponent icon={icon} />
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="gap-2 flex-wrap">
          <h2 className="text-2xl font-bold ">Education</h2>

          <div className="flex flex-col lg:flex-col gap-2">
            {educationList.map((education: educationType) => (
              <Education
                key={`education-item-${education.career}`}
                career={education.career}
                years={education.years}
                description={education.description}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
