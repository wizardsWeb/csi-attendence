export const I2 = [
  // Monday
  {
    name: "SA",
    time: "09:00am-10:00am",
    faculty: "SV",
    day: "Monday",
  },
  {
    name: "DWM",
    time: "10:00am-11:00am",
    faculty: "VS",
    day: "Monday",
  },
  {
    name: "AI",
    time: "11:00am-12:00pm",
    faculty: "PS",
    day: "Monday",
  },
  {
    name: "CN",
    time: "01:00pm-02:00pm",
    faculty: "RS",
    day: "Monday",
  },
  {
    name: "SA (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "SV",
    day: "Monday",
  },
  {
    name: "AI (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "LS",
    day: "Monday",
  },

  // Tuesday
  {
    name: "AI (Lab)",
    time: "08:00am-10:00am",
    faculty: "PS",
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
    faculty: "NA",
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
    name: "CN",
    time: "11:00am-12:00pm",
    faculty: "RS",
    day: "Tuesday",
  },
  {
    name: "SA",
    time: "12:00pm-01:00pm",
    faculty: "SV",
    day: "Tuesday",
  },
  {
    name: "DWM (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "SM",
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
    name: "AI",
    time: "11:00am-12:00pm",
    faculty: "PS",
    day: "Wednesday",
  },
  {
    name: "CN",
    time: "12:00pm-01:00pm",
    faculty: "RS",
    day: "Wednesday",
  },
  {
    name: "DWM",
    time: "01:00pm-02:00pm",
    faculty: "VS",
    day: "Wednesday",
  },
  {
    name: "ADS",
    time: "03:00pm-04:00pm",
    faculty: "NA",
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
    faculty: "PP",
    day: "Wednesday",
  },
  {
    name: "CG (Lab)",
    time: "04:00pm-06:00pm",
    faculty: "NK",
    day: "Wednesday",
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
    name: "DWM (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "SM",
    day: "Thursday",
  },
  {
    name: "CN (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "RS",
    day: "Thursday",
  },
  {
    name: "COI",
    time: "04:00pm-05:00pm",
    faculty: "AH",
    day: "Thursday",
  },
  {
    name: "AI",
    time: "05:00pm-06:00pm",
    faculty: "PS",
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
    name: "SA",
    time: "09:00am-10:00am",
    faculty: "SV",
    day: "Friday",
  },
  {
    name: "DWM",
    time: "10:00am-11:00am",
    faculty: "VS",
    day: "Friday",
  },
  {
    name: "CN (Lab)",
    time: "12:00pm-02:00pm",
    faculty: "RM",
    day: "Friday",
  },
  {
    name: "SA (Lab)",
    time: "12:00pm-02:00pm",
    faculty: "RS",
    day: "Friday",
  },
  {
    name: "DEVOPS (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "CB",
    day: "Friday",
  },
  {
    name: "DEVOPS (Lab)",
    time: "02:00pm-04:00pm",
    faculty: "AJ",
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