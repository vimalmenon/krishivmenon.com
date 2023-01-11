import React from 'react';
import {IAppContext} from "./AppContext";

export const Context = React.createContext<IAppContext>({theme: "dark"});
