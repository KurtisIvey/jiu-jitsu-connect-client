import React from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
type Props = {};

const CalendarPage = (props: Props) => {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Navbar />
      <section className=" flex flex-col self-center  w-full mx-auto  mt-10  p-5 max-w-7xl">
        <Calendar />
      </section>
      <Footer />
    </main>
  );
};

export default CalendarPage;
