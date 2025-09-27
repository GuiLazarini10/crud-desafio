import { NotesService } from './notes.service';
import { Note } from './note.entity';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    findAll(): Promise<Note[]>;
    findOne(id: string): Promise<Note | null>;
    create(note: Omit<Note, 'id'>): Promise<Note>;
    update(id: string, note: Omit<Note, 'id'>): Promise<Note>;
    remove(id: string): Promise<boolean>;
}
