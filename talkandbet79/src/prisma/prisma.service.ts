import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // MUDAMOS PARA O PADRÃO AQUI

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Se o import acima estiver certo, o $connect funciona
    await this.$connect();
  }
}