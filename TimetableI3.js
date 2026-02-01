export const I3 = [
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
    "faculty": "RS",
    "day": "Monday"
  },
  {
    "name": "CC",
    "time": "10:00am-11:00am",
    "faculty": "PP",
    "day": "Monday"
  },
  {
    "name": "SE",
    "time": "12:00pm-01:00pm",
    "faculty": "HD",
    "day": "Monday"
  },
  {
    "name": "EVS",
    "time": "01:00pm-02:00pm",
    "faculty": "SS",
    "day": "Monday"
  },
  {
    "name": "EVS",
    "time": "01:00pm-02:00pm",
    "faculty": "NA",
    "day": "Monday"
  },
  {
    "name": "MLOPS",
    "time": "03:00pm-04:00pm",
    "faculty": "LS",
    "day": "Monday"
  },

  // Tuesday
  {
    "name": "I3-1:MLOPS",
    "time": "08:00am-10:00am",
    "faculty": "SV",
    "day": "Tuesday"
  },
  {
    "name": "I3-2:MLOPS",
    "time": "08:00am-10:00am",
    "faculty": "SA",
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
    "name": "CNS",
    "time": "12:00pm-01:00pm",
    "faculty": "RS",
    "day": "Tuesday"
  }, 
  {
    "name": "I3-1:ML",
    "time": "02:00pm-04:00pm",
    "faculty": "SC",
    "day": "Tuesday"
  },
  {
    "name": "I3-2:SE",
    "time": "02:00pm-04:00pm",
    "faculty": "HD",
    "day": "Tuesday"
  },

  // Wednesday
  {
    "name": "ML",
    "time": "09:00am-10:00am",
    "faculty": "SA",
    "day": "Wednesday"
  },
  { 
    "name": "I3-1:CNS",
    "time": "10:00am-12:00pm", 
    "faculty": "SC", 
    "day": "Wednesday"
  },
 { 
    "name": "I3-2:ML",
    "time": "10:00am-12:00pm", 
    "faculty": "SA", 
    "day": "Wednesday" 
  },
  {
    "name": "SE",
    "time": "01:00pm-02:00pm",
    "faculty": "HD",
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
    "name": "ML",
    "time": "11:00am-12:00pm",
    "faculty": "SA",
    "day": "Thursday"
  },
  {
    "name": "CC",
    "time": "12:00pm-01:00pm",
    "faculty": "PP",
    "day": "Thursday"
  },
  {
    "name": "I3-1:SE",
    "time": "02:00pm-04:00pm",
    "faculty": "HD",
    "day": "Thursday"
  },
  {
    "name": "I3-2:CC",
    "time": "02:00pm-04:00pm",
    "faculty": "SP",
    "day": "Thursday"
  },

  // Friday
  {
    "name": "CNS",
    "time": "09:00am-10:00am",
    "faculty": "RS",
    "day": "Friday"
  },
  {
    "name": "CC",
    "time": "10:00am-11:00am",
    "faculty": "PP",
    "day": "Friday"
  },
  {
    "name": "SE",
    "time": "11:00am-12:00pm",
    "faculty": "HD",
    "day": "Friday"
  },
  {
    "name": "I3-1:CC",
    "time": "12:00pm-02:00pm",
    "faculty": "MM",
    "day": "Friday"
  },
  {
    "name": "I3-2:CNS",
    "time": "12:00pm-02:00pm",
    "faculty": "RM",
    "day": "Friday"
  },
  {
    "name": "ML",
    "time": "03:00pm-04:00pm",
    "faculty": "SA",
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
  },
].map((classItem, index) => ({ ...classItem, id: index + 1 }));