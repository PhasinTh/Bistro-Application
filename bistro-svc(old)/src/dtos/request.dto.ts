import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BistroRequestId {
    @IsNotEmpty()
    @IsString()
    id: string
}

export class BistrosRequest {
    @IsOptional()
    @IsNumber()
    page?: number
    
    @IsOptional()
    @IsNumber()
    limit?: number
}