import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
    test("should return data", () => {
        const data = {
            username: "admin",
            age: 18,
            country: Country.Russia,
            lastname: "Personov",
            firstname: "Person",
            city: "Moskow",
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
