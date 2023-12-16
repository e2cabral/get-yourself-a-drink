import {Controller, Get} from '@nestjs/common';
import {HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator} from "@nestjs/terminus";
import {ApiTags} from "@nestjs/swagger";

@Controller('healthcheck')
export class HealthcheckController {
  constructor(
    private health: HealthCheckService,
    private healthHttp: HttpHealthIndicator,
    private healthMemory: MemoryHealthIndicator
  ) {}

  @Get('/')
  @ApiTags('Healthcheck')
  live() {
    try {
      return this.health
        .check([
          async () =>
            this
              .healthHttp
              .pingCheck(
                'json_placeholder',
                'https://jsonplaceholder.typicode.com/'
              ),
          async () =>
            this
              .healthMemory
              .checkHeap(
                'memory_heap',
                300 * 1024 * 1024
              )
        ])
    } catch (err) {

    }
  }
}
