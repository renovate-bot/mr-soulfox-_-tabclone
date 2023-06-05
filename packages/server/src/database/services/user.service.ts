import {Injectable} from '@nestjs/common';
import {User, Prisma} from '@prisma/client';
import {PrismaService} from '../lib/prisma.service';

@Injectable()
export class UserPrismaService implements PrismaServicesPattern {
	constructor(private readonly prisma: PrismaService) {}

	async count(where: Prisma.UserWhereInput) {
		return this.prisma.user.count({
			where,
		});
	}

	async findUnique(where: Prisma.UserWhereUniqueInput): Promise<User> {
		return this.prisma.user.findUnique({
			where,
		});
	}

	async findMany(params: {
		take?: number;
		cursor?: Prisma.UserWhereUniqueInput;
		where?: Prisma.UserWhereInput;
		orderBy?: Prisma.UserOrderByWithRelationInput;
		skip?: number;
	}): Promise<User[]> {
		const {take, cursor, where, orderBy, skip} = params;

		return this.prisma.user.findMany({
			take,
			cursor,
			where,
			orderBy,
			skip,
		});
	}

	create(data: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({
			data,
		});
	}

	update?(params: {
		where: Prisma.UserWhereUniqueInput;
		data: Prisma.UserUpdateInput;
	}): Promise<User> {
		const {where, data} = params;

		return this.prisma.user.update({
			where,
			data,
		});
	}

	delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
		return this.prisma.user.delete({
			where,
		});
	}
}
