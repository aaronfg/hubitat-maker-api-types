import { AttributeDataType } from "./Attributes";
import { CapabilityName } from "./Capability";

export interface DeviceInfoAttribute {
  /**
   * Name of this attribute.
   *
   * ie `"switch"` or `"power"`.
   *
   * This will match with a {@link CapabilityName} but as a
   * lowercase string instead. Yayy consistency.
   */
  name: string;
  /**
   * The current value of this attribute.
   *
   * The type of this value should match the
   * {@link DeviceInfoAttribute.dataType | `dataType`}.
   *
   * i.e. if `dataType === AttributeDataType.Number`,
   * the `currentValue` will be a number.
   *
   * Except for:
   * - when `dataType === AttributeDataType.Enum`. Then
   * `currentValue` will be the value of one element
   * in that enum (but the enum will be represented
   * in the {@link DeviceInfoAttribute.values | `values`}
   * prop as an array of the enum value type (so far
   * I've only seen strings).
   * - when `dataType === AttributeDataType.JsonObject`.
   * Then `currentValue` will be a JSON string that will
   * need to be parsed.
   *
   * @see {@link AttributeDataType}
   */
  currentValue: number | string;
  /**
   * Determines the type for `currentValue`.
   */
  dataType: `${AttributeDataType}`;
  /**
   * If dataType is {@link AttributeDataType.Enum},
   * this will be an array of the values of that enum.
   */
  values?: string[];
}
