import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {ProfilePhoto} from '../models';
import {ProfilePhotoRepository} from '../repositories';

export class ProfilePhotoController {
  constructor(
    @repository(ProfilePhotoRepository)
    public profilePhotoRepository : ProfilePhotoRepository,
  ) {}

  @post('/profile-photos')
  @response(200, {
    description: 'ProfilePhoto model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProfilePhoto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfilePhoto, {
            title: 'NewProfilePhoto',
            exclude: ['id'],
          }),
        },
      },
    })
    profilePhoto: Omit<ProfilePhoto, 'id'>,
  ): Promise<ProfilePhoto> {
    return this.profilePhotoRepository.create(profilePhoto);
  }

  @get('/profile-photos/count')
  @response(200, {
    description: 'ProfilePhoto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProfilePhoto) where?: Where<ProfilePhoto>,
  ): Promise<Count> {
    return this.profilePhotoRepository.count(where);
  }

  @get('/profile-photos')
  @response(200, {
    description: 'Array of ProfilePhoto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProfilePhoto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProfilePhoto) filter?: Filter<ProfilePhoto>,
  ): Promise<ProfilePhoto[]> {
    return this.profilePhotoRepository.find(filter);
  }

  @patch('/profile-photos')
  @response(200, {
    description: 'ProfilePhoto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfilePhoto, {partial: true}),
        },
      },
    })
    profilePhoto: ProfilePhoto,
    @param.where(ProfilePhoto) where?: Where<ProfilePhoto>,
  ): Promise<Count> {
    return this.profilePhotoRepository.updateAll(profilePhoto, where);
  }

  @get('/profile-photos/{id}')
  @response(200, {
    description: 'ProfilePhoto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProfilePhoto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProfilePhoto, {exclude: 'where'}) filter?: FilterExcludingWhere<ProfilePhoto>
  ): Promise<ProfilePhoto> {
    return this.profilePhotoRepository.findById(id, filter);
  }



  @patch('/profile-photos/{id}')
  @response(204, {
    description: 'ProfilePhoto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProfilePhoto, {partial: true}),
        },
      },
    })
    profilePhoto: ProfilePhoto,
  ): Promise<void> {
    await this.profilePhotoRepository.updateById(id, profilePhoto);
  }

  @put('/profile-photos/{id}')
  @response(204, {
    description: 'ProfilePhoto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() profilePhoto: ProfilePhoto,
  ): Promise<void> {
    await this.profilePhotoRepository.replaceById(id, profilePhoto);
  }

  @del('/profile-photos/{id}')
  @response(204, {
    description: 'ProfilePhoto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.profilePhotoRepository.deleteById(id);
  }
}
