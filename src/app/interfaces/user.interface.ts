export interface User {
    accountEnabled: boolean;
    displayName: string;
    givenName: string;
    surname: string;
    userPrincipalName: string;
    passwordProfile: PasswordProfile;
    mailNickname: string;

}

export interface PasswordProfile {
    password: string;
}

export interface UpdatedUserInformation {
    city?: string;
    companyName?: string;
    state?: string;
    jobTitle?: string;
    aboutMe?: string;
    country?: string;
    department?: string;
    displayName?: string;
    surName?: string;
    mobilePhone?: string;
    officeLocation?: string;
    preferredLanguage?: string;
    preferredName?: string;
}
