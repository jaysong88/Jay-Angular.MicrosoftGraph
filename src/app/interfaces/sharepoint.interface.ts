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

