declare global {
	abstract class PrismaServicesPattern {
		async count(where: T): Promise<number>;

		async findUnique(where: T): Promise<T | null>;

		async findMany?(params: {
			take: number;
			cursor: T;
			where: T;
			orderBy: T;
			skip?: T;
		}): Promise<T[]>;

		async create(data: T): Promise<T>;

		async update?(params: {where: T; data: T}): Promise<T>;

		async delete(where: T): Promise<T>;
	}
}

export {};
