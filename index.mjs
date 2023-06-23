import { log } from './log.mjs';
import { S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({ region: 'us-east-1' })
export const handler = async(event) => {
    const record = event.Records[0];
    const Bucket = record.s3.bucket.name;
    const key = record.s3.object.key;
    const getObjectResult = await s3Client.getObject({
        Bucket,
        Key,
    });
    const mega_byte = 1024 * 1024;

    if (getObjectResult.ContentLength > 1 * mega_byte) {
        log('Objeto Muito Grande');

        return 'Objeto Muito Grande';

    }

        log('Objeto de Tamanho OK');
        return 'Objeto de Tamanhao OK';
 
    // log('event:' + JSON.stringify(event));

    // return {
    //     statusCode: 200,
    //     'body' => "<html><body>Dados da req: $req</body></html>",
    //     'headers' => [
    //         'Content-Type' => 'text/html', 
    //   ],
    // };
};
