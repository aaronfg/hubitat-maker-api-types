import { Capability } from "./Capability";
import { Command } from "./Command";

/**
 * A Hubitat Device object returned from the `devices/` endpoint.
 *
 * This is the simplest Device descriptor.
 */
export interface Device {
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
}
