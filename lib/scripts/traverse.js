const fs = require("fs");
const path = require("path");

function generateRouteTree(dirPath, baseRoute = "") {
  let routes = [];

  try {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const subRoute = file.startsWith("[") ? `[${file}]` : file;
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
    });
  } catch (err) {
    console.error(`Error reading directory: ${dirPath}`, err);
  }

  return routes;
}

const routeTree = generateRouteTree("../app");
console.log(routeTree);
