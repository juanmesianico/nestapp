import { Controller, Req } from '@nestjs/common';

@Controller('cards')
export class CardsController {

    getIndex(@Req() resques: Request): string{
        return "This are my cards";
    }
}
