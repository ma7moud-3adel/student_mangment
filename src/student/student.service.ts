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
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { promises } from 'dns';
import { CreateStudentDto } from './dto/create-student.dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  // private Students: Student[] = [
  //   {
  //     id: 1,
  //     name: 'Mahmoud Adel',
  //     age: 27,
  //     address: ['Tanta', 'Gharbia'],
  //   },
  //   {
  //     id: 2,
  //     name: 'muhammed Essa',
  //     age: 38,
  //     address: ['Erak', 'Karkok'],
  //   },
  // ];

  async findAll(): Promise<Student[]> {
    // return this.Students;
    return this.studentRepository.find();
  }
  async findOne(id: number): Promise<Student> {
    // const studen = this.Students.find((x) => x.id === +id);
    const studen = this.studentRepository.findOne({
      where: { id },
    });

    if (!studen) {
      //   throw new HttpException(
      //     `this id ${id} is not found`,
      //     HttpStatus.NOT_FOUND,);
      throw new NotFoundException(`This Student ${id} Is Not Found`);
      // throw `server error`;
    }
    return studen;
  }

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create({
      ...createStudentDto,
    });
    return this.studentRepository.save(student);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const updateStudent = await this.studentRepository.preload({
      id: +id,
      ...updateStudentDto,
    });
    if (!updateStudent) {
      throw new NotFoundException(`This Student ${id} Is Not Found`);
    }
    return this.studentRepository.save(updateStudent);
  }

  async remove(id: string) {
    await this.studentRepository.delete(id);
  }
}
