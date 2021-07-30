import React,{useEffect,useState} from 'react'
import { Row,Col, ListGroup,Container} from 'react-bootstrap';
import SingleVideo from './SingleVideo';
import Suggestions from './Suggestions';
import config from '../config'
import YouTube from 'simple-youtube-api'

const youTube=new YouTube(config.apiKey)
export default ({searchString})=> {

    const [videoList,setVideoList]=useState([])
    const [selectedVideo,setSelectedVideo]=useState({})
    const [error,setError]=useState(false)
    
    useEffect(() => {
        callApi()
    }, [searchString])

    const callApi=async()=>{

        const result=await youTube.searchVideos(searchString,6)
        setVideoList(result)

        if(result.length===0){
            setError(true)
        }else{
            setError(false)
        }
       setSelectedVideo(result[0])
        
    }

    const selectedVideoCallback=(videoDetail)=>{
      setSelectedVideo(videoDetail)
    }

    return (
        <React.Fragment>
        <Container fluid={true}>
        <Row>
                <Col style={{border:'2px solid black',position:'relative'}}>
                    {error?<h1>No result found.</h1>: <SingleVideo detail={selectedVideo}/>}
                </Col>
     
                {!error && 
                (<Col lg={true}>
                    <ListGroup key={videoList.id}>
                    <p style={{size:'sm'}}>Suggestions</p>
                        <Suggestions videosList={videoList} 
                                     changeSelection={selectedVideoCallback}
                                     selectedVideoId={selectedVideo.id}
                                     />
                    </ListGroup>      
                </Col>
                )}

      
            </Row>
    
      
    
        </Container>
           
        </React.Fragment>
        
    )
}


