import { Attribute } from "./Attributes";

export enum CapabilityName {
  Actuator = "Actuator",
  Battery = "Battery",
  ChangeLevel = "ChangeLevel",
  ColorTemperature = "ColorTemperature",
  Configuration = "Configuration",
  DoubleTapableButton = "DoubleTapableButton",
  HoldableButton = "HoldableButton",
  Initialize = "Initialize",
  Light = "Light",
  Notification = "Notification",
  Outlet = "Outlet",
  PowerMeter = "PowerMeter",
  PresenceSensor = "PresenceSensor",
  PushableButton = "PushableButton",
  Refresh = "Refresh",
  Sensor = "Sensor",
  Switch = "Switch",
  SwitchLevel = "SwitchLevel",
  Telnet = "Telnet",
  TemperatureMeasurement = "TemperatureMeasurement",
  WaterSensor = "WaterSensor",
}

export interface CapabilityParsed {
  name: CapabilityName;
  attributes: Attribute[];
}

/**
 * This awful interface is for an object that describes
 * the Attributes associated with a Capability.
 *
 * It is returned in the `getDeviceInfo()` endpoint
 * in the `capabilities` array.
 *
 * It's insanity that this array is either a string--the
 * name of the capability--or it's an object like the one
 * described in this interface.
 *
 * Of course the name of the attribute is lowercase here, but
 * is Capital case in the capabilities array... 🤬
 *
 * Parsing it is gross, but it is what it is.
 *
 * @see https://community.hubitat.com/t/maker-api-device-attributes/69962/23
 * to read up on other people complaining about this
 */
export interface CapabilityAttributes {
  attributes: [
    {
      name: "switch";
      /** ? Always shows up as `null` */
      dataType: unknown;
    }
  ];
}
