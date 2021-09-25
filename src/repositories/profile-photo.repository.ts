import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ProfilePhoto, ProfilePhotoRelations} from '../models';

export class ProfilePhotoRepository extends DefaultCrudRepository<
  ProfilePhoto,
  typeof ProfilePhoto.prototype.id,
  ProfilePhotoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ProfilePhoto, dataSource);
  }
}
