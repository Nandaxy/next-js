import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faDownload,
  faCamera,
  faMoon,
  faFaceSmile,
  faBars,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const getLinkClassNames = (currentPath, targetPath) => {
  const isActive = currentPath === targetPath;
  return `transition-all rounded-xl mb-3 ${
    isActive ? "bg-cyan-400 dark:bg-cyan-600 font-bold text-white" : "dark:hover:bg-gray-800 hover:bg-gray-200"
  }`;
};

const getIconClassNames = (currentPath, targetPath) => {
  const isActive = currentPath === targetPath;
  return `${isActive ? "font-bold text-white" : ""} text-xl w-[20px] h-[20px]`;
};

const getTextClassNames = (currentPath, targetPath) => {
  const isActive = currentPath === targetPath;
  return `${isActive ? "font-bold text-white" : ""} flex-1 ml-4`;
};

const NavbarLink = ({ href, icon, text }) => {
  const currentPath = usePathname();
  return (
    <li>
      <Link href={href}>
        <div className={getLinkClassNames(currentPath, href)}>
          <div className="p-2 flex flex-row items-center">
            <FontAwesomeIcon icon={icon} className={getIconClassNames(currentPath, href)} />
            <p className={getTextClassNames(currentPath, href)}>{text}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

const NavbarApiMobile = () => {
  return (
    <div>
      <ul>
        <NavbarLink href="/api/api-reference/all" icon={faBars} text="All Feature" />
        <NavbarLink href="/api/api-reference/ai" icon={faRobot} text="OpenAI" />
        <NavbarLink href="/api/api-reference/downloader" icon={faDownload} text="Downloader" />
        <NavbarLink href="/api/api-reference/islami" icon={faMoon} text="Islami" />
        <NavbarLink href="/api/api-reference/random-image" icon={faCamera} text="Random Image" />
        <NavbarLink href="/api/api-reference/entertainment" icon={faFaceSmile} text="Entertainment" />
        <NavbarLink href="/api/api-reference/news" icon={faNewspaper} text="News" />
      </ul>
    </div>
  );
};

export default NavbarApiMobile;
