**@aaronfgdev/hubitat-maker-api-types** • [Readme](../README.md) \| [API](../globals.md)

***

[@aaronfgdev/hubitat-maker-api-types](../README.md) / Device

# Interface: Device

A Hubitat Device object returned from the `devices/` endpoint.

This is the simplest Device descriptor.

## Properties

### capabilities

> **capabilities**: [`CapabilityName`](../enumerations/CapabilityName.md)[]

Array of device capability names.

Don't confuse this with the capabilities array
in the DeviceInfo interface -- That one has a mix
of [CapabilityName](../enumerations/CapabilityName.md) and [CapabilityAttributes](CapabilityAttributes.md) interfaces...

#### Source

[models/Device.ts:39](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/Device.ts#L39)

***

### id

> **id**: `string`

Unique identifier

#### Source

[models/Device.ts:10](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/Device.ts#L10)

***

### label

> **label**: `string`

User-defined label for this device

#### Source

[models/Device.ts:23](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/Device.ts#L23)

***

### name

> **name**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

Even though this prop is `name`, in the JSON
returned from the Maker API this is essentially
the type of Device -- it seems to always be the same value
as `type`. Not sure why.

#### Source

[models/Device.ts:19](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/Device.ts#L19)

***

### room?

> **`optional`** **room**: `string`

Name of the Room this Device is associated with.

#### Source

[models/Device.ts:31](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/Device.ts#L31)

***

### type

> **type**: `string`

Type of Device. e.g "Generic Zigbee Outlet"

#### Source

[models/Device.ts:27](https://github.com/aaronfg/hubitat-maker-api-types/blob/c4aa04a/src/models/Device.ts#L27)
