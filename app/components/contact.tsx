import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Tilt from "./Tilt";

export default function Contact({ content }: { content: any }) {
  const contacts = [
    {
      href: `mailto:${content.email}`,
      icon: faEnvelope,
      label: content.email,
      color: "group-hover:text-accent-green",
    },
    {
      href: content.github,
      icon: faGitAlt,
      label: content.github.split("/").pop(),
      color: "group-hover:text-accent-red",
    },
    {
      href: content.linkedin,
      icon: faLinkedin,
      label: content.linkedin.split("/").pop(),
      color: "group-hover:text-accent-sky",
    },
  ];

  return (
    <div className="w-9/12 relative mx-auto min-h-screen flex flex-col justify-center align-middle">
      <h3 className="text-6xl text-fg-dim mb-8">{content.sections.contact}</h3>

      <div className="w-full min-w-80 mx-auto flex justify-center flex-wrap gap-6">
        {contacts.map((item, index) => (
          <Tilt
            key={index}
            className="w-1/4 min-w-fit flex-1 md:mb-0 mb-5 bg-bg-dim flex flex-col items-center md:float-left"
          >
            <Link href={item.href} className="text-center text-fg-dim group w-full h-full m-3">
              <FontAwesomeIcon icon={item.icon} className={`text-5xl ${item.color} transition-colors`} aria-label="Contact Icon" />
              <p className="font-handdrawn mt-4 text-center">{item.label}</p>
            </Link>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

