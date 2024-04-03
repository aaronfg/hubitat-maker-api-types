export declare enum AttributeDataType {
    Enum = "ENUM",
    Number = "NUMBER",
    String = "STRING",
    JsonObject = "JSON_OBJECT"
}
export interface Attribute {
    name: string;
    /** Always comes back `null` */
    dataType: unknown;
    currentValue: string | number;
    values?: string[];
}
export interface LockCodeAttributeCurrentValue {
    /** The key is the index of the lock code as a string */
    [key: string]: LockCodeAttributeDetails;
}
export interface LockCodeAttributeDetails {
    code: string;
    name: string;
}
