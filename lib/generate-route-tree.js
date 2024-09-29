import fs from "node:fs";
import path from "node:path";

function generateRouteTree(dirPath, baseRoute = "") {
  let routes = [];

  try {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const subRoute = formatRoute(file);
        routes.push(`${baseRoute}/${subRoute}`);
        routes = [
          ...routes,
          ...generateRouteTree(fullPath, `${baseRoute}/${subRoute}`),
        ];
      } else if (
        file.endsWith(".js") ||
        file.endsWith(".tsx") ||
        file.endsWith(".ts")
      ) {
        const route =
          file === "index.js" || file === "index.tsx" || file === "index.ts"
            ? baseRoute
            : `${baseRoute}/${file.replace(/\.js|\.tsx|\.ts/, "")}`;
        routes.push(route);
      }
    }
  } catch (err) {
    console.error(`Error reading directory: ${dirPath}`, err);
  }

  // Filter out unwanted routes
  routes = routes.filter(
    (route) =>
      !route.includes("/page") &&
      route !== "/404" &&
      !route.includes("/fonts") &&
      !route.includes("/layout")
  );

  return routes;
}

function formatRoute(fileName) {
  if (fileName.startsWith("[") && fileName.endsWith("]")) {
    if (fileName.startsWith("[[") && fileName.endsWith("]]")) {
      return `[[...${fileName.slice(3, -2)}]]`;
    }
    if (fileName.startsWith("[...")) {
      return `[...${fileName.slice(4, -1)}]`;
    }
    return `[${fileName.slice(1, -1)}]`;
  }
  return fileName;
}

export default generateRouteTree;
