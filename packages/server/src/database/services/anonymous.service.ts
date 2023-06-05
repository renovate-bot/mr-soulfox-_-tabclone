import {Injectable} from '@nestjs/common';
import {Anonymous, Prisma} from '@prisma/client';
import {PrismaService} from '../lib/prisma.service';

@Injectable()
export class AnonymousPrismaService implements PrismaServicesPattern {
	constructor(private readonly prisma: PrismaService) {}

	async count(where: Prisma.AnonymousWhereInput) {
		return this.prisma.anonymous.count({
			where,
		});
	}

	async findUnique(
		anonWhereUniqueInput: Prisma.AnonymousWhereUniqueInput
	): Promise<Anonymous | null> {
		return this.prisma.anonymous.findUnique({
			where: anonWhereUniqueInput,
		});
	}

	async findMany(params: {
		take?: number;
		where?: Prisma.AnonymousWhereInput;
		orderBy?: Prisma.AnonymousOrderByWithRelationInput;
		cursor?: Prisma.AnonymousWhereUniqueInput;
	}): Promise<Anonymous[]> {
		const {where, orderBy, cursor, take} = params;

		return this.prisma.anonymous.findMany({
			take,
			cursor,
			where,
			orderBy,
		});
	}

	async create(data: Prisma.AnonymousCreateInput): Promise<Anonymous> {
		return this.prisma.anonymous.create({
			data,
		});
	}

	async delete(where: Prisma.AnonymousWhereUniqueInput): Promise<Anonymous> {
		return this.prisma.anonymous.delete({
			where,
		});
	}
}
