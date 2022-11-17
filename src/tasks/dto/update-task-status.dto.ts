import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusrDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
