import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./landing/Landing.tsx"), 
  route("About", "./about/About.tsx"),
  route("home", "routes/home.tsx"),
  route("docs", "./docs/DocsPage.tsx")
] satisfies RouteConfig;
