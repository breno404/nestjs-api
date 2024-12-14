import { Module } from '@nestjs/common';
import { MapsModule } from 'src/maps/maps.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoutesDriverGateway } from './routes-driver/routes-driver.gateway';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [PrismaModule, MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService, RoutesDriverGateway],
})
export class RoutesModule { }
