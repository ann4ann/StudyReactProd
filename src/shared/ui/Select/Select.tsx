import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOptions {
    value: string,
    content: string,
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean,
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
        // это аналогично записи:
        // if (onChange) {
        //     onChange(e.target.value);
        // }
    };

    const optionList = useMemo(() => options?.map(
        (opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ),
    ), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
