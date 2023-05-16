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
        events={[
          { title: "bjj 6:00am-7:00am", date: "2023-05-15" },
          { title: "bjj 6:00am-7:00am", date: "2023-05-16" },
          { title: "bjj 6:00am-7:00am", date: "2023-05-17" },
          { title: "bjj 6:00am-7:00am", date: "2023-05-18" },
          { title: "bjj 6:00am-7:00am", date: "2023-05-19" },
        ]}
      />
    </div>
  );
};

export default Calendar;
