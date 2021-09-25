import {Model, model, property} from '@loopback/repository';

@model()
export class Multimedia extends Model {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  path: string;

  @property({
    type: 'number',
    required: true,
  })
  user: number;

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  @property({
    type: 'boolean',
    required: true,
  })
  status: boolean;

  @property({
    type: 'date',
  })
  created?: string;


  constructor(data?: Partial<Multimedia>) {
    super(data);
  }
}

export interface MultimediaRelations {
  // describe navigational properties here
}

export type MultimediaWithRelations = Multimedia & MultimediaRelations;
