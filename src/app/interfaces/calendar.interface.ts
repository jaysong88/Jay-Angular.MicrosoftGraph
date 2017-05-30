export interface Event {
    attendees: Array<Attendee>;
    body: ItemBody;
    bodyPreview?: string;
    categories?: string[];
    createdDateTime?: string;
    hasAttachments: boolean;
    iCalUId?: string;
    id: string;
    importance?: string;
    isAllDay?: boolean;
    isCancelled?: boolean;
    isOrganizer?: boolean;
    isReminderOn?: boolean;
    lastModifiedDateTime?: string;
    location?: Location;
    onlineMeetingUrl?: string;
    organizer?: Recipient;
    originalEndTimeZone?: string;
    originalStart?: string;
    originalStartTimeZone?: string;
    recurrence?: PatternedRecurrence;
    reminderMinutesBeforeStart?: number;
    responseRequested?: boolean;
    responseStatus?: ResponseStatus;
    sensitivity?: string;
    seriesMasterId?: string;
    showAs?: string;
    start?: DateTimeTimeZone;
    end?: DateTimeTimeZone;
    subject: string;
    type?: string;
    webLink?: string;
}

export interface Location {
    address: PhysicalAddress;
    displayName: string;
    locationEmailAddress: string;
}

export interface PhysicalAddress {
    city: string;
    countryOrRegion: string;
    postalCode: string;
    state: string;
    street: string;
}

export interface ItemBody {
    content: string;
    contentType: string;
}

export interface Attendee {
    satus: ResponseStatus;
    type: string;
    emailAddress: EmailAddress;
}

export interface EmailAddress {
    address: string;
    name: string;
}

export interface ResponseStatus {
    response: string;
    time: string;
}

export interface DateTimeTimeZone {
    dateTime: string;
    timeZone: string;
}

export interface Recipient {
    emailAddress: EmailAddress;
}

export interface PatternedRecurrence {
    pattern: RecurrencePattern;
    range: RecurrenceRange;
}

export interface RecurrencePattern {
    dayOfMonth: number;
    daysOfWeek: string[];
    firstDayOfWeek: string;
    index: string;
    interval: number;
    month: number;
    type: string;
}

export interface RecurrenceRange {
    endDate: Date;
    numberOfOccurrences: number;
    recurrenceTimeZone: string;
    startDate: Date;
    type: string;
}

export interface CalendarGroup {
    name: string;
    changeKey: string;
    classId: string;
    id: string;
}

export interface Calendar {
    name: string;
    changeKey: string;
    color: string;
    id: string;
}

export interface MeetingRequest {
    attendees?: Attendee[];
    isOrganizerOptional?: boolean;
    locationConstraint?: LocationConstraint;
    maxCandidates?: number;
    meetingDuration?: string;
    minimumAttendeePercentage?: number;
    returnSuggestionReasons?: boolean;
    timeConstraint?: TimeConstraint;
}

export interface TimeConstraint {
    activityDomain: string;
    timeslots: TimeSlot[];
}

export interface TimeSlot {
    start: DateTimeTimeZone;
    end: DateTimeTimeZone;
}

export interface LocationConstraint{
    isRequired: boolean;
    locations: LocationConstraintItem[];
    suggestLocation: boolean;
}

export interface LocationConstraintItem {
    address: PhysicalAddress;
    displayName: string;
    locationEmailAddress: string;
    resolveAvailability: boolean;
}


