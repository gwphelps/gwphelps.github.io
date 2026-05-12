import Markdown from 'react-markdown'
import blogPostRespository from "./../blogPostRepository.js";
import { useState, useEffect, useRef } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
import { MuiMarkdown, defaultOverrides } from 'mui-markdown';
function Blog() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        blogPostRespository.getBlogPosts()
            .then(data => {
                console.log(data);
                return data;
            })
            .then(data => setPosts(data));
    }, [])

    return (
        <>  
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{maxWidth: "md"}}>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="h1">chet's Blog</Typography>
                    </Box>
                    {posts.map(post => {
                        return (
                            <Card variant="outlined" sx={{ m: 2, boxShadow: 1 }}>
                                <CardContent>
                                    <MuiMarkdown
                                        overrides={{
                                            ...defaultOverrides, // This will keep the other default overrides.
                                            p: {
                                                component: ({...props}) => <Typography sx={{marginBottom: "1rem"}} variant="body1" {...props} />,
                                            },
                                            h2: {
                                                component: ({...props}) => <Typography sx={{marginBottom: "1rem"}} variant="h2" {...props} />,
                                            },
                                            h3: {
                                                component: ({...props}) => <Typography sx={{marginBottom: "1rem"}} variant="h3" {...props} />,
                                            },
                                        }}
                                    >
                                        {post}
                                    </MuiMarkdown>
                                </CardContent>
                            </Card>
                            )
                    })
                    }
                </Box>
            </Box>
        </>
    );
}

export default Blog;