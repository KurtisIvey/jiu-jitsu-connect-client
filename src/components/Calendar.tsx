import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import axios from "axios";
type Props = {};

interface CalendarItem {
  id: number;
  date_column: string;
  description: string;
}

interface CalendarData {
  items: CalendarItem[];
}

const Calendar = (props: Props) => {
  const [calendarData, setCalendarData] = useState<CalendarData>({ items: [] });

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get<CalendarData>(
          "http://localhost:3001/api/calendar"
        );
        setCalendarData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCalendarData();
  }, []);
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
