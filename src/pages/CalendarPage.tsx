import React from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
type Props = {};

const CalendarPage = (props: Props) => {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10 lg:px-[5vw] p-5 max-w-7xl">
        <Calendar />
      </section>
    </main>
  );
};

export default CalendarPage;
