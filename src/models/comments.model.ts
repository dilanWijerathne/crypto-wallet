import {Entity, model, property} from '@loopback/repository';

@model()
export class Comments extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  post: number;

  @property({
    type: 'string',
    required: true,
  })
  comment: string;

  @property({
    type: 'string',
    required: true,
  })
  owner: string;

  @property({
    type: 'number',
    default: 0,
  })
  likes?: number;

  @property({
    type: 'date',
  })
  created?: string;


/*
  @hasOne(() => User)
  user?: User;
*/
  constructor(data?: Partial<Comments>) {
    super(data);
  }
}

export interface CommentsRelations {
  // describe navigational properties here
}

export type CommentsWithRelations = Comments & CommentsRelations;
