import { log } from './log.mjs';

export const handler = async(event) => {

    log('Log de execução. apos GitHub Action event :' + JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify(event),
    };
};
#Teste
