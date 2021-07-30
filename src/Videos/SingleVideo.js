import React from 'react'

const SingleVideo = ({detail}) => {
   
    return (
        <>
            <div>
                {detail && 
                    (<div> 
                        <iframe width="560" 
                                height="315" 
                                src={`https://www.youtube.com/embed/${detail.id}`} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" 
                                allowFullScreen>
                        </iframe>
                        <h1>{detail.title}</h1>
                        <h4>{detail.description}</h4>
                
                    </div>)
                }
                
            
            </div>
            
            
     
        </>
    )
}

export default SingleVideo
