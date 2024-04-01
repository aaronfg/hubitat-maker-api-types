**@aaronfgdev/hubitat-maker-api-types** • [Readme](../README.md) \| [API](../globals.md)

***

[@aaronfgdev/hubitat-maker-api-types](../README.md) / Device

# Interface: Device

A Hubitat Device

## Properties

### capabilities

> **capabilities**: [`Capability`](../enumerations/Capability.md)[]

Array of device capabilites.

#### Source

[models/Device.ts:48](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L48)

***

### commands

> **commands**: `Command`[]

Array of commands that can be sent to the hub
to perform various actions.

#### Source

[models/Device.ts:53](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L53)

***

### date?

> **`optional`** **date**: `string`

I have no idea

#### Source

[models/Device.ts:28](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L28)

***

### id

> **id**: `string`

Unique identifier

#### Source

[models/Device.ts:26](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L26)

***

### label

> **label**: `string`

User-defined label for this device

#### Source

[models/Device.ts:20](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L20)

***

### manufacturer?

> **`optional`** **manufacturer**: `string`

Device manufacturer.

It's always null in the returned JSON

#### Source

[models/Device.ts:40](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L40)

***

### model?

> **`optional`** **model**: `string`

Device model.

It's always null in the returned JSON

#### Source

[models/Device.ts:34](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L34)

***

### name

> **name**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

Even though this prop is `name`, in the JSON
returned from the Maker API this is essentially
the type of Device -- it seems to always be the same value
as `type`. Not sure why.

#### Source

[models/Device.ts:16](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L16)

***

### room?

> **`optional`** **room**: `string`

Name of the Room this Device is associated with.

#### Source

[models/Device.ts:44](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L44)

***

### type

> **type**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

#### Source

[models/Device.ts:24](https://github.com/aaronfg/hubitat-maker-api-types/blob/a87585a/src/models/Device.ts#L24)
