import { Capability } from "./Capability";
import { Command } from "./Command";

/**
 * A Hubitat Device
 */
export interface Device {
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
  /** Unique identifier */
  id: string;
  /** I have no idea */
  date?: string;
  /**
   * Device model.
   *
   * It's always null in the returned JSON
   */
  model?: string;
  /**
   * Device manufacturer.
   *
   * It's always null in the returned JSON
   */
  manufacturer?: string;
  /**
   * Name of the Room this Device is associated with.
   */
  room?: string;
  /**
   * Array of device capabilites.
   */
  capabilities: Capability[];
  /**
   * Array of commands that can be sent to the hub
   * to perform various actions.
   */
  commands: Command[];
}
