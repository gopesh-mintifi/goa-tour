import React,{useEffect,useState} from "react";
import {Button,Row,Col} from "react-bootstrap";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DroppableList from './droppableList';

function LeadsOverview({DATA,sortList}) {
    const [items, setItems] = useState([]);
    const [groups, setGroups] = useState({});
    
    useEffect(() => {
      // Mock an API call.
      buildAndSave(DATA);
    }, []);
    
    function buildAndSave(items){
      const groups = {};
      for (let i = 0; i < Object.keys(items).length; ++i) {      
          const currentGroup = items[i];
          groups[currentGroup.id] = i;
  
      }
      
      // Set the data.
      sortList(items)
      setItems(items);
      

      // Makes the groups searchable via their id.
      setGroups(groups);
    }
    return (
    <>
      <DragDropContext 
        onDragEnd={(result) => {
          const { destination, draggableId, source, type, } = result;
  
          if (!destination) {
            return;
          }
  
          if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
          }
          
          if ('group' === type) {
            const sourceIndex = source.index;
            const targetIndex = destination.index;
            const workValue = items.slice();
            const [deletedItem, ] = workValue.splice(sourceIndex, 1);
            workValue.splice(targetIndex, 0, deletedItem);
  
            buildAndSave(workValue);
            
            return;
          }
  
          const sourceDroppableIndex = groups[source.droppableId];
          const targetDroppableIndex = groups[destination.droppableId];
          const sourceItems = items[sourceDroppableIndex].items.slice();
          const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].items.slice() : sourceItems;
          
          // Pull the item from the source.
          const [deletedItem, ] = sourceItems.splice(source.index, 1);
          targetItems.splice(destination.index, 0, deletedItem);
          
          const workValue = items.slice();

          workValue[sourceDroppableIndex] = {
            ...items[sourceDroppableIndex],
            items: sourceItems,
          };
          workValue[targetDroppableIndex] = {
            ...items[targetDroppableIndex],
            items: targetItems,
          };
          
          sortList(workValue);
          setItems(workValue);
        }}
      >
        <Droppable droppableId='ROOT' type='group' >
          {(provided) => (
            <Row
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable 
                 
                  draggableId={item.id}
                  key={item.id}
                  index={index}
                >
                  {(provided) => (
                    <Col
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <DroppableList
                        key={item.id}
                        {...item}
                      />
                    </Col >
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>
      </>
    );
  }
  
  export default LeadsOverview