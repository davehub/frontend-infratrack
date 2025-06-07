import React from "react";
import { FiChevronUp, FiChevronDown, FiFilter } from "react-icons/fi";

const Table = ({
  columns,
  data,
  sortBy,
  sortDirection,
  onSort,
  className = "",
  rowClassName = "",
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? "cursor-pointer" : ""
                }`}
                onClick={() => column.sortable && onSort(column.key)}
              >
                <div className="flex items-center">
                  {column.title}
                  {column.sortable && (
                    <span className="ml-1">
                      {sortBy === column.key ? (
                        sortDirection === "asc" ? (
                          <FiChevronUp className="inline" />
                        ) : (
                          <FiChevronDown className="inline" />
                        )
                      ) : (
                        <FiFilter className="inline opacity-30" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className={rowClassName}>
              {columns.map((column) => (
                <td
                  key={`${index}-${column.key}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;