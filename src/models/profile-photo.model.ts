import {Entity, model, property} from '@loopback/repository';

@model()
export class ProfilePhoto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: false,
  })
  image: string;

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
    type: 'number',
    required: true,
  })
  user: number;

  @property({
    type: 'date',
  })
  created?: string;


  constructor(data?: Partial<ProfilePhoto>) {
    super(data);
  }
}

export interface ProfilePhotoRelations {
  // describe navigational properties here
}

export type ProfilePhotoWithRelations = ProfilePhoto & ProfilePhotoRelations;
