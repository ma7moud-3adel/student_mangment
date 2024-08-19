import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';

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
}
