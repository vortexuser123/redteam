const express = require('express');
const app = express();
app.use(express.json());

app.post('/plan', (req,res)=>{
  const { org="Client", objectives=[], scope=[], oob=[] } = req.body;
  const plan = {
    org,
    approvals: ["CISO","Legal","IT Ops"],
    rulesOfEngagement: {
      allowed: scope, notAllowed: ["Prod data exfil","Destructive actions","After-hours without notice"]
    },
    communications: { primary:"secops@client", incidentEscalation:"+91-000-0000" },
    objectives,
    outOfBandContacts: oob,
    timeline: [
      { phase:"Planning", days:2 },
      { phase:"Execution (emulated)", days:3 },
      { phase:"Reporting & Debrief", days:2 }
    ]
  };
  res.json(plan);
});

app.listen(4015, ()=>console.log('Tabletop planner on http://localhost:4015'));
