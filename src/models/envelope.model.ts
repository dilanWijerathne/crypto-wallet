import {Model, model, property} from '@loopback/repository';

@model()
export class Envelope extends Model {
  @property({
    type: 'string',
  })
  from: string;

  @property({
    type: 'string',
  })
  to: string;

  constructor(data?: Partial<Envelope>) {
    super(data);
  }
}
