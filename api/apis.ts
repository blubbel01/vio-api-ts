export * from './groupApi';
import { GroupApi } from './groupApi';
export * from './ownApi';
import { OwnApi } from './ownApi';
export * from './systemApi';
import { SystemApi } from './systemApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [GroupApi, OwnApi, SystemApi];
