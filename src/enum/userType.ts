export enum userType {
    Teacher = 0,
    Student = 1
}

export function getEnumKeyByEnumValue(myEnum: any, enumValue: number): string {
    return Object.keys(myEnum).find(key => myEnum[key] === enumValue)!;
}

// const renk: userType = userType.Yesil;
// const renkAdi: string = getEnumKeyByEnumValue(userType, renk);