import React from "react";
import cx from "classnames";

export default ({
  color = "white",
  type = "text",
  value,
  onChange,
  className,
  placeholder,
}) => {
  return type === "textarea" ? (
    <textarea
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      rows={7}
      className={cx(
        className,
        "input-bg rounded-md px-4 py-4 mx-1 w-full",
        "text-" + color
      )}
    />
  ) : (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={cx(
        className,
        "input-bg rounded-md px-4 py-4 mx-1 w-full",
        "text-" + color
      )}
    />
  );
};
