export interface JobDesc{
    id: number;
    title: String;
    domain: String;
    requirement: String;
}

export interface UserData{
    empId:number;
    name: String,
    email: String;
    password: String;
    primarySkill: String;
    secondarySkil: String;
    preferredRole: String;
    role: String;
}

export interface Nomination{
    userData: UserData | null;
    jobDesc: JobDesc | null;
    //nominationId:number;
    //title: String;
    // domain: String;
    // requirement:String;
    // empId:number;
    //name: String,
    // email: String;
    // primarySkill: String;
    // secondarySkil: String;
}