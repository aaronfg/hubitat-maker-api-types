**@aaronfgdev/hubitat-maker-api-types** • [Readme](../README.md) \| [API](../globals.md)

***

[@aaronfgdev/hubitat-maker-api-types](../README.md) / DeviceInfo

# Interface: DeviceInfo

A Hubitat Device object returned from the `devices/[Device ID]` endpoint.

While you'd think this would be the same data as when you
query the `devices/all` endpoint, that's not the case.

Sigh.

## Properties

### attributes

> **attributes**: [`DeviceInfoAttribute`](DeviceInfoAttribute.md)[]

#### Source

[models/DeviceInfo.ts:46](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L46)

***

### capabilities

> **capabilities**: [`CapabilityName`](../enumerations/CapabilityName.md)[]

Array of device capabilites.

#### Source

[models/DeviceInfo.ts:40](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L40)

***

### commands

> **commands**: [`Command`](Command.md)[]

Array of commands that can be sent to the hub
to perform various actions.

#### Source

[models/DeviceInfo.ts:45](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L45)

***

### id

> **id**: `string`

Unique identifier

#### Source

[models/DeviceInfo.ts:15](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L15)

***

### label

> **label**: `string`

User-defined label for this device

#### Source

[models/DeviceInfo.ts:28](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L28)

***

### name

> **name**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

Even though this prop is `name`, in the JSON
returned from the Maker API this is essentially
the type of Device -- it seems to always be the same value
as `type`. Not sure why.

#### Source

[models/DeviceInfo.ts:24](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L24)

***

### room?

> **`optional`** **room**: `string`

Name of the Room this Device is associated with.

#### Source

[models/DeviceInfo.ts:36](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L36)

***

### type

> **type**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

#### Source

[models/DeviceInfo.ts:32](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/DeviceInfo.ts#L32)
