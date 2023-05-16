import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
type Props = {};

const Calendar = (props: Props) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg h-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
      />
    </div>
  );
};

export default Calendar;
