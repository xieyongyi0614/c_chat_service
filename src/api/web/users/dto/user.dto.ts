// import { PaginationDto } from '../../../../common';
import { IsOptional, IsString } from 'class-validator';

export class UserSearchDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  email?: string;
}
