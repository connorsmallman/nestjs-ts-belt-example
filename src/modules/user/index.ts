import { Module } from '@nestjs/common';
import {UserController} from "./infrastructure/http/UserController";
import {GetUserUseCase} from "./usecases/GetUserUseCase";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [GetUserUseCase],
})
export class UserModule {}
