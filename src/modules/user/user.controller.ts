import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserController {
    constructor(private readonly userService : UserService) {}
    
    // @Get()
    // getName() : string {
    //     return this.userService.getName();
    // }

    @Get()
    findAll() : User[] {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() user : User) : User {
        return this.userService.create(user);
    }

}