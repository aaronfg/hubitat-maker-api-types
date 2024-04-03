import { CapabilityName } from "./Capability";
import { Command } from "./Command";
import { Device } from "./Device";

/**
 * A Hubitat Device object returned from the `devices/all` endpoint.
 *
 * Returns full details for a device, compared to the
 * standard @{link Device} object returned from the `devices/` endpoint.
 */
export interface DeviceFullDetails extends Device {
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
   * Array of device capabilites.
   */
  capabilities: CapabilityName[];
  /**
   * Array of commands that can be sent to the hub
   * to perform various actions.
   */
  commands: Command[];
  /**
   * The attruibutes that come from the `device/all` endpoint
   * are not useful and are a nightmare to parse.
   *
   * We use the atrributes array from the {@link DeviceInfo.attributes}
   * that is returned from the `device/info` endpoint instead.
   * @see {@link DeviceInfo}
   */
  attributes: unknown;
}
