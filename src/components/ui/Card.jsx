import React from "react";

const Card = ({
  title,
  subtitle,
  children,
  headerAction,
  footer,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}
      {...props}
    >
      {(title || headerAction) && (
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          {headerAction}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && <div className="p-4 border-t border-gray-100">{footer}</div>}
    </div>
  );
};

export default Card;