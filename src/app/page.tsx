"use client";

import { useState } from "react";
import Button from "./components/Button/Button";
import Spin from "./components/Spin/Spin";
import { useDarkMode } from "@/hooks/useDarkMode";
import { HomeIcon } from "@/icons/HomeIcon";
import Icon from "./components/Icon/Icon";
import { SettingsIcon } from "@/icons/SettingsIcon";

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
        <Button onClick={handleClick} loading={loading} icon={HomeIcon}>
          default default
        </Button>
        <Button size="small">default small</Button>
      </div>

      <div className="flex items-center">
        <Button variant="outline" size="large">
          outline large
        </Button>
        <Button
          icon={SettingsIcon}
          variant="outline"
          onClick={handleClick}
          loading={loading}
        >
          outline default
        </Button>
        <Button variant="outline" size="small">
          outline small
        </Button>
      </div>

      <div className="flex items-center">
        <Button variant="text" size="large">
          text large
        </Button>
        <Button variant="text">text default</Button>
        <Button variant="text" size="small">
          text small
        </Button>
      </div>

      <div className="flex items-center">
        <Button disabled>default disabled</Button>
        <Button variant="outline" disabled>
          outline disabled
        </Button>
        <Button variant="text" disabled>
          text disabled
        </Button>
      </div>

      <Icon icon={HomeIcon} />

      <Spin loading={true} />
      <Spin loading={true} variant="neutral" />
      <Button onClick={toggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
    </>
  );
}
