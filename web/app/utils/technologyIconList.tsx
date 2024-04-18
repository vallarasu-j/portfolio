import { iconType } from "../types";
import {
  JavascriptSVG,
  TypescriptSVG,
  ReactSVG,
  ExpressSVG,
  NextUISVG,
  MongoDBSVG,
  PythonSVG,
  FlutterSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: <JavascriptSVG color={color} size={35} />,
  },
  {
    name: "TypeScript",
    icon: <TypescriptSVG color={color} size={35} />,
  },
  {
    name: "React",
    icon: <ReactSVG color={color} size={35} />,
  },
  {
    name: "NextUI",
    icon: <NextUISVG color={color} size={35} />,
  },
  {
    name: "Python",
    icon: <PythonSVG color={color} size={35} />,
  },
  {
    name: "Node JS",
    icon: <ExpressSVG color={color} size={35} />,
  },
  {
    name: "MongoDB",
    icon: <MongoDBSVG color={color} size={35} />,
  },
  {
    name: "Flutter",
    icon: <FlutterSVG color={color} size={35} />,
  },
];
