import { Controller, Get } from '@nestjs/common';
import { GetUserUseCase } from "../../usecases/GetUserUseCase";
import { UserDTO } from "../../dtos/UserDTO";
import { R, pipe } from '@mobily/ts-belt';

@Controller("users")
export class UserController {
    constructor(private readonly getUserUseCase: GetUserUseCase) {}

    @Get()
    getUser(): UserDTO {
        const response = this.getUserUseCase.execute();

        try {
            const user = pipe(response, R.getExn);
            return {
                name: user.name,
            }
        } catch (error) {
            if (error instanceof Error && error.message === "User not found") {
                // Handle error
            }
        }
    }
}
