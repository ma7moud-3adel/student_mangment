import { Controller, Get, Param } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  findAllStudents() {
    return 'All Students Informations';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
