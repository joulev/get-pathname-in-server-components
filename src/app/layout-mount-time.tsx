"use client";

import { useEffect, useState } from "react";

export function LayoutMountTime() {
  const [mountTime, setMountTime] = useState<Date | null>(null);
  useEffect(() => {
    setMountTime(new Date());
  }, []);
  return (
    <>
      <div>
        Layout mount time (shouldn't change):{" "}
        {mountTime?.toUTCString() ?? "not yet mounted"}
      </div>
      <div>
        Client components should not be remounted on navigation, so the above
        timestamp shouldn't change when you navigate.
      </div>
    </>
  );
}
