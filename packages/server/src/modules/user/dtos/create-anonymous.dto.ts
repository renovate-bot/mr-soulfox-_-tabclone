import {Platform, UtmSource} from '@prisma/client';
import {IsEnum} from 'class-validator';

export class AnonymousInfoDto {
	@IsEnum(Platform)
	readonly platform: Platform;

	@IsEnum(UtmSource)
	readonly utmSource: UtmSource;
}
