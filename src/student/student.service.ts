import {
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { Student } from './entities/student.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
  private Students: Student[] = [
    {
      id: 1,
      name: 'Mahmoud Adel',
      age: 27,
      address: ['Tanta', 'Gharbia'],
    },
    {
      id: 2,
      name: 'muhammed Essa',
      age: 38,
      address: ['Erak', 'Karkok'],
    },
  ];

  async findAll() {
    return this.Students;
  }
  async findOne(id: string) {
    const studen = this.Students.find((x) => x.id === +id);
    if (!studen) {
      //   throw new HttpException(
      //     `this id ${id} is not found`,
      //     HttpStatus.NOT_FOUND,);
      //   throw new NotFoundException(`this id ${id} is not found`);
      throw `server error`;
    }
    return studen;
  }

  async create(createStudentDto: any) {
    this.Students.push(createStudentDto);
  }

  async update(id: string, updateStudentDto: any) {
    const updateStudent = this.findOne(id);
    if (updateStudent) {
      //
    }
    // this.Students.push(createStudentDto);
  }

  remove(id: string) {
    const removeStudent = this.Students.findIndex((x) => x.id === +id);
    if (!removeStudent) {
      return this.Students.splice(removeStudent, 1);
    }
  }
}
