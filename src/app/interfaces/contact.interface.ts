import { PhysicalAddress,  EmailAddress } from './calendar.interface';

export interface Contact {
    assistantName?: string;
    birthday?: string;
    businessAddress?: PhysicalAddress;
    businessHomePage?: string;
    businessPhones?: string[];
    categories?: string[];
    changeKey?: string;
    children?: string[];
    companyName?: string;
    createdDateTime?: string;
    department?: string;
    displayName?: string;
    emailAddresses?: EmailAddress[];
    fileAs?: string;
    generation?: string;
    givenName?: string;
    homeAddress?: PhysicalAddress;
    homePhones?: string[];
    id?: string;
    imAddresses?: string[];
    initials?: string;
    jobTitle?: string;
    lastModifiedDateTime?: string;
    manager?: string;
    middleName?: string;
    mobilePhone?: string;
    nickName?: string;
    officeLocation?: string;
    otherAddress: PhysicalAddress;
    parentFolderId?: string;
    personalNotes?: string;
    profession?: string;
    spouseName?: string;
    surname?: string;
    title?: string;
    yomiCompanyName?: string;
    yomiGivenName?: string;
    yomiSurname?: string;
}

export interface ContactFolder {
    displayName: string;
    id?: string;
    parentFolderId: string;
}
