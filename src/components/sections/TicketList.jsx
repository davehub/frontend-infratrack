import React from "react";
import { FiAlertCircle, FiCheckCircle, FiClock } from "react-icons/fi";
import Badge from "../ui/Badge";

const priorityIcons = {
  high: <FiAlertCircle className="text-red-500" />,
  medium: <FiAlertCircle className="text-yellow-500" />,
  low: <FiAlertCircle className="text-blue-500" />,
};

const statusBadges = {
  open: <Badge variant="danger">Ouvert</Badge>,
  in_progress: <Badge variant="warning">En cours</Badge>,
  resolved: <Badge variant="success">Résolu</Badge>,
};

const TicketList = ({ tickets, onSelect }) => {
  return (
    <div className="space-y-2">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => onSelect(ticket)}
          className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{ticket.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                #{ticket.id} • {ticket.equipmentName}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {priorityIcons[ticket.priority]}
              {statusBadges[ticket.status]}
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-gray-500">
            <FiClock className="mr-1" size={14} />
            <span>
              {new Date(ticket.createdAt).toLocaleDateString()} •{" "}
              {ticket.createdBy}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;