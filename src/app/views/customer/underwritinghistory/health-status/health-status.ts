export interface IHealthStatus {

    // SSN: number;
    // ApplicationId: number;
    // RuleSetVersion: number;
    // Diasease:string;
    // Points:number;
    // VersionPoints:number;
    // Status:string;
       appId: number,
       ssn: number,
       rulesetVersion: 1,
       rules: rules[];
}

export interface rules{
    name: string,
    parameters:string,
    points: number,
    ruleDesc: string,
    status: string
}