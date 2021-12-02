import { Controller, Get, Req } from '@nestjs/common';

@Controller('cards')
export class CardsController {

    @Get()
    getIndex(@Req() resquest): string{
        return "This are my cards";
    }
}
