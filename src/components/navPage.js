import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavPage = ({ previousUrl, previousName, nextUrl, nextName }) => {
  return (
    <div className="flex justify-between flex-row pt-16 pb-12">
      {previousUrl ? (
        <Link href={previousUrl}>
          <div className="opacity-95 hover:opacity-100">
            <p className="pl-4 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white">
              Sebelumnya
            </p>
            <div className="mt-1">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="mr-2 opacity-50 hover:opacity-80"
              />
              <span className="font-medium text-md">{previousName}</span>
            </div>
          </div>
        </Link>
      ) : (
        <div className="opacity-95 invisible">
          <p className="pl-4 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white">
            Sebelumnya
          </p>
          <div className="mt-1">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="mr-2 opacity-50 hover:opacity-80"
            />
            <span className="font-medium text-md">{previousName}</span>
          </div>
        </div>
      )}
      {nextUrl ? (
        <Link href={nextUrl}>
          <div className="opacity-95 hover:opacity-100">
            <p className="pr-4 text-sm text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white">
              Berikutnya
            </p>
            <div className="mt-1">
              <span className="font-medium text-md mr-2 opacity-100">
                {nextName}
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="opacity-50 hover:opacity-80"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div className="opacity-95 invisible">
          <p className="pr-4 text-sm text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white">
            Berikutnya
          </p>
          <div className="mt-1">
            <span className="font-medium text-md mr-2 opacity-100">
              {nextName}
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="opacity-50 hover:opacity-80"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavPage;
