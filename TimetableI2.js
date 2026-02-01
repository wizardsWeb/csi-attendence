export const I2 = [

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
    "name": "CNS",
    "time": "09:00am-10:00am",
    "faculty": "RM",
    "day": "Monday"
  },
  {
    "name": "IPCV-2",
    "time": "11:00am-12:00pm",
    "faculty": "VS",
    "day": "Monday"
  },
  {
    "name": "I2-2:SE",
    "time": "11:00am-12:00pm",
    "faculty": "MS",
    "day": "Monday"
  },
  {
    "name": "ML",
    "time": "01:00pm-02:00pm",
    "faculty": "SV",
    "day": "Monday"
  },
  {
    "name": "BDA",
    "time": "02:00pm-03:00pm",
    "faculty": "MS",
    "day": "Monday"
  },
  {
    "name": "CC",
    "time": "02:00pm-03:00pm",
    "faculty": "PH",
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
    "name": "I2-1:MLOPS",
    "time": "08:00am-10:00am",
    "faculty": "LS",
    "day": "Tuesday"
  },
  {
    "name": "I2-2:CNS",
    "time": "08:00am-10:00am",
    "faculty": "RS",
    "day": "Tuesday"
  },
  {
    "name": "ML",
    "time": "10:00am-11:00am",
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
    "name": "SE",
    "time": "01:00pm-02:00pm",
    "faculty": "HD",
    "day": "Tuesday"
  },
  {
    "name": "BDA",
    "time": "02:00pm-03:00pm",
    "faculty": "MS",
    "day": "Tuesday"
  },
  {
    "name": "CC",
    "time": "02:00pm-03:00pm",
    "faculty": "PH",
    "day": "Tuesday"
  },

  // Wednesday
  {
    "name": "CNS",
    "time": "09:00am-10:00am",
    "faculty": "RM",
    "day": "Wednesday"
  },
  {
    "name": "SE",
    "time": "10:00am-11:00am",
    "faculty": "MS",
    "day": "Wednesday"
  },
  {
    "name": "I2-1:CNS",
    "time": "12:00pm-02:00pm",
    "faculty": "RM",
    "day": "Wednesday"
  },
  {
    "name": "I2-2:ML",
    "time": "12:00pm-02:00pm",
    "faculty": "SV",
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
    "name": "I2-1:SE",
    "time": "08:00am-10:00am",
    "faculty": "HD",
    "day": "Thursday"
  },
  {
    "name": "I2-2:MLOPS",
    "time": "08:00am-10:00am",
    "faculty": "RM",
    "day": "Thursday"
  },
  {
    "name": "CNS",
    "time": "10:00am-11:00am",
    "faculty": "RM",
    "day": "Thursday"
  },
  {
    "name": "I2-1:ML",
    "time": "12:00pm-02:00pm",
    "faculty": "NK",
    "day": "Thursday"
  },
  {
    "name": "I2-2:IS",
    "time": "12:00pm-02:00pm",
    "faculty": "AP",
    "day": "Thursday"
  },
  {
    "name": "CC",
    "time": "02:00pm-03:00pm",
    "faculty": "PH",
    "day": "Thursday"
  },
  
  
  // Friday
  {
    "name": "ML",
    "time": "09:00am-10:00am",
    "faculty": "SA",
    "day": "Friday"
  },
  {
    "name": "BDA-3",
    "time": "10:00am-12:00pm",
    "faculty": "SM",
    "day": "Friday"
  },
  {
    "name": "CC-1",
    "time": "10:00am-12:00pm",
    "faculty": "SP",
    "day": "Friday"
  },
  {
    "name": "SE",
    "time": "01:00pm-02:00pm",
    "faculty": "MS",
    "day": "Friday"
  },
  {
    "name": "EVS-T",
    "time": "02:00pm-03:00pm",
    "faculty": "SS",
    "day": "Friday"
  },
  {
    "name": "EVS-T",
    "time": "02:00pm-03:00pm",
    "faculty": "RS",
    "day": "Friday"
  },
  {
    "name": "BDA",
    "time": "03:00pm-04:00pm",
    "faculty": "MS",
    "day": "Friday"
  },  
]
.map((classItem, index) => ({ ...classItem, id: index + 1 }));