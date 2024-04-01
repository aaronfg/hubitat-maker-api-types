**@aaronfgdev/hubitat-maker-api-types** • [Readme](../README.md) \| [API](../globals.md)

***

[@aaronfgdev/hubitat-maker-api-types](../README.md) / CapabilityAttributes

# Interface: CapabilityAttributes

This awful interface is for an object that describes
the Attributes associated with a Capability.

It is returned in the `getDeviceInfo()` endpoint
in the `capabilities` array.

It's insanity that this array is either a string--the
name of the capability--or it's an object like the one
described in this interface.

Of course the name of the attribute is lowercase here, but
is Capital case in the capabilities array... 🤬

Parsing it is gross, but it is what it is.

## See

https://community.hubitat.com/t/maker-api-device-attributes/69962/23
to read up on other people complaining about this

## Properties

### attributes

> **attributes**: [`Object`]

#### Source

[models/Capability.ts:45](https://github.com/aaronfg/hubitat-maker-api-types/blob/1509cff/src/models/Capability.ts#L45)
