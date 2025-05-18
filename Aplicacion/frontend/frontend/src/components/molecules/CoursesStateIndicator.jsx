import { useState, useEffect } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const CoursesStateIndicator = ({ progress = [] }) => {
  const [statusMessage, setStatusMessage] = useState("");
  const today = new Date();

  useEffect(() => {
    evaluateStatus();
  }, [progress]);


  const evaluateStatus = () => {
    if (!progress.length) {
      setStatusMessage("No hay cursos asignados.");
      return;
    }
  
    const total = progress.length;
    const valid = progress.filter(
      (p) => p.validity && new Date(p.validity) > today
    ).length;
  
    const willExpireSoon = progress.filter((p) => {
      if (!p.validity) return false;
      const validityDate = new Date(p.validity);
      const timeDiff = validityDate - today;
      const daysLeft = timeDiff / (1000 * 60 * 60 * 24);
      return daysLeft > 0 && daysLeft <= 30;
    }).length;
    if(valid !== total)
    {
        setStatusMessage("NOTOK")
    }

   else if (willExpireSoon > 0) {
       setStatusMessage("NOTOKSOON");
      }
   else if ( valid === total && willExpireSoon === 0) {
      setStatusMessage("OK");
    }
  };

  return (
   <>
   {statusMessage==="OK"?<CheckBoxIcon/>:
   statusMessage==="NOTOK"?<CheckBoxOutlineBlankIcon/>:
   statusMessage==="NOTOKSOON"?<AccessAlarmIcon/>:""
   
}
   </>
  );
};

export default CoursesStateIndicator;
