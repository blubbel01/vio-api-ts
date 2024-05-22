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

export class GroupVehicle {
    'ID': number;
    'GroupID': number;
    'Hash': string;
    'PosX': string;
    'PosY': string;
    'PosZ': string;
    'RotX': string;
    'RotY': string;
    'RotZ': string;
    'Color1': number;
    'Color2': number;
    'BuyDate': Date;
    'Color1R': number;
    'Color1G': number;
    'Color1B': number;
    'Color2R': number;
    'Color2G': number;
    'Color2B': number;
    'Spoilers': number;
    'FrontBumper': number;
    'RearBumper': number;
    'SideSkirt': number;
    'Exhaust': number;
    'Frame': number;
    'Grille': number;
    'Hood': number;
    'Fender': number;
    'RightFender': number;
    'Roof': number;
    'Engine': number;
    'Brakes': number;
    'Transmission': number;
    'Horns': number;
    'Suspension': number;
    'Armor': number;
    'Turbo': number;
    'Xenon': number;
    'FrontWheels': number;
    'BackWheels': number;
    'Plateholders': number;
    'TrimDesign': number;
    'Ornaments': number;
    'DialDesign': number;
    'SteeringWheel': number;
    'ShiftLever': number;
    'Plaques': number;
    'Hydraulics': number;
    'Livery': number;
    'Plate': number;
    'WindowTint': number;
    'ModName': string;
    'InteriorColor': number;
    'ChipTuning': number;
    'PaintArt': number;
    'WheelColor': number;
    'WheelType': number;
    'SpawnGarage': number;
    'LastDriver': string;
    'PlateText': string;
    'Fuel': string;
    'Health': number;
    'DirtLevel': string;
    'Permission'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "number"
        },
        {
            "name": "GroupID",
            "baseName": "GroupID",
            "type": "number"
        },
        {
            "name": "Hash",
            "baseName": "Hash",
            "type": "string"
        },
        {
            "name": "PosX",
            "baseName": "PosX",
            "type": "string"
        },
        {
            "name": "PosY",
            "baseName": "PosY",
            "type": "string"
        },
        {
            "name": "PosZ",
            "baseName": "PosZ",
            "type": "string"
        },
        {
            "name": "RotX",
            "baseName": "RotX",
            "type": "string"
        },
        {
            "name": "RotY",
            "baseName": "RotY",
            "type": "string"
        },
        {
            "name": "RotZ",
            "baseName": "RotZ",
            "type": "string"
        },
        {
            "name": "Color1",
            "baseName": "Color1",
            "type": "number"
        },
        {
            "name": "Color2",
            "baseName": "Color2",
            "type": "number"
        },
        {
            "name": "BuyDate",
            "baseName": "BuyDate",
            "type": "Date"
        },
        {
            "name": "Color1R",
            "baseName": "Color1R",
            "type": "number"
        },
        {
            "name": "Color1G",
            "baseName": "Color1G",
            "type": "number"
        },
        {
            "name": "Color1B",
            "baseName": "Color1B",
            "type": "number"
        },
        {
            "name": "Color2R",
            "baseName": "Color2R",
            "type": "number"
        },
        {
            "name": "Color2G",
            "baseName": "Color2G",
            "type": "number"
        },
        {
            "name": "Color2B",
            "baseName": "Color2B",
            "type": "number"
        },
        {
            "name": "Spoilers",
            "baseName": "Spoilers",
            "type": "number"
        },
        {
            "name": "FrontBumper",
            "baseName": "FrontBumper",
            "type": "number"
        },
        {
            "name": "RearBumper",
            "baseName": "RearBumper",
            "type": "number"
        },
        {
            "name": "SideSkirt",
            "baseName": "SideSkirt",
            "type": "number"
        },
        {
            "name": "Exhaust",
            "baseName": "Exhaust",
            "type": "number"
        },
        {
            "name": "Frame",
            "baseName": "Frame",
            "type": "number"
        },
        {
            "name": "Grille",
            "baseName": "Grille",
            "type": "number"
        },
        {
            "name": "Hood",
            "baseName": "Hood",
            "type": "number"
        },
        {
            "name": "Fender",
            "baseName": "Fender",
            "type": "number"
        },
        {
            "name": "RightFender",
            "baseName": "RightFender",
            "type": "number"
        },
        {
            "name": "Roof",
            "baseName": "Roof",
            "type": "number"
        },
        {
            "name": "Engine",
            "baseName": "Engine",
            "type": "number"
        },
        {
            "name": "Brakes",
            "baseName": "Brakes",
            "type": "number"
        },
        {
            "name": "Transmission",
            "baseName": "Transmission",
            "type": "number"
        },
        {
            "name": "Horns",
            "baseName": "Horns",
            "type": "number"
        },
        {
            "name": "Suspension",
            "baseName": "Suspension",
            "type": "number"
        },
        {
            "name": "Armor",
            "baseName": "Armor",
            "type": "number"
        },
        {
            "name": "Turbo",
            "baseName": "Turbo",
            "type": "number"
        },
        {
            "name": "Xenon",
            "baseName": "Xenon",
            "type": "number"
        },
        {
            "name": "FrontWheels",
            "baseName": "FrontWheels",
            "type": "number"
        },
        {
            "name": "BackWheels",
            "baseName": "BackWheels",
            "type": "number"
        },
        {
            "name": "Plateholders",
            "baseName": "Plateholders",
            "type": "number"
        },
        {
            "name": "TrimDesign",
            "baseName": "TrimDesign",
            "type": "number"
        },
        {
            "name": "Ornaments",
            "baseName": "Ornaments",
            "type": "number"
        },
        {
            "name": "DialDesign",
            "baseName": "DialDesign",
            "type": "number"
        },
        {
            "name": "SteeringWheel",
            "baseName": "SteeringWheel",
            "type": "number"
        },
        {
            "name": "ShiftLever",
            "baseName": "ShiftLever",
            "type": "number"
        },
        {
            "name": "Plaques",
            "baseName": "Plaques",
            "type": "number"
        },
        {
            "name": "Hydraulics",
            "baseName": "Hydraulics",
            "type": "number"
        },
        {
            "name": "Livery",
            "baseName": "Livery",
            "type": "number"
        },
        {
            "name": "Plate",
            "baseName": "Plate",
            "type": "number"
        },
        {
            "name": "WindowTint",
            "baseName": "WindowTint",
            "type": "number"
        },
        {
            "name": "ModName",
            "baseName": "ModName",
            "type": "string"
        },
        {
            "name": "InteriorColor",
            "baseName": "InteriorColor",
            "type": "number"
        },
        {
            "name": "ChipTuning",
            "baseName": "ChipTuning",
            "type": "number"
        },
        {
            "name": "PaintArt",
            "baseName": "PaintArt",
            "type": "number"
        },
        {
            "name": "WheelColor",
            "baseName": "WheelColor",
            "type": "number"
        },
        {
            "name": "WheelType",
            "baseName": "WheelType",
            "type": "number"
        },
        {
            "name": "SpawnGarage",
            "baseName": "SpawnGarage",
            "type": "number"
        },
        {
            "name": "LastDriver",
            "baseName": "LastDriver",
            "type": "string"
        },
        {
            "name": "PlateText",
            "baseName": "PlateText",
            "type": "string"
        },
        {
            "name": "Fuel",
            "baseName": "Fuel",
            "type": "string"
        },
        {
            "name": "Health",
            "baseName": "Health",
            "type": "number"
        },
        {
            "name": "DirtLevel",
            "baseName": "DirtLevel",
            "type": "string"
        },
        {
            "name": "Permission",
            "baseName": "Permission",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GroupVehicle.attributeTypeMap;
    }
}

