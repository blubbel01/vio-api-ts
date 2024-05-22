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

export class GroupSkin {
    'GangID': number;
    'Torso': number;
    'TorsoTexture': number;
    'Legs': number;
    'LegsTexture': number;
    'Feet': number;
    'FeetTexture': number;
    'Accessories': number;
    'Undershirt': number;
    'UndershirtTexture': number;
    'Tops': number;
    'TopsTexture': number;
    'Gender': number;
    'PrimKey'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "GangID",
            "baseName": "GangID",
            "type": "number"
        },
        {
            "name": "Torso",
            "baseName": "Torso",
            "type": "number"
        },
        {
            "name": "TorsoTexture",
            "baseName": "TorsoTexture",
            "type": "number"
        },
        {
            "name": "Legs",
            "baseName": "Legs",
            "type": "number"
        },
        {
            "name": "LegsTexture",
            "baseName": "LegsTexture",
            "type": "number"
        },
        {
            "name": "Feet",
            "baseName": "Feet",
            "type": "number"
        },
        {
            "name": "FeetTexture",
            "baseName": "FeetTexture",
            "type": "number"
        },
        {
            "name": "Accessories",
            "baseName": "Accessories",
            "type": "number"
        },
        {
            "name": "Undershirt",
            "baseName": "Undershirt",
            "type": "number"
        },
        {
            "name": "UndershirtTexture",
            "baseName": "UndershirtTexture",
            "type": "number"
        },
        {
            "name": "Tops",
            "baseName": "Tops",
            "type": "number"
        },
        {
            "name": "TopsTexture",
            "baseName": "TopsTexture",
            "type": "number"
        },
        {
            "name": "Gender",
            "baseName": "Gender",
            "type": "number"
        },
        {
            "name": "PrimKey",
            "baseName": "PrimKey",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GroupSkin.attributeTypeMap;
    }
}

