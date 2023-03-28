import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'Components/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NotFound from 'Components/NotFound'
import Pattern from 'Components/Pattern'

export default function Post() {

    const params = useParams()
    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path='*' element={<Pattern/>}>
                <Route index element={
                                    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                                    <div className='post-markdown-container'>
                                        <ReactMarkdown>
                                            {post.texto}
                                        </ReactMarkdown>
                                    </div>
                                </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}
