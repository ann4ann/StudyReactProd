import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
    className?: string,
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames("", {}, [className])}
            label={t("Укажите валюту")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    );
});
