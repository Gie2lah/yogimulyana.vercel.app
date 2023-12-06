import {
  SiFirebase,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex mt-6 space-x-2 md:space-x-4">
      {stacks.map(({ id, icon }) => (
        <div key={id} className="text-gray-600 hover:text-sky-700">
          {icon}
        </div>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: "nextjs",
    icon: <SiNextdotjs size={50} />,
  },
  {
    id: "laravel",
    icon: <SiLaravel size={50} />,
  },
  {
    id: "mysql",
    icon: <SiMysql size={50} />,
  },
  {
    id: "firebase",
    icon: <SiFirebase size={50} />,
  },
  {
    id: "tailwindcss",
    icon: <SiTailwindcss size={50} />,
  },
];
