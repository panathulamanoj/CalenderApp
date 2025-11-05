const events = [

  { date: "2025-01-03", startTime: "08:00", endTime: "09:00", color: "#4caf50", title: "Morning Run" },
  { date: "2025-01-10", startTime: "10:00", endTime: "11:00", color: "#2196f3", title: "Project Kickoff" },
  { date: "2025-01-10", startTime: "10:30", endTime: "12:00", color: "#f44336", title: "Team Sync" }, 
  { date: "2025-01-15", startTime: "14:00", endTime: "15:30", color: "#9c27b0", title: "UI Review" },
  { date: "2025-01-20", startTime: "16:00", endTime: "17:00", color: "#ff9800", title: "Mentorship Session" },
  { date: "2025-01-25", startTime: "19:00", endTime: "21:00", color: "#009688", title: "Game Night" },

 
  { date: "2025-02-05", startTime: "09:00", endTime: "10:30", color: "#673ab7", title: "Design Brainstorm" },
  { date: "2025-02-07", startTime: "14:00", endTime: "15:00", color: "#f6be24", title: "Client Call" },
  { date: "2025-02-07", startTime: "14:30", endTime: "15:30", color: "#24c2f6", title: "Follow-up Discussion" }, 
  { date: "2025-02-14", startTime: "19:00", endTime: "22:00", color: "#e91e63", title: "Valentine’s Dinner" },
  { date: "2025-02-20", startTime: "11:00", endTime: "12:30", color: "#00bcd4", title: "Tech Sync" },
  { date: "2025-02-25", startTime: "16:00", endTime: "18:00", color: "#8bc34a", title: "Webinar" },

  
  { date: "2025-03-03", startTime: "08:00", endTime: "09:30", color: "#f44336", title: "Morning Workout" },
  { date: "2025-03-05", startTime: "13:00", endTime: "14:30", color: "#3f51b5", title: "Lunch & Learn" },
  { date: "2025-03-10", startTime: "09:00", endTime: "10:30", color: "#ff9800", title: "Code Review" },
  { date: "2025-03-15", startTime: "10:00", endTime: "11:00", color: "#9c27b0", title: "Sprint Planning" },
  { date: "2025-03-15", startTime: "10:30", endTime: "11:30", color: "#2196f3", title: "Dev Sync" }, 
  { date: "2025-03-25", startTime: "18:00", endTime: "20:00", color: "#4caf50", title: "Community Meetup" },

  
  { date: "2025-04-02", startTime: "07:00", endTime: "08:00", color: "#009688", title: "Yoga" },
  { date: "2025-04-10", startTime: "09:00", endTime: "11:00", color: "#f6be24", title: "Client Workshop" },
  { date: "2025-04-12", startTime: "14:00", endTime: "15:30", color: "#e91e63", title: "Design Sprint" },
  { date: "2025-04-15", startTime: "16:00", endTime: "17:00", color: "#673ab7", title: "Product Demo" },
  { date: "2025-04-20", startTime: "19:00", endTime: "21:00", color: "#ff5722", title: "Birthday Party" },
  { date: "2025-04-25", startTime: "11:00", endTime: "12:00", color: "#03a9f4", title: "Quick Catch-up" },

  
  { date: "2025-05-04", startTime: "09:00", endTime: "10:00", color: "#9c27b0", title: "Weekly Sync" },
  { date: "2025-05-06", startTime: "10:00", endTime: "11:00", color: "#2196f3", title: "Project Planning" },
  { date: "2025-05-06", startTime: "10:30", endTime: "12:00", color: "#f44336", title: "Architecture Review" }, 
  { date: "2025-05-12", startTime: "13:00", endTime: "14:00", color: "#4caf50", title: "Marketing Sync" },
  { date: "2025-05-20", startTime: "16:00", endTime: "18:00", color: "#ff9800", title: "Hackathon Prep" },
  { date: "2025-05-30", startTime: "18:00", endTime: "20:00", color: "#009688", title: "Team Celebration" },

  
  { date: "2025-06-01", startTime: "08:00", endTime: "09:00", color: "#00bcd4", title: "Morning Run" },
  { date: "2025-06-05", startTime: "10:00", endTime: "12:00", color: "#f6501e", title: "Design Review" },
  { date: "2025-06-05", startTime: "11:30", endTime: "13:00", color: "#3f51b5", title: "Client Sync" }, 
  { date: "2025-06-10", startTime: "14:00", endTime: "15:30", color: "#24c2f6", title: "Team Standup" },
  { date: "2025-06-18", startTime: "16:00", endTime: "17:30", color: "#9c27b0", title: "Research Meeting" },
  { date: "2025-06-25", startTime: "19:00", endTime: "21:00", color: "#ff5722", title: "Dinner Meetup" },


  { date: "2025-07-03", startTime: "09:00", endTime: "10:30", color: "#e91e63", title: "Sprint Retro" },
  { date: "2025-07-06", startTime: "11:00", endTime: "12:00", color: "#4caf50", title: "Team Briefing" },
  { date: "2025-07-10", startTime: "14:00", endTime: "15:30", color: "#2196f3", title: "Backend Sync" },
  { date: "2025-07-12", startTime: "14:30", endTime: "15:30", color: "#00bcd4", title: "Frontend Debug" }, 
  { date: "2025-07-20", startTime: "16:00", endTime: "18:00", color: "#f6be24", title: "Mentorship Call" },
  { date: "2025-07-25", startTime: "19:00", endTime: "21:00", color: "#ff9800", title: "Friends Meetup" },


  { date: "2025-08-04", startTime: "08:00", endTime: "09:00", color: "#4caf50", title: "Gym" },
  { date: "2025-08-08", startTime: "09:00", endTime: "10:30", color: "#f44336", title: "Project Presentation" },
  { date: "2025-08-08", startTime: "10:00", endTime: "11:00", color: "#673ab7", title: "Follow-up Call" }, 
  { date: "2025-08-14", startTime: "11:00", endTime: "12:00", color: "#009688", title: "Docs Review" },
  { date: "2025-08-20", startTime: "15:00", endTime: "16:00", color: "#ff9800", title: "Townhall" },
  { date: "2025-08-28", startTime: "18:00", endTime: "20:00", color: "#03a9f4", title: "Team Dinner" },

  
  { date: "2025-09-03", startTime: "09:00", endTime: "10:30", color: "#e91e63", title: "Planning Session" },
  { date: "2025-09-07", startTime: "10:00", endTime: "11:00", color: "#9c27b0", title: "UI Sync" },
  { date: "2025-09-07", startTime: "10:30", endTime: "11:30", color: "#f6be24", title: "Dev Review" }, 
  { date: "2025-09-12", startTime: "13:00", endTime: "14:00", color: "#2196f3", title: "Weekly Review" },
  { date: "2025-09-18", startTime: "15:00", endTime: "16:30", color: "#00bcd4", title: "Bug Bash" },
  { date: "2025-09-25", startTime: "19:00", endTime: "21:00", color: "#4caf50", title: "Party Night" },


  { date: "2025-10-03", startTime: "00:00", endTime: "01:30", color: "#f6be24", title: "Gokarts" },
  { date: "2025-10-03", startTime: "01:00", endTime: "02:00", color: "#f6501e", title: "Midnight Coding" },
  { date: "2025-10-10", startTime: "04:30", endTime: "07:30", color: "#24c2f6", title: "Poker" },
  { date: "2025-10-15", startTime: "08:00", endTime: "09:00", color: "#4caf50", title: "Gym" },
  { date: "2025-10-20", startTime: "09:00", endTime: "10:30", color: "#03a9f4", title: "Strategy Call" },
  { date: "2025-10-25", startTime: "18:00", endTime: "20:00", color: "#ff5722", title: "Movie Night" },


  { date: "2025-11-04", startTime: "09:00", endTime: "11:00", color: "#9c27b0", title: "Client Meeting" },
  { date: "2025-11-04", startTime: "10:30", endTime: "12:00", color: "#f44336", title: "Design Review" }, 
  { date: "2025-11-12", startTime: "13:00", endTime: "14:30", color: "#2196f3", title: "Lunch & Learn" },
  { date: "2025-11-18", startTime: "10:00", endTime: "11:00", color: "#e91e63", title: "Brainstorm Session" },
  { date: "2025-11-20", startTime: "16:00", endTime: "18:00", color: "#ff9800", title: "Hackathon Prep" },
  { date: "2025-11-28", startTime: "09:00", endTime: "10:30", color: "#009688", title: "Team Standup" },

  { date: "2025-12-02", startTime: "10:00", endTime: "12:00", color: "#f44336", title: "Product Demo" },
  { date: "2025-12-02", startTime: "11:00", endTime: "12:30", color: "#00bcd4", title: "Client Sync" }, 
  { date: "2025-12-05", startTime: "07:00", endTime: "08:30", color: "#00bcd4", title: "Yoga" },
  { date: "2025-12-10", startTime: "14:00", endTime: "15:30", color: "#009688", title: "Tech Talk" },
  { date: "2025-12-20", startTime: "19:00", endTime: "21:00", color: "#ff5722", title: "Christmas Shopping" },
  { date: "2025-12-25", startTime: "17:00", endTime: "20:00", color: "#e91e63", title: "Christmas Party" }
];

export default events;

