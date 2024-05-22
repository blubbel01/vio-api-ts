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

export class Character {
    'ID'?: number;
    'AccountID': number;
    'Name': string;
    'Playingtime'?: number;
    'Gender': number;
    'STVO': number;
    'VehicleLimit': number;
    'BusExp'?: number;
    'Spawn'?: string;
    'SpawnID'?: number;
    'Wanteds'?: number;
    'JailTime'?: number;
    'MethTime'?: number;
    'WeaponLicenseA'?: number;
    'WeaponLicenseB'?: number;
    'WeaponLicenseC'?: number;
    'ActivityTimestamp'?: number;
    'QuestID': string;
    'QuestStatus'?: number;
    'PhoneNumber'?: number;
    'FactionTime'?: number;
    'Grade'?: number;
    'Raiting': number;
    'DrivingLicenseA'?: number;
    'FoodStatus': number;
    'ActivityStep': number;
    'DrivingLicensesBlockedTimestamp'?: number;
    'WantedArchiv'?: string;
    'Skin'?: string;
    'Skills'?: string;
    'DailyQuests'?: string;
    'BonusVehicleLimit'?: number;
    'Accessory'?: string;
    'Achievements'?: string;
    'TotalStatus'?: string;
    'ActiveStatus'?: string;
    'SkillPoints'?: string;
    'SkillBranches'?: string;
    'SkillSync': number;
    'ExpBoost'?: number;
    'Tattoos'?: string;
    'Licenses'?: string;
    'DailyBonus'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "number"
        },
        {
            "name": "AccountID",
            "baseName": "AccountID",
            "type": "number"
        },
        {
            "name": "Name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "Playingtime",
            "baseName": "Playingtime",
            "type": "number"
        },
        {
            "name": "Gender",
            "baseName": "Gender",
            "type": "number"
        },
        {
            "name": "STVO",
            "baseName": "STVO",
            "type": "number"
        },
        {
            "name": "VehicleLimit",
            "baseName": "VehicleLimit",
            "type": "number"
        },
        {
            "name": "BusExp",
            "baseName": "BusExp",
            "type": "number"
        },
        {
            "name": "Spawn",
            "baseName": "Spawn",
            "type": "string"
        },
        {
            "name": "SpawnID",
            "baseName": "SpawnID",
            "type": "number"
        },
        {
            "name": "Wanteds",
            "baseName": "Wanteds",
            "type": "number"
        },
        {
            "name": "JailTime",
            "baseName": "JailTime",
            "type": "number"
        },
        {
            "name": "MethTime",
            "baseName": "MethTime",
            "type": "number"
        },
        {
            "name": "WeaponLicenseA",
            "baseName": "WeaponLicenseA",
            "type": "number"
        },
        {
            "name": "WeaponLicenseB",
            "baseName": "WeaponLicenseB",
            "type": "number"
        },
        {
            "name": "WeaponLicenseC",
            "baseName": "WeaponLicenseC",
            "type": "number"
        },
        {
            "name": "ActivityTimestamp",
            "baseName": "ActivityTimestamp",
            "type": "number"
        },
        {
            "name": "QuestID",
            "baseName": "QuestID",
            "type": "string"
        },
        {
            "name": "QuestStatus",
            "baseName": "QuestStatus",
            "type": "number"
        },
        {
            "name": "PhoneNumber",
            "baseName": "PhoneNumber",
            "type": "number"
        },
        {
            "name": "FactionTime",
            "baseName": "FactionTime",
            "type": "number"
        },
        {
            "name": "Grade",
            "baseName": "Grade",
            "type": "number"
        },
        {
            "name": "Raiting",
            "baseName": "Raiting",
            "type": "number"
        },
        {
            "name": "DrivingLicenseA",
            "baseName": "DrivingLicenseA",
            "type": "number"
        },
        {
            "name": "FoodStatus",
            "baseName": "FoodStatus",
            "type": "number"
        },
        {
            "name": "ActivityStep",
            "baseName": "ActivityStep",
            "type": "number"
        },
        {
            "name": "DrivingLicensesBlockedTimestamp",
            "baseName": "DrivingLicensesBlockedTimestamp",
            "type": "number"
        },
        {
            "name": "WantedArchiv",
            "baseName": "WantedArchiv",
            "type": "string"
        },
        {
            "name": "Skin",
            "baseName": "Skin",
            "type": "string"
        },
        {
            "name": "Skills",
            "baseName": "Skills",
            "type": "string"
        },
        {
            "name": "DailyQuests",
            "baseName": "DailyQuests",
            "type": "string"
        },
        {
            "name": "BonusVehicleLimit",
            "baseName": "BonusVehicleLimit",
            "type": "number"
        },
        {
            "name": "Accessory",
            "baseName": "Accessory",
            "type": "string"
        },
        {
            "name": "Achievements",
            "baseName": "Achievements",
            "type": "string"
        },
        {
            "name": "TotalStatus",
            "baseName": "TotalStatus",
            "type": "string"
        },
        {
            "name": "ActiveStatus",
            "baseName": "ActiveStatus",
            "type": "string"
        },
        {
            "name": "SkillPoints",
            "baseName": "SkillPoints",
            "type": "string"
        },
        {
            "name": "SkillBranches",
            "baseName": "SkillBranches",
            "type": "string"
        },
        {
            "name": "SkillSync",
            "baseName": "SkillSync",
            "type": "number"
        },
        {
            "name": "ExpBoost",
            "baseName": "ExpBoost",
            "type": "number"
        },
        {
            "name": "Tattoos",
            "baseName": "Tattoos",
            "type": "string"
        },
        {
            "name": "Licenses",
            "baseName": "Licenses",
            "type": "string"
        },
        {
            "name": "DailyBonus",
            "baseName": "DailyBonus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Character.attributeTypeMap;
    }
}
