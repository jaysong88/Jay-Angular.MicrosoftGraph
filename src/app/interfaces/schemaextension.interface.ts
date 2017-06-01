export interface SchemaExtension {
    description: string;
    id: string;
    owner: string;
    properties: ExtensionSchemaProperty[];
    status: string;
    targetTypes: string[];
}

export interface ExtensionSchemaProperty {
    name: string;
    type: string;
}
