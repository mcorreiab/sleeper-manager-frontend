import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import passDrop from "../../public/pass-drop.svg";
import classNames from "classnames";

const Custom404: React.FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  });

  return (
    <main
      className={classNames(
        "h-screen",
        "bg-background-color",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "text-sm-lightwhite"
      )}
    >
      <Image src={passDrop} alt="NFL Player dropping a pass" />
      <h1>Page not found</h1>
      <p>Redirecting you back to home</p>
    </main>
  );
};

export default Custom404;
