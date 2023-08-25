'use client'
import React from 'react'
import { getPostBySlug } from '@/utils/api';
import  ErrorPage from 'next/error'
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import PostBody from '@/components/post-body';

type Props = {
  params : { slug : string }
}

export default function Post({ params } : Props) {
  
  const slug = params.slug;
  const post = getPostBySlug(slug);
  if (!post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <article className="mb-32 mt-4">
              <PostHeader
                title={post.title}
                coverImage={post.image}
                author={post.author}
              />
              
            <PostBody overview={post.overview} solution={post.solution} context={post.context}/>
              
            </article>
    </Container>

  )
}
