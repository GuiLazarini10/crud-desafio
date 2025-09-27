import { Repository } from 'typeorm';
import { Note } from './note.entity';
export declare class NotesService {
    private notesRepository;
    constructor(notesRepository: Repository<Note>);
    findAll(): Promise<Note[]>;
    findOne(id: number): Promise<Note | null>;
    create(note: Omit<Note, 'id'>): Promise<Note>;
    update(id: number, note: Omit<Note, 'id'>): Promise<Note | null>;
    remove(id: number): Promise<boolean>;
}
