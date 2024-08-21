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
import { CreateStudentDto } from './dto/create-student.dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studetService: StudentService) {}

  //   @Get()
  //   findAllStudents() {
  //     return 'All Students Informations';
  //   }
  @Get()
  findAllStudents() {
    return this.studetService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return `This action returns a #${id} student`;
  //   }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studetService.findOne(id);
  }

  //   @Post()
  //   create(@Body() body) {
  //     return body;
  //   }

  //   @Post()
  //   create(@Body('name') body) {
  //     return body;
  //   }
  // @Post()
  // create(@Body() body) {
  //   return this.studetService.create(body);
  // }
  @Post()
  create(@Body() createStudentDTO: CreateStudentDto) {
    return this.studetService.create(createStudentDTO);
  }

  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() body) {
  //     return `This action updates a #${id} cat`;
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() body) {
  //     return `This action updates a #${id} studen`;
  //   }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body) {
  //   return this.studetService.update(id, body);
  // }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDTO: UpdateStudentDto) {
    return this.studetService.update(id, updateStudentDTO);
  }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return `This action removes a #${id} student`;
  //   }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studetService.remove(id);
  }

  //   @Get()
  //   findAll(@Query() query) {
  //     const { limit, offset } = query;
  //     return `All Students (limit: ${limit} items) -- (offset: ${offset} items)`;
  //   }
}
