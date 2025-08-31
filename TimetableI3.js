export const I3 = [
  // Monday
  {
    name: "AI",
    time: "08:00am-09:00am",
    faculty: "PG",
    day: "Monday",
  },
  {
    name: "SA",
    time: "09:00am-10:00am",
    faculty: "RS",
    day: "Monday",
  },
  {
    name: "DWM",
    time: "10:00am-11:00am",
    faculty: "SC",
    day: "Monday",
  },
  {
    name: "CN",
    time: "11:00am-12:00pm",
    faculty: "PK",
    day: "Monday",
  },

  // Tuesday
  {
    name: "ADS (Lab)",
    time: "08:00am-10:00am",
    faculty: "MM",
    day: "Tuesday",
  },
  {
    name: "UCD (Lab)",
    time: "08:00am-10:00am",
    faculty: "NA",
    day: "Tuesday",
  },
  {
    name: "ADS",
    time: "10:00am-11:00am",
    faculty: "MM",
    day: "Tuesday",
  },
  {
    name: "CG",
    time: "10:00am-11:00am",
    faculty: "NK",
    day: "Tuesday",
  },
  {
    name: "UCD",
    time: "10:00am-11:00am",
    faculty: "SM",
    day: "Tuesday",
  },
  {
    name: "DWM",
    time: "11:00am-12:00pm",
    faculty: "SC",
    day: "Tuesday",
  },
  {
    name: "AI",
    time: "12:00pm-01:00pm",
    faculty: "LS",
    day: "Tuesday",
  },
  {
    name: "SA (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "RS",
    day: "Tuesday",
  },{
    name: "CN (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "PK",
    day: "Tuesday",
  },{
    name: "CN",
    time: "04:00pm-05:00pm",
    faculty: "PK",
    day: "Tuesday",
  },

  // Wednesday
  {
    name: "DEVOPS (Lab)",
    time: "10:00am-12:00pm",
    faculty: "LS",
    day: "Wednesday",
  },
  {
    name: "DEVOPS (Lab)",
    time: "10:00am-12:00pm",
    faculty: "CB",
    day: "Wednesday",
  },
  {
    name: "COI",
    time: "12:00pm-01:00pm",
    faculty: "H",
    day: "Wednesday",
  },
  {
    name:"SA",
    time: "01:00pm-02:00pm",
    faculty: "RS",
    day: "Wednesday",
  },
  {
    name: "ADS",
    time: "03:00pm-04:00pm",
    faculty: "MM",
    day: "Tuesday",
  },
  {
    name: "CG",
    time: "03:00pm-04:00pm",
    faculty: "NK",
    day: "Tuesday",
  },
  {
    name: "UCD",
    time: "03:00pm-04:00pm",
    faculty: "SM",
    day: "Tuesday",
  },
  {
    name: "ADS (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "MM",
    day: "Tuesday",
  },
  {
    name: "CG (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "NK",
    day: "Tuesday",
  },

  // Thursday
  {
    name: "DEVOPS",
    time: "08:00am-09:00am",
    faculty: "LV",
    day: "Thursday",
  },
  {
    name: "DEVOPS",
    time: "09:00am-10:00am",
    faculty: "AJ",
    day: "Thursday",
  },
  {
    name: "CN (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "PK",
    day: "Thursday",
  },
  {
    name: "DWM (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "SC",
    day: "Thursday",
  },
  {
    name: "SA",
    time: "04:00pm-05:00pm",
    faculty: "NK",
    day: "Thursday",
  },
  {
    name: "DWM",
    time: "05:00pm-06:00pm",
    faculty: "SC",
    day: "Thursday",
  },

  // Friday
  {
    name: "CG",
    time: "08:00am-09:00am",
    faculty: "NK",
    day: "Friday",
  },
  {
    name: "UCD",
    time: "08:00am-09:00am",
    faculty: "NA",
    day: "Friday",
  },
  {
    name: "ADS",
    time: "09:00am-10:00am",
    faculty: "ARJ",
    day: "Friday",
  },
  {
    name: "DWM (Lab)",
    time: "10:00am-12:00pm",
    faculty: "SC",
    day: "Friday",
  },
  {
    name: "AI (Lab)",
    time: "10:00am-12:00pm",
    faculty: "PS",
    day: "Friday",
  },
  {
    name: "AI (Lab)",
    time: "12:00pm-02:00pm",
    faculty: "LS",
    day: "Friday",
  },
  {
    name: "SA (Lab)",
    time: "12:00pm-02:00pm",
    faculty: "NK",
    day: "Friday",
  },
  {
    name: "CN",
    time: "03:00pm-04:00pm",
    faculty: "PK",
    day: "Friday",
  },
  {
    name: "AI",
    time: "04:00pm-05:00pm",
    faculty: "LS",
    day: "Friday",
  },

  // Saturday
  {
    name: "DEVOPS",
    time: "08:00am-09:00am",
    faculty: "LV",
    day: "Saturday",
  },
].map((classItem, index) => ({ ...classItem, id: index + 1 }));