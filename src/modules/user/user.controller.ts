import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

Controller('user')
export class UserController {
    constructor(private readonly userService : UserService) {}
    
    @Get()
    getName() : string {
        return this.userService.getName();
    }

}