/**
 * Vio-V
 * Vio-V API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GroupLSPDBlacklist {
    'GroupID': number;
    'GroupName'?: string;
    'Expiry': number;
    'Reason': string;
    'Creator': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "GroupID",
            "baseName": "GroupID",
            "type": "number"
        },
        {
            "name": "GroupName",
            "baseName": "GroupName",
            "type": "string"
        },
        {
            "name": "Expiry",
            "baseName": "Expiry",
            "type": "number"
        },
        {
            "name": "Reason",
            "baseName": "Reason",
            "type": "string"
        },
        {
            "name": "Creator",
            "baseName": "Creator",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GroupLSPDBlacklist.attributeTypeMap;
    }
}

