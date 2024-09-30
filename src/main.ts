import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser'
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  
  const port = process.env.PORT1 || 3000

  app.setGlobalPrefix('api')
  
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Sistema de gerenciamento de tarefas Todo APP')
    .setDescription('Gerenciamento de Tarefas | SILVER')
    .setVersion('1.0')
    .addTag('Sistema de gerenciamento de tarefas | SILVER')
    .build()
    
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  
  const corsOptions: CorsOptions = {
    origin: 'https://react-app-1009725684335.us-central1.run.app', // Frontend URL
    credentials: true, // Allow cookies to be sent
  };

  app.enableCors(corsOptions);

  app.use(bodyParser.json({limit: '1mb'}))
  app.use(bodyParser.urlencoded({ limit:'1mb', extended: true }))
  app.use(bodyParser.text({type: 'text/html'}))

  await app.listen(port);
}
bootstrap();
