import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 'aceess-token' })
  accessToken: string;
  userId: string
}
