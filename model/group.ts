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

export class Group {
    'ID': number;
    'Name': string;
    'Exp': number;
    'Level': number;
    'Server': number;
    'Msg': string;
    'R'?: number;
    'G': number;
    'B'?: number;
    'Chat_R': number;
    'Chat_G': number;
    'Chat_B': number;
    'Memberlimit': number;
    'Tag': number;
    'Rang0': string;
    'Rang1': string;
    'Rang2'?: string;
    'Rang3'?: string;
    'Rang4': string;
    'Rang5': string;
    'LastExp': number;
    'R2': number;
    'G2': number;
    'B2': number;
    'Type': string;
    'Boost1': number;
    'SkinMale': string;
    'SkinFemale': string;
    'Boosts': string;
    'Relationships': string;
    'CraftingStorage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "number"
        },
        {
            "name": "Name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "Exp",
            "baseName": "Exp",
            "type": "number"
        },
        {
            "name": "Level",
            "baseName": "Level",
            "type": "number"
        },
        {
            "name": "Server",
            "baseName": "Server",
            "type": "number"
        },
        {
            "name": "Msg",
            "baseName": "Msg",
            "type": "string"
        },
        {
            "name": "R",
            "baseName": "R",
            "type": "number"
        },
        {
            "name": "G",
            "baseName": "G",
            "type": "number"
        },
        {
            "name": "B",
            "baseName": "B",
            "type": "number"
        },
        {
            "name": "Chat_R",
            "baseName": "Chat_R",
            "type": "number"
        },
        {
            "name": "Chat_G",
            "baseName": "Chat_G",
            "type": "number"
        },
        {
            "name": "Chat_B",
            "baseName": "Chat_B",
            "type": "number"
        },
        {
            "name": "Memberlimit",
            "baseName": "Memberlimit",
            "type": "number"
        },
        {
            "name": "Tag",
            "baseName": "Tag",
            "type": "number"
        },
        {
            "name": "Rang0",
            "baseName": "Rang0",
            "type": "string"
        },
        {
            "name": "Rang1",
            "baseName": "Rang1",
            "type": "string"
        },
        {
            "name": "Rang2",
            "baseName": "Rang2",
            "type": "string"
        },
        {
            "name": "Rang3",
            "baseName": "Rang3",
            "type": "string"
        },
        {
            "name": "Rang4",
            "baseName": "Rang4",
            "type": "string"
        },
        {
            "name": "Rang5",
            "baseName": "Rang5",
            "type": "string"
        },
        {
            "name": "LastExp",
            "baseName": "LastExp",
            "type": "number"
        },
        {
            "name": "R2",
            "baseName": "R2",
            "type": "number"
        },
        {
            "name": "G2",
            "baseName": "G2",
            "type": "number"
        },
        {
            "name": "B2",
            "baseName": "B2",
            "type": "number"
        },
        {
            "name": "Type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "Boost1",
            "baseName": "Boost1",
            "type": "number"
        },
        {
            "name": "SkinMale",
            "baseName": "SkinMale",
            "type": "string"
        },
        {
            "name": "SkinFemale",
            "baseName": "SkinFemale",
            "type": "string"
        },
        {
            "name": "Boosts",
            "baseName": "Boosts",
            "type": "string"
        },
        {
            "name": "Relationships",
            "baseName": "Relationships",
            "type": "string"
        },
        {
            "name": "CraftingStorage",
            "baseName": "CraftingStorage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Group.attributeTypeMap;
    }
}
