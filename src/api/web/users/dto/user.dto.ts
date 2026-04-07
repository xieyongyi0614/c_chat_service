import { PaginationDto } from '../../../../common';
import { IsOptional, IsString } from 'class-validator';

export class UserSearchDto extends PaginationDto {
  @IsOptional()
  @IsString()
  nickname?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  word?: string;
}
