import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "entities/Profile";
import { updateProfileData } from "./updateProfileData";

const data = {
    username: "admin",
    age: 18,
    country: Country.Russia,
    lastname: "Personov",
    firstname: "Person",
    city: "Moskow",
    currency: Currency.EUR,
};

describe("updateProfileData", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();
        // проверка выполнения запроса на сервер
        expect(thunk.api.put).toHaveBeenCalled();
        // проверка статуса запроса
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data,
                    lastname: "",
                },
            },
        });

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
