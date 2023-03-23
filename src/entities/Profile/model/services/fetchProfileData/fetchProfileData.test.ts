import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { fetchProfileData } from "./fetchProfileData";

const data = {
    username: "admin",
    age: 18,
    country: Country.Russia,
    lastname: "Personov",
    firstname: "Person",
    city: "Moskow",
    currency: Currency.EUR,
};

describe("fetchProfileData", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();
        // проверка выполнения запроса на сервер
        expect(thunk.api.get).toHaveBeenCalled();
        // проверка статуса запроса
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
