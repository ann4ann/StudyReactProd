import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string,
    data?: Profile,
    readonly?: boolean,
    isLoading?: boolean,
    error?: string,
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (currency?: Currency) => void,
    onChangeCountry?: (country?: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar && (
                        <Avatar
                            src={data?.avatar}
                        />
                    )}
                </div>
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />

                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Город")}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    value={data?.username}
                    placeholder={t("Введите имя пользователя")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Введите ссылку на аватар")}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    className={cls.input}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    className={cls.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
