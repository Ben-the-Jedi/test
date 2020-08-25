import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Home({ postData }) {
  
  const videoURL = `${postData.URL}`
    
  return (
    <Layout>
	<h1>{postData.title}</h1>
	<h2>課程簡介：</h2> {postData.description}	
	<br />
	<br />
	
	<iframe width="729" height="410" src={videoURL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
	<br />
	PostID: {postData.id}
	<br />
	URL： {postData.URL}	
	<br />
	Date: {postData.date}
	<br />
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
