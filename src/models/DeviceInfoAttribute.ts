import { AttributeDataType } from "./Attributes";

export interface DeviceInfoAttribute {
  /**
   * Name of this attribute.
   *
   * ie `"switch"` or `"power"`.
   *
   * This will match with a {@link Capability} but as a
   * lowercase string instead. Yayy consistency.
   */
  name: string;
  /**
   * The current value of this attribute.
   *
   * The type of this value should match the
   * {@link DeviceInfoAttribute.dataType | `dataType`}.
   *
   * i.e. if `dataType === "NUMBER"`,
   * the `currentValue` will be a number.
   *
   * Except for when `dataType === "ENUM"`. Then
   * `currentValue` will be the value of one element
   * in that enum (but the enum will be represented
   * in the {@link DeviceInfoAttribute.values | `values`}
   * prop as an array of the enum value type (so far
   * I've only seen strings).
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

/*

    {
      "name": "lockCodes",
      "currentValue": "{\"1\":{\"code\":\"3339\",\"name\":\"Beard and Braid\"}}",
      "dataType": "JSON_OBJECT"
    }

    {
      "name": "maxCodes",
      "currentValue": 20,
      "dataType": "NUMBER"
    },

    "name": "switch",
      "currentValue": "off",
      "dataType": "ENUM",
      "values": [
        "on",
        "off"
      ]


      {
      "name": "power",
      "currentValue": 0,
      "dataType": "NUMBER"
    }
*/
