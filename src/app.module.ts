import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { AppController } from './app.controller';

@Module({
  imports: [TasksModule, UsersModule, AuthModule, ProjectsModule],
  controllers: [AppController]
})
export class AppModule {}
