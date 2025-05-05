import { createContext } from "react";

const RouteContext = createContext({
    route : "home",
    onROuteChnage: ()=>{}
});

export default RouteContext;