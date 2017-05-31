import { Recipient ,  ItemBody, EmailAddress } from './calendar.interface';

export interface Message {
    bccRecipients: Recipient[];
    body: ItemBody;
    bodyPreview?: string;
    categories?: string[];
    ccRecipients?: Recipient[];
    changeKey: String;
    conversationId?: string;
    createdDateTime: string;
    from?: Recipient;
    hasAttachments?: boolean;
    id?: string;
    importance?: string;
    inferenceClassification?: string;
    internetMessageId?: string;
    isDeliveryReceiptRequested?: boolean;
    isDraft?: boolean;
    isRead?: boolean;
    isReadReceiptRequested?: boolean;
    lastModifiedDateTime?: string;
    parentFolderId?: string;
    receivedDateTime?: string;
    replyTo?: Recipient[];
    sender?: Recipient;
    sentDateTime?: string;
    subject?: string;
    toRecipients?: Recipient[];
    uniqueBody?: ItemBody;
    webLink?: string;
}

export interface InferenceClassificationOverride {
    classifyAs: string;
    id: string;
    senderEmailAddress: EmailAddress;
}

export interface MailFolder {
    childFolderCount: number;
    displayName: string;
    id: string;
    parentFolderId: string;
    totalItemCount: number;
    unreadItemCount: number;
}
