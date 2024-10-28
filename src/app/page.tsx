"use client";

import { useState } from "react";
import Button from "./components/button/button";
import Spin from "./components/spin/spin";
import { useDarkMode } from "@/hooks/useDarkMode";
import Input from "./components/input/input";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <div className="flex items-center">
        <Button size="large">default large</Button>
        <Button onClick={handleClick} loading={loading}>
          default default
        </Button>
        <Button size="small">default small</Button>
      </div>

      <div className="flex items-center">
        <Button variant="outline" size="large">
          default large
        </Button>
        <Button variant="outline">default default</Button>
        <Button variant="outline" size="small">
          default small
        </Button>
      </div>

      <div className="flex items-center">
        <Button variant="text" size="large">
          default large
        </Button>
        <Button variant="text">default default</Button>
        <Button variant="text" size="small">
          default small
        </Button>
      </div>
      <Spin loading={true} />
      <Spin loading={true} variant="neutral" />
      <Button onClick={toggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>

      <div>
        <Input placeholder="Teste" variant="default"></Input>
      </div>
    </>
  );
}
