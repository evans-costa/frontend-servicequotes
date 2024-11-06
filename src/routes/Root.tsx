import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="mx-auto my-0 max-w-sm">
      <Outlet />
    </main>
  );
}
