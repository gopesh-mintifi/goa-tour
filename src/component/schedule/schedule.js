import React, { useState } from "react";
import {Button} from "react-bootstrap";
import './schedule.scss';
import LeadsOverview from './leadsOverview';

function Schedule (){
  const [sortData,setSortData] = useState({});
  const [error,setError]=useState();
    const DATA = [
        {
          id: 'af',
          label: 'All Activities',
          items: [
            {id: 'ch2', label: 'Cultural Exploration',time:7},
            {id: 'ch3', label: 'Local market visit',time:8},
            {id: 'ch4', label: 'Mandovi River  cruise ',time:3},
            {id: 'ch5', label: 'Water sports at Grand island',time:4},
            {id: 'ch6', label: 'Clubbing at Titos lane',time:5},
            {id: 'ch7', label: 'A day at Baga Beach',time:9},
          ],
          tint: 1,
        },
        {
          id: 'af1',
          label: 'One Day',
          items: [],
          tint: 2,
        },
        {
          id: 'af2',
          label: 'Second Day', 
          items: [],
          tint: 3,
        },
        {
          id: 'af3',
          label: 'Third Day', 
          items: [],
          tint: 3,
        },
        {
          id: 'af4',
          label: 'Fourth Day', 
          items: [],
          tint: 3,
        } 
      ];
      const sortList =(data) =>{
        setSortData(data);
        for(var i=1; i< data.length; i++){
            var flagTime = 0;
            for(var j=0; j< data[i].items.length; j++){
              flagTime = flagTime+data[i].items[j].time
            }
            if(flagTime > 9){
              alert("Please set schedule less then 9 Hours.")
            }

        }
      }
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
      }
return(
  <>
    <div className='layout__wrapper'>
      <div className='layout__header'>
        <div className='app-bar'>
          <div className='app-bar__title'>
            Goa Tour
          </div>
        </div>
      </div>
      <LeadsOverview DATA={DATA} sortList={sortList}/>
      
    </div>
    <div style={{display:"flex",justifyContent:"center",position:"relative",bottom:"150px"}}>
    <Button onClick={()=>onButtonClick()}>Save Schedule</Button>
    </div>
    </>
)
}
export default Schedule;