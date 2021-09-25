import {inject} from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings
} from '@loopback/rest';
/**
 * import {FILE_UPLOAD_SERVICE} from '../keys';
import {FileUploadHandler} from '../types';
 */

/**
 * A controller to handle file uploads using multipart/form-data media type
 */
 export class FileUploadController {
  @post('/files', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Files and fields',
      },
    },
  })
  async fileUpload(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    return new Promise<object>((resolve, reject) => {

      /*
        this.handler(request, response, err => {
        if (err) reject(err);
        else {
          console.log(err);
         // resolve(FileUploadController.getFilesAndFields(request));
        }
      });
*/

console.log(response.status);


    });
  }


}
