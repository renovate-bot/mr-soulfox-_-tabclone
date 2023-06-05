import {Platform, UtmSource} from '@prisma/client';

export class Anonymous {
	token?: string;

	platform: Platform;

	utmSource: UtmSource;
}
