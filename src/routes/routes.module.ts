import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { KafkaModule } from '../kafka/kafka.module';
import { MapsModule } from '../maps/maps.module';
import { RoutesDriverConsumer } from './routes-driver/routes-driver.consumer';
import { RoutesDriverGateway } from './routes-driver/routes-driver.gateway';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesConsumer } from './routes.consumer';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [MapsModule, KafkaModule, HttpModule],
  controllers: [RoutesController, RoutesConsumer, RoutesDriverConsumer],
  providers: [RoutesService, RoutesDriverService, RoutesDriverGateway],
})
export class RoutesModule { }