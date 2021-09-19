import { useRouter } from "next/router";
import { useEffect } from "react";

const custom404: React.FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 2000);
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
      }}
    >
      <img src="/pass-drop.svg" alt="NFL Player dropping a pass" />
      <h1 style={{ color: "#eaeaea" }}>Page not found</h1>
    </main>
  );
};

export default custom404;
