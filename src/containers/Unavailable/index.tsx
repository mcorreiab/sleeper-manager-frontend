import React from "react";
import { useRouter } from "next/router";

const unavailable = () => {
  const router = useRouter();
  const { user } = router.query;
  return <div>{user}</div>;
};

export default unavailable;
