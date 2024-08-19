import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  create(@Body() body) {
    return body;
  }

  //   @Post()
  //   create(@Body('name') body) {
  //     return body;
  //   }
}
