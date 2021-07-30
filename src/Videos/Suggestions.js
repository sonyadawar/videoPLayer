import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Suggestions = ({videosList,changeSelection,selectedVideoId}) => {

    const changeSelectedVideo=(data)=>{
        changeSelection(data)
    }
    return (
        <React.Fragment>
            {videosList.length>0 && 
                videosList.map(data=>{
                    if(data.id!==selectedVideoId){
                    return(
                    <ListGroup.Item key={data.id}
                    onClick={()=>{changeSelectedVideo(data)}}
                    style={{cursor:'pointer'}}>
                    <div>
                        <img src={data.thumbnails.medium.url}
                             alt='thumbnail'
                             style={{width:"100%"}}
                        />
                    </div>
                    <div>{data.title}</div>
                    <div>{data.channel.title}</div>
                        
                    </ListGroup.Item>
                    )
                        
                             
                  }})
                }

                   
            </React.Fragment>
                         
                
                    
           
           
  
    )
   
}

export default Suggestions
