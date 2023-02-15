import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable({})
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:kh17112003@localhost:5432/nestjs',
                },
            },
        });
    }
}
