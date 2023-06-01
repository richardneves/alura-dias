import { log } from './log.mjs';

export const handler = async(event) => {

    log('Log de execução apos Github Action. event :' + JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify(event),
    };
};
