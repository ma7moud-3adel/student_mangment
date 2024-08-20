import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from '../create-student.dto/create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  //   readonly name: string;
  //   readonly age: number;
  //   readonly address: string[];
}
