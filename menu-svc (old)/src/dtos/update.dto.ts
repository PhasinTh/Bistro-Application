import { IsNotEmpty, IsOptional, IsString, ValidationError, ValidatorOptions } from 'class-validator';
export class UpdateMenuDto {
    @IsNotEmpty()
    @IsString()
    id!: string

    @IsOptional()
    @IsString()
    name!: string
    
    @IsString()
    @IsOptional()
    bistroId?: string
  
    @IsString()
    @IsOptional()
    description?: string
  
    @IsString()
    @IsOptional()
    image?: string
}