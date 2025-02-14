import { IsString, IsNumber, IsPositive, IsInt } from 'class-validator';

export class PaymentSessionItemDto {
  @IsString()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  quantity: number;
}
