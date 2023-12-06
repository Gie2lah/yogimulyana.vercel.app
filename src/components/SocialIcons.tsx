import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

export default function SocialIcons() {
  <div className="flex space-x-2 mt-6">
    {social.map(({ id, icon }) => (
      <div key={id}>{icon}</div>
    ))}
  </div>;
}

const social = [
  {
    id: "email",
    icon: <SiGmail size={30} />,
  },
  {
    id: "github",
    icon: <SiGithub size={30} />,
  },
  {
    id: "linkedin",
    icon: <SiLinkedin size={30} />,
  },
  {
    id: "instagram",
    icon: <SiInstagram size={30} />,
  },
];
