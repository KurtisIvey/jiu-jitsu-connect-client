import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import axios from "axios";

interface CalendarItem {
  id: number;
  date_column: string;
  description: string;
}

interface CalendarData {
  items: CalendarItem[];
}

const Calendar: React.FC = () => {
  // fetched via useEffect axios call
  const [calendarData, setCalendarData] = useState<CalendarData>({ items: [] });
  // have to convert data into useable format in FullCalendar Package
  const convertedData = calendarData.items.map((item) => {
    const dateTime = new Date(item.date_column);
    const time = dateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      title: `${item.description} ${time}`,
      date: dateTime.toISOString().split("T")[0],
    };
  });

  // fetches calendar data from postgres neon.tech db
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get<CalendarData>(
          "http://localhost:3001/api/calendar"
        );
        setCalendarData(response.data);
        console.log(response.data.items);
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
        events={calendarData && convertedData}
      />
    </div>
  );
};

export default Calendar;
