"use client";

import { useState } from "react";
import Button from "./components/button/button";
import Spin from "./components/spin/spin";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <Button onClick={handleClick} loading={loading}>
        confirm
      </Button>
      <Button variant="outline" loading={loading} onClick={handleClick}>
        cancel
      </Button>
      <Button
        size="small"
        variant="outline"
        onClick={handleClick}
        loading={loading}
        loadingText="waiting..."
      >
        cancel
      </Button>

      <Spin loading={true} />
    </>
  );
}
