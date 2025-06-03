import { Breakpoint } from "antd";
import { createContext } from "react";

const screens: Partial<Record<Breakpoint, boolean>> = {};

const ScreenContext  = createContext(screens);


export default ScreenContext;