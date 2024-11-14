"use client";

import { useState } from "react";
import Button from "./components/Button/Button";
import { useDarkMode } from "@/hooks/useDarkMode";
import { DarkIcon } from "../icons/DarkIcon";
import { LightIcon } from "../icons/LightIcon";
import { SendIcon } from "@/icons/SendIcon";
import Input from "./components/input/input";
import { EmailIcon } from "@/icons/EmailIcon";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <div className="flex gap-3 m-4">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleClick} loading={loading}>
          Confirm
        </Button>
        <Button
          icon={theme == "dark" ? DarkIcon : LightIcon}
          onClick={toggleTheme}
          variant="text"
        >
          {theme == "dark" ? "Dark" : "Light"}
        </Button>
        <Button icon={SendIcon}>Sent</Button>
      </div>
      <div className="p-2 w-1/4">
        <Input placeholder="Email" />
      </div>
    </>
  );
}
