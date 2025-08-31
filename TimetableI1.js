export const I1 = [
  // Monday
  {
    name: "DEVOPS",
    time: "08:00am-10:00am",
    faculty: "LS",
    day: "Monday",
  },
  {
    name: "CN",
    time: "01:00pm-02:00pm",
    faculty: "RM",
    day: "Monday",
  },
  {
    name: "SA (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "PS",
    day: "Monday",
  },
  {
    name: "CN (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "RS",
    day: "Monday",
  },
  {
    name: "UCD (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "NA",
    day: "Monday",
  },
  {
    name: "DEVOPS (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "AJ",
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
    name: "ADS",
    time: "10:00am-11:00am",
    faculty: "NA",
    day: "Tuesday",
  },{
    name: "CG",
    time: "10:00am-11:00am",
    faculty: "NK",
    day: "Tuesday",
  },{
    name: "UCD",
    time: "10:00am-11:00am",
    faculty: "SM",
    day: "Tuesday",
  },
  {
    name: "CN",
    time: "11:00am-12:00pm",
    faculty: "RM",
    day: "Tuesday",
  },
  {
    name: "SA",
    time: "12:00pm-01:00pm",
    faculty: "PS",
    day: "Tuesday",
  },
  {
    name: "DEVOPS",
    time: "05:00pm-06:00pm",
    faculty: "SD",
    day: "Tuesday",
  },

  // Wednesday
  {
    name: "ADS",
    time: "09:00am-10:00am",
    faculty: "ARJ",
    day: "Wednesday",
  },
  {
    name: "DWM",
    time: "10:00am-11:00am",
    faculty: "HD",
    day: "Wednesday",
  },
  {
    name: "AI (Lab)",
    time: "12:00pm-2:00pm",
    faculty: "SP",
    day: "Wednesday",
  },
  {
    name: "SA (Lab)",
    time: "12:00pm-02:00pm",
    faculty: "PS",
    day: "Wednesday",
  },
  {
    name: "AI",
    time: "02:00pm-03:00pm",
    faculty: "SP",
    day: "Wednesday",
  },
  {
    name: "ADS",
    time: "03:00pm-04:00pm",
    faculty: "NA",
    day: "Wednesday",
  },
  {
    name: "CG",
    time: "03:00pm-04:00pm",
    faculty: "NK",
    day: "Wednesday",
  },
  {
    name: "UCD",
    time: "03:00pm-04:00pm",
    faculty: "SM",
    day: "Wednesday",
  },
  {
    name: "DEVOPS (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "LS",
    day: "Wednesday",
  },  
  {
    name: "CN (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "NK",
    day: "Wednesday",
  },

  // Thursday
  {
    name: "CN (Lab)",
    time: "08:00am-10:00am",
    faculty: "RM",
    day: "Thursday",
  },
  {
    name: "DWM (Lab)",
    time: "08:00am-10:00am",
    faculty: "HD",
    day: "Thursday",
  },
  {
    name: "SA",
    time: "10:00am-11:00am",
    faculty: "PS",
    day: "Thursday",
  },
  {
    name: "DWM",
    time: "11:00am-12:00pm",
    faculty: "HD",
    day: "Thursday",
  },
  {
    name: "COI",
    time: "01:00pm-02:00pm",
    faculty: "AH",
    day: "Thursday",
  },
  {
    name: "AI",
    time: "02:00pm-03:00pm",
    faculty: "SP",
    day: "Thursday",
  },
  {
    name: "CN",
    time: "03:00pm-04:00pm",
    faculty: "RM",
    day: "Thursday",
  },

  // Friday
  {
    name: "CG",
    time: "08:00am-09:00am",
    faculty: "NK",
    day: "Friday",
  },{
    name: "UCD",
    time: "08:00am-09:00am",
    faculty: "NA",
    day: "Friday",
  },
  {
    name: "DWM (Lab)",
    time: "10:00am-12:00pm",
    faculty: "HD",
    day: "Friday",
  },
  {
    name: "AI (Lab)",
    time: "10:00am-12:00pm",
    faculty: "PG",
    day: "Friday",
  },
  {
    name: "SA",
    time: "01:00pm-02:00pm",
    faculty: "PS",
    day: "Friday",
  },
  {
    name: "DWM",
    time: "02:00pm-03:00pm",
    faculty: "HD",
    day: "Friday",
  },
  {
    name: "AI",
    time: "03:00pm-04:00pm",
    faculty: "SP",
    day: "Friday",
  },
].map((classItem, index) => ({ ...classItem, id: index + 1 }));