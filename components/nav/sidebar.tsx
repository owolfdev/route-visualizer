// app/page.tsx
import generateRouteTree from "@/lib/generate-route-tree";
import path from "node:path";

export default async function SideBar() {
  const appDir = path.join(process.cwd(), "app"); // Adjust if your directory structure is different
  const routes = generateRouteTree(appDir);

  return (
    <div className="p-12 border-r ">
      <h1 className="text-5xl font-bold pb-4">Routes</h1>
      <ul>
        {routes.map((route: string, index: number) => (
          <li key={index + route}>
            <a href={route}>{route}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
