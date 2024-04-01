**@aaronfgdev/hubitat-maker-api-types** • [Readme](../README.md) \| [API](../globals.md)

***

[@aaronfgdev/hubitat-maker-api-types](../README.md) / Device

# Interface: Device

A Hubitat Device object returned from the `devices/` endpoint.

This is the simplest Device descriptor.

## Properties

### id

> **id**: `string`

Unique identifier

#### Source

[models/Device.ts:11](https://github.com/aaronfg/hubitat-maker-api-types/blob/1509cff/src/models/Device.ts#L11)

***

### label

> **label**: `string`

User-defined label for this device

#### Source

[models/Device.ts:24](https://github.com/aaronfg/hubitat-maker-api-types/blob/1509cff/src/models/Device.ts#L24)

***

### name

> **name**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

Even though this prop is `name`, in the JSON
returned from the Maker API this is essentially
the type of Device -- it seems to always be the same value
as `type`. Not sure why.

#### Source

[models/Device.ts:20](https://github.com/aaronfg/hubitat-maker-api-types/blob/1509cff/src/models/Device.ts#L20)

***

### room?

> **`optional`** **room**: `string`

Name of the Room this Device is associated with.

#### Source

[models/Device.ts:32](https://github.com/aaronfg/hubitat-maker-api-types/blob/1509cff/src/models/Device.ts#L32)

***

### type

> **type**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

#### Source

[models/Device.ts:28](https://github.com/aaronfg/hubitat-maker-api-types/blob/1509cff/src/models/Device.ts#L28)
