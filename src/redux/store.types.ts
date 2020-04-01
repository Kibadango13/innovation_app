// Redux store types and interfaces
import { CallHistoryMethodAction } from "connected-react-router";

import { reducer } from "./store";
import { AuthActions } from "./auth/auth.types";
import { ThemeActions } from "./theme/theme.types";

export type AppState = ReturnType<typeof reducer>;

export type AppActions = CallHistoryMethodAction | AuthActions | ThemeActions;
