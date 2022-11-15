import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusrDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
