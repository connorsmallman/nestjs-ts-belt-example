import { Injectable } from "@nestjs/common";
import { A, O, N, R, pipe } from '@mobily/ts-belt';
import { User } from "../domain/User";

@Injectable()
export class GetUserUseCase {
    constructor() {}

    execute(): R.Result<User, Error> {
        return pipe(
            new User("John Doe"),
            R.fromNullable(new Error("User not found")),
        );
    }
}