import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
type Props = {};

const Calendar = (props: Props) => {
  return (
    <>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </>
  );
};

export default Calendar;
