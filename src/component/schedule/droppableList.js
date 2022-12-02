
import React,{useState,useEffect} from "react";
import {Row,Col} from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


function DroppableList({ id, items, label, tint, }){
  const [show,setShow] = useState(false);
  useEffect(()=>{
    var totalTime =0;
    for(var i=0; i<items.length; i++){

      if(id !== "af1"){
        totalTime = totalTime+items[i].time
      }
    }
    if(totalTime >9){
      setShow(true)
    }else{
      setShow(false)
    }
    
  },[items])
  return (
    <Droppable droppableId={id} >
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className={`holder holder--tint-${tint}`}>
            <div className='holder__title'>
              {label}
            </div>
            <div className='holder__content'>
              <ul className='list'>
                {items.map((item, index) => (
                  <li 
                    className={'list__item'}
                    key={item.id}
                  >
                    
                    <Draggable 
                      draggableId={item.id}
                      index={index}
                      
                    >
                      {(provided) => (
                        <div
                          className='card'
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.label + " " +item.time + " hr"}
                        </div>
                      )}
                    </Draggable>
                    
                  </li>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default DroppableList;