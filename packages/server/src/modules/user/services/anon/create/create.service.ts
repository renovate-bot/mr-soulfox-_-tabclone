import {Injectable} from '@nestjs/common';
import {AnonymousInfoDto} from 'src/modules/user/dtos/create-anonymous.dto';
import {AnonymousPrismaService, UserPrismaService} from 'src/database';
import {AES} from 'crypto-js';
import {User} from '@prisma/client';
import {Anonymous} from './entities/create.entities';

@Injectable()
export class CreateTokenService {
	private anonymous: Anonymous;

	constructor(
		private readonly prismaAnonService: AnonymousPrismaService,
		private readonly prismaUserService: UserPrismaService
	) {}

	private async createUser(): Promise<undefined | User> {
		const anonUser = await this.prismaUserService.create({
			isAnon: true,
		});

		if (!anonUser) {
			return undefined;
		}

		return anonUser;
	}

	private generateToken(): string {
		const msg = `${this.anonymous.platform}-${this.anonymous.utmSource}`;

		return AES.encrypt(msg, String(new Date())).toString();
	}

	async create(anonInfoDto: AnonymousInfoDto): Promise<Anonymous | string> {
		this.anonymous = anonInfoDto;

		const anonUser = await this.createUser();

		if (anonUser) {
			return this.prismaAnonService.create({
				userAnon: {
					connect: {
						id: anonUser.id,
					},
				},
				token: this.generateToken(),
				platform: this.anonymous.platform,
				utmSource: this.anonymous.utmSource,
			});
		}

		return 'error in create anon user';
	}
}
