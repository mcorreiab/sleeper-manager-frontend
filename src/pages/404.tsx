import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import passDrop from "../../public/pass-drop.svg";

const Custom404: React.FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  });

  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: "var(--background-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#eaeaea",
      }}
    >
      <Image src={passDrop} alt="NFL Player dropping a pass" />
      <h1>Page not found</h1>
      <p>Redirecting you back to home</p>
    </main>
  );
};

export default Custom404;
