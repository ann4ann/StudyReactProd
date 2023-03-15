import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean,
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames("", {}, [className])}
            label={t("Укажите страну")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
