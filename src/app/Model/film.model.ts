import { Person } from './person.model';
import { Actor } from './actor.model';

export interface Film {
    id: number;
    title: string;
    description: string;
    releaseYear: number;
    realisator: Person;
    scenarist: Person;
    actors: Actor[];
}
