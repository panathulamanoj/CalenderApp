import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import './Calender.css'
import Weekday from './weekday'
import Day from './day'
import events from './data/event.js'
import  Event from './Event'
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Calender()
{
    const [{cmonth,cyear},setd]=useState({cmonth:new Date().getMonth(),cyear:new Date().getFullYear()});
    const [{activeDay,activewDay},setAd]=useState({activeDay:new Date().getDate(),activewDay:new Date().getDay()});
    const fweekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const presentday=new Date().getDay();
    const thismonthlastday=new Date(cyear,cmonth+1,0).getDate();
    const eventstm={};
    for(let evt of events)
    {
    const now=new Date(evt.date);
    if(now.getMonth()==cmonth && now.getFullYear()==cyear)
    {
        const d=now.getDate();
        if(!eventstm[d])
        {
            eventstm[d]=[];
        }
    eventstm[now.getDate()].push(evt);
    }
    }
    console.log(eventstm);
    const lastmonthlastday=new Date(cyear,cmonth,0).getDate();
    const thismonthfirstwday=new Date(cyear,cmonth,1).getDay();
    const thismonthlastwday=new Date(cyear,cmonth+1,0).getDay();
    const cactiveDay=(day)=>{
        let nday=day;
        let nwday=new Date(cyear,cmonth,day).getDay();
        setAd({activeDay:nday,activewDay:nwday});
    }
    const changemonth=(val)=>{
        let nmonth=cmonth;
        let nyear=cyear;
        if(val==1)
        {
            nmonth+=1;
        }
        else
        {
            nmonth-=1;
        }
        if(nmonth==-1)
        {
            nmonth=11;
            nyear=nyear-1;
        }
        else if(nmonth==12)
        {
            nmonth=0;
            nyear=nyear+1;
        }
        setd({cmonth:nmonth,cyear:nyear});
        let now=new Date();
        let nday=1;
        if(nmonth==now.getMonth() && nyear==now.getFullYear())
        {
        nday=now.getDate();
        }
        setAd({activeDay:nday,activewDay:new Date(nyear,nmonth,nday).getDay()});
    }
    const hasOverlap = () => {
    const dayEvents = eventstm[activeDay] || [];
    if (dayEvents.length < 2) return false;

    const toMin = (t) => {
      const [h, m] = t.split(":").map(Number);
      return h * 60 + m;
    };

    for (let i = 0; i < dayEvents.length; i++) {
      for (let j = i + 1; j < dayEvents.length; j++) {
        const a = dayEvents[i];
        const b = dayEvents[j];
        if (Math.max(toMin(a.startTime), toMin(b.startTime)) < Math.min(toMin(a.endTime), toMin(b.endTime)))
          return true;
      }
    }
    return false;
  }
    const stylesgrid={display:"flex",justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",width:"calc(100%/7)",boxSizing:"border-box",fontFamily:"sans-serif",fontSize:"1.25rem",fontWeight:"700",textAlign:"center",paddingTop:"20px",paddingBottom:"20px",borderRight:"solid 1px rgb(225, 222, 222)",borderBottom:"solid 1px rgb(225, 222, 222)"};
    const daysl=new Array();
    for(let i=thismonthfirstwday;i>0;i--)
    {
        daysl.push({day:lastmonthlastday-i+1,status:false});
    }
    for(let i=1;i<=thismonthlastday;i++)
    {
        daysl.push({day:i,status:true});
    }
    let c=1;
    for(let i=thismonthlastwday+1;i<=6;i++)
    {
        daysl.push({day:c,status:false});
        c++;
    }
    return (
        <>
        <div className="calender">
            <div className="cheader">
           <div className="nav-buttons">
           <button onClick={() => changemonth(0)} className="icon-btn">
           <ChevronLeft size={24} />
           </button>
           <button onClick={() => changemonth(1)} className="icon-btn">
           <ChevronRight size={24} />
           </button>
           </div>

            <h1>{activeDay} {months[cmonth]},    {cyear}</h1>
            <h2>{fweekdays[activewDay]}</h2>
            {hasOverlap() && 
          <div className="event-alert">⚠️ Overlapping events detected</div>
          }
            {eventstm[activeDay] && eventstm[activeDay].map((ele)=>{
                return <Event key={uuid()} evt={ele}/>
            })}
             </div>
            <div className="cgrid">
            {weekdays.map((ele)=>{
                return <Weekday key={uuid()} wday={ele} styles={stylesgrid}/>
            })}
            {
                daysl.map((ele)=>{
                    return <Day key={uuid()} day={ele.day} styles={stylesgrid} actday={cactiveDay} issmonth={ele.status} evt={eventstm[ele.day] || []}/>
                })
            }
            </div>
        </div>
        </>
    );
}









