/// <reference path="index.d.ts" />
interface ClockConstructor {
    currentTime: Date;
}
declare class Clock implements ClockConstructor {
    private _currentTime;
    currentTime: Date;
    constructor(h: number, m: number);
}
