import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // используем для курса, не в проектах
    setTimeout(() => resolve(import("./LoginForm")), 1000);
}));
