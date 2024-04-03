import { CapabilityName } from "./Capability";
import { Command } from "./Command";
import { DeviceInfoAttribute } from "./DeviceInfoAttribute";
/**
 * A Hubitat Device object returned from the `devices/[Device ID]` endpoint.
 *
 * While you'd think this would be the same data as when you
 * query the `devices/all` endpoint, that's not the case.
 *
 * Sigh.
 */
export interface DeviceInfo {
    /** Unique identifier */
    id: string;
    /**
     * Type of Device. e.g "Generic Zigbee Outlet"
     *
     * Even though this prop is `name`, in the JSON
     * returned from the Maker API this is essentially
     * the type of Device -- it seems to always be the same value
     * as `type`. Not sure why.
     */
    name: string;
    /**
     * User-defined label for this device
     */
    label: string;
    /**
     * Type of Device. e.g "Generic Zigbee Outlet"
     */
    type: string;
    /**
     * Name of the Room this Device is associated with.
     */
    room?: string;
    /**
     * Array of device capabilites.
     */
    capabilities: CapabilityName[];
    /**
     * Array of commands that can be sent to the hub
     * to perform various actions.
     */
    commands: Command[];
    attributes: DeviceInfoAttribute[];
}
