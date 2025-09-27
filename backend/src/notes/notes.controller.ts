import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async findAll(): Promise<Note[]> {
    return await this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Note | null> {
    return await this.notesService.findOne(Number(id));
  }

  @Post()
  async create(@Body() note: Omit<Note, 'id'>): Promise<Note> {
    return await this.notesService.create(note);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() note: Omit<Note, 'id'>,
  ): Promise<Note> {
    const updated = await this.notesService.update(Number(id), note);
    if (!updated) {
      return { id: Number(id), title: '', content: '' };
    }
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.notesService.remove(Number(id));
  }
}
