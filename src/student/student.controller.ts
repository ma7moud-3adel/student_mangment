import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studetService: StudentService) {}

  //   @Get()
  //   findAllStudents() {
  //     return 'All Students Informations';
  //   }

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

  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() body) {
  //     return `This action updates a #${id} cat`;
  //   }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates a #${id} studen`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} student`;
  }

  @Get()
  findAll(@Query() query) {
    const { limit, offset } = query;
    return `All Students (limit: ${limit} items) -- (offset: ${offset} items)`;
  }
}
