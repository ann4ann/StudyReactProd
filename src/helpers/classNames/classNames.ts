// Record - тип из React, в котором есть ключ: string, и значение: boolean | string
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]):string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ]
        .join(" ")
}

