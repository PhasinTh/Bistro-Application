import { IsNotEmpty, IsOptional, IsString, ValidationError, ValidatorOptions } from 'class-validator';
export class CreateBistroDto {
    @IsNotEmpty()
    @IsString()
    name!: string

    @IsString()
    @IsOptional()
    image?: string

    @IsString()
    @IsOptional()
    description?: string
    
    @IsString()
    @IsOptional()
    owner_id?: string
}