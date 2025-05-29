"use client";

import { Steps } from "primereact/steps";

export default function Page() {
  const items: { label: string; icon: string }[] = [
    { label: "Step 1", icon: "pi pi-user" },
    { label: "Step 2", icon: "pi pi-user" },
    { label: "Step 3", icon: "pi pi-user" },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="card">
        {items.length > 0 && (
          <Steps pt={{}} readOnly model={items} activeIndex={0} />
        )}
      </div>
    </div>
  );
}
