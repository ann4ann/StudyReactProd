import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string,
}

export const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                placeholder={t("Введите логин")}
                className={cls.input}
            />
            <Input
                type="password"
                placeholder={t("Введите пароль")}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};
