export const I1 = [

  // Monday
  {
    "name": "IPCV",
    "time": "08:00am-09:00am",
    "faculty": "NK",
    "day": "Monday"
  },
  {
    "name": "IS",
    "time": "08:00am-09:00am",
    "faculty": "PP",
    "day": "Monday"
  },
  {
    "name": "BDA",
    "time": "08:00am-09:00am",
    "faculty": "SM",
    "day": "Monday"
  },
  {
    "name": "CNS",
    "time": "09:00am-10:00am",
    "faculty": "SC",
    "day": "Monday"
  },
  {
    "name": "I1-1:CNS",
    "time": "10:00am-12:00pm",
    "faculty": "SC",
    "day": "Monday"
  },
  {
    "name": "I1-2:SE",
    "time": "10:00am-12:00pm",
    "faculty": "SB",
    "day": "Monday"
  },
  {
    "name": "MLOPS",
    "time": "03:00pm-04:00pm",
    "faculty": "SB",
    "day": "Monday"
  },

  // Tuesday
  {
    "name": "CC",
    "time": "10:00am-11:00am",
    "faculty": "SP",
    "day": "Tuesday"
  },
  {
    "name": "IPCV",
    "time": "11:00am-12:00pm",
    "faculty": "VS",
    "day": "Tuesday"
  },
  {
    "name": "IS",
    "time": "11:00am-12:00pm",
    "faculty": "PP",
    "day": "Tuesday"
  },
  {
    "name": "BDA",
    "time": "11:00am-12:00pm",
    "faculty": "SM",
    "day": "Tuesday"
  },
  {
    "name": "I1-1:CC",
    "time": "12:00pm-02:00pm",
    "faculty": "SP",
    "day": "Tuesday"
  },
  {
    "name": "I1-2:CC",
    "time": "11:00am-12:00pm",
    "faculty": "PH",
    "day": "Tuesday"
  },
  {
    "name": "ML",
    "time": "03:00pm-04:00pm",
    "faculty": "SV",
    "day": "Tuesday"
  },
  {
    "name": "SE",
    "time": "04:00pm-05:00pm",
    "faculty": "AJ",
    "day": "Tuesday"
  },
  {
    "name": "CNS",
    "time": "05:00pm-06:00pm",
    "faculty": "SC",
    "day": "Tuesday"
  },

  // Wednesday
  {
    "name": "BDA-1",
    "time": "08:00am-10:00am",
    "faculty": "SM",
    "day": "Wednesday"
  },
  {
    "name": "CC",
    "time": "10:00am-11:00am",
    "faculty": "SP",
    "day": "Wednesday"
  },
  {
    "name": "ML",
    "time": "11:00am-12:00pm",
    "faculty": "SV",
    "day": "Wednesday"
  },
  {
    "name": "SE",
    "time": "01:00pm-02:00pm",
    "faculty": "AJ",
    "day": "Wednesday"
  },
  {
    "name": "IPCV",
    "time": "02:00pm-03:00pm",
    "faculty": "VS",
    "day": "Wednesday"
  },
  {
    "name": "IS",
    "time": "02:00pm-03:00pm",
    "faculty": "AP",
    "day": "Wednesday"
  },
  {
    "name": "MLOPS",
    "time": "04:00pm-06:00pm",
    "faculty": "LS",
    "day": "Wednesday"
  },

  // Thursday
  {
    "name": "BDA",
    "time": "10:00am-11:00am",
    "faculty": "SM",
    "day": "Thursday"
  },
  {
    "name": "CNS",
    "time": "11:00am-12:00pm",
    "faculty": "SC",
    "day": "Thursday"
  },
  {
    "name": "EVS-T",
    "time": "12:00pm-01:00pm",
    "faculty": "SS",
    "day": "Thursday"
  },
  {
    "name": "EVS-T",
    "time": "12:00pm-01:00pm",
    "faculty": "RS",
    "day": "Thursday"
  },
  {
    "name": "I1-1:ML",
    "time": "02:00pm-04:00pm",
    "faculty": "SV",
    "day": "Thursday"
  },
  {
    "name": "I1-2:CNS",
    "time": "02:00pm-04:00pm",
    "faculty": "PH",
    "day": "Thursday"
  },
  {
    "name": "CC",
    "time": "04:00pm-05:00pm",
    "faculty": "SP",
    "day": "Thursday"
  },
  {
    "name": "ML",
    "time": "05:00pm-06:00pm",
    "faculty": "SV",
    "day": "Thursday"
  },

  // Friday
  {
    "name": "I1-1:MLOPS",
    "time": "10:00am-12:00pm",
    "faculty": "LS",
    "day": "Friday"
  },
  {
    "name": "I1-2:MLOPS",
    "time": "10:00am-12:00pm",
    "faculty": "SA",
    "day": "Friday"
  },
  {
    "name": "SE",
    "time": "12:00pm-01:00pm",
    "faculty": "AJ",
    "day": "Friday"
  },
  {
    "name": "II-1:SE",
    "time": "02:00pm-04:00pm",
    "faculty": "AJ",
    "day": "Friday"
  },
  {
    "name": "II-2:ML",
    "time": "02:00pm-04:00pm",
    "faculty": "SV",
    "day": "Friday"
  },
  {
    "name": "IPCV-1",
    "time": "04:00pm-06:00pm",
    "faculty": "VS",
    "day": "Friday"
  },
  {
    "name": "IS-1",
    "time": "04:00pm-06:00pm",
    "faculty": "AP",
    "day": "Friday"
  },
  {
    "name": "BDA-2",
    "time": "04:00pm-06:00pm",
    "faculty": "MS",
    "day": "Friday"
  }
].map((classItem, index) => ({ ...classItem, id: index + 1 }));