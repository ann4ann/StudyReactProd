import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test("success login", async () => {
    //     const userValue = { username: "123", id: "1" };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: "123", password: "456" });
    //     const result = await action(dispatch, getState, undefined);
    //     // console.log(result);
    //     // проверка того, что dispatch в компоненте был вызван с нужными данными
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     // проверка того, сколько раз был вызван dispatch в компоненте
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     // проверка выполнения запроса на сервер
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // проверка статуса запроса
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    //     // проверка того, что вернул запрос
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test("error login", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: "123", password: "456" });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    //     expect(result.payload).toBe("error");
    // });

    test("success login", async () => {
        const userValue = { username: "123", id: "1" };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: "123", password: "456" });

        // console.log(result);
        // проверка того, что dispatch в компоненте был вызван с нужными данными
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // проверка того, сколько раз был вызван dispatch в компоненте
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // проверка выполнения запроса на сервер
        expect(mockedAxios.post).toHaveBeenCalled();
        // проверка статуса запроса
        expect(result.meta.requestStatus).toBe("fulfilled");
        // проверка того, что вернул запрос
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: "123", password: "456" });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
