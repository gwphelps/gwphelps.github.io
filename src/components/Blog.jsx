import Markdown from 'react-markdown'
import blogPostRespository from "./../blogPostRepository.js";
import { useState, useEffect, useRef } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
function Blog() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        blogPostRespository.getBlogPosts()
            .then(data => setPosts(data));
    }, [])

    return (
        <>  
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{maxWidth: "sm"}}>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="h3">chet's Blog</Typography>
                    </Box>
                    {posts.map(post => {
                        return (
                            <Card variant="outlined" sx={{ m: 2, boxShadow: 1 }}>
                                <CardContent>
                                    <Typography>
                                        <Markdown>{post}</Markdown>
                                    </Typography>
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