import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  findOne(id: number): Promise<Note | null> {
    return this.notesRepository.findOneBy({ id });
  }

  create(note: Omit<Note, 'id'>): Promise<Note> {
    const newNote = this.notesRepository.create(note);
    return this.notesRepository.save(newNote);
  }

  async update(id: number, note: Omit<Note, 'id'>): Promise<Note | null> {
    await this.notesRepository.update(id, note);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.notesRepository.delete(id);
    return result.affected === 1;
  }
}
