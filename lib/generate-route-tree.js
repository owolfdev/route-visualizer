const fs = require("node:fs");
const path = require("node:path");

function generateRouteTree(dirPath, baseRoute = "") {
  let routes = [];

  try {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Properly format dynamic and optional catch-all routes
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

// Helper function to format dynamic and catch-all route names
function formatRoute(fileName) {
  if (fileName.startsWith("[") && fileName.endsWith("]")) {
    if (fileName.startsWith("[[") && fileName.endsWith("]]")) {
      // Handle optional catch-all `[[...slug]]`
      return `[[...${fileName.slice(3, -2)}]]`;
    } else if (fileName.startsWith("[...")) {
      // Handle catch-all `[...slug]`
      return `[...${fileName.slice(4, -1)}]`;
    } else {
      // Handle normal dynamic `[slug]`
      return `[${fileName.slice(1, -1)}]`;
    }
  }
  return fileName;
}

module.exports = generateRouteTree;
