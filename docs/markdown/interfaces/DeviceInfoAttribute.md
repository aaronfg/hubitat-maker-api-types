**@aaronfgdev/hubitat-maker-api-types** • [Readme](../README.md) \| [API](../globals.md)

***

[@aaronfgdev/hubitat-maker-api-types](../README.md) / DeviceInfoAttribute

# Interface: DeviceInfoAttribute

## Properties

### currentValue

> **currentValue**: `string` \| `number`

The current value of this attribute.

The type of this value should match the
[`dataType`](DeviceInfoAttribute.md#datatype).

i.e. if `dataType === AttributeDataType.Number`,
the `currentValue` will be a number.

Except for:
- when `dataType === AttributeDataType.Enum`. Then
`currentValue` will be the value of one element
in that enum (but the enum will be represented
in the [`values`](DeviceInfoAttribute.md#values)
prop as an array of the enum value type (so far
I've only seen strings).
- when `dataType === AttributeDataType.JsonObject`.
Then `currentValue` will be a JSON string that will
need to be parsed.

#### See

[AttributeDataType](../enumerations/AttributeDataType.md)

#### Source

[models/DeviceInfoAttribute.ts:36](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfoAttribute.ts#L36)

***

### dataType

> **dataType**: `"ENUM"` \| `"NUMBER"` \| `"STRING"` \| `"JSON_OBJECT"`

Determines the type for `currentValue`.

#### Source

[models/DeviceInfoAttribute.ts:40](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfoAttribute.ts#L40)

***

### name

> **name**: `string`

Name of this attribute.

ie `"switch"` or `"power"`.

This will match with a [CapabilityName](../enumerations/CapabilityName.md) but as a
lowercase string instead. Yayy consistency.

#### Source

[models/DeviceInfoAttribute.ts:13](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfoAttribute.ts#L13)

***

### values?

> **`optional`** **values**: `string`[]

If dataType is [AttributeDataType.Enum](../enumerations/AttributeDataType.md#enum),
this will be an array of the values of that enum.

#### Source

[models/DeviceInfoAttribute.ts:45](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfoAttribute.ts#L45)
