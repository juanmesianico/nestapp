import { Controller, Req } from '@nestjs/common';

@Controller('cards')
export class CardsController {

    getIndex(@Req() resquest): string{
        return "This are my cards";
    }
}
