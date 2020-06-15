import frontRouters from "./front/index";
import afterRouters from "./back/index";
const routers = [...frontRouters, ...afterRouters];

export default routers;
