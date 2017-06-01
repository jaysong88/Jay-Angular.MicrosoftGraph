export interface Group {
    allowExternalSenders?: Boolean;
    autoSubscribeNewMembers?: Boolean;
    createdDateTime?: string;
    description?: string;
    displayName?: string;
    groupTypes?: string[];
    id?: string;
    isSubscribedByMail?: Boolean;
    mail?: string;
    mailEnabled?: Boolean;
    mailNickname?: string;
    onPremisesLastSyncDateTime?: string;
    onPremisesSecurityIdentifier?: string;
    onPremisesSyncEnabled?: Boolean;
    proxyAddresses: string[];
    securityEnabled: Boolean;
    unseenCount: number;
    visibility: string;
}

export interface Site {
    id?: string;
    createdDateTime?: string;
    description?: string;
    displayName?: string;
    lastModifiedDateTime?: string;
    name?: string;
    root?: Root;
    sharepointIds?: SharepointIds;
    siteCollection?: SiteCollection;
    webUrl?: string;
}

export interface Root {}

export interface SharepointIds {
    listId?: string;
    listItemId?: string;
    listItemUniqueId?: string;
    siteId?: string;
    siteUrl?: string;
    webId?: string;
}

export interface SiteCollection {
    hostname?: string;
}

export interface List {
    id: string;
    list: ListInfo;
    columns: ColumnDefinition[];
    name: string;
    createdBy: IdentitySet;
    createdDateTime: string;
    description: string;
    lastModifiedBy: IdentitySet;
    lastModifiedDateTime: string;
    webUrl: string;
}

export interface IdentitySet {
    application: Identity;
    device: Identity;
    user: Identity;
}

export interface Identity {
    displayName: string;
    id: string;
}

export interface ListInfo {
    hidden: boolean;
    template: string;
}

export interface ColumnDefinition {
    description: string;
    displayName: string;
    enforceUniqueValues: boolean;
    hidden: boolean;
    id: string;
    indexed: boolean;
    name: string;
    readOnly: boolean;
    required: boolean;
    boolean: BooleanColumn;
    calculated: CalculatedColumn;
    choice: ChoiceColumn;
    currency: CurrencyColumn;
    dateTime: DateTimeColumn;
    lookup: LookupColumn;
    number: NumberColumn;
    personOrGroup: PersonOrGroupColumn;
    text: TextColumn;
}

export interface BooleanColumn {
}

export interface CalculatedColumn {
    format: string;
    formula: string;
}

export interface ChoiceColumn {
    allowTextEntry: boolean;
    choices: string[];
    displayAs: string;
}

export interface CurrencyColumn {
    locale: string;
}

export interface DateTimeColumn {
    displayAs: string;
    format: string;
}

export interface LookupColumn {
    allowMultipleValues: boolean;
    columnName: string;
    listId: string;
    primaryLookupColumnId: string;
}

export interface NumberColumn {
    decimalPlaces: string;
    displayAs: string;
    maximum: number;
    minimum: number;
}

export interface PersonOrGroupColumn {
    allowMultipleSelection: boolean;
    displayAs: string;
    chooseFrom: string;
}

export interface TextColumn {
    allowMultipleLines: string;
    appendChangesToExistingText: string;
    linesForEditing: number;
    maxLength: number;
    textType: string;
}


