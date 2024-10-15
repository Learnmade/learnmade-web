import { request, gql } from 'graphql-request';
const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

const getAllCourseList = async () =>{
    const query = gql`
query MyQuery {
  courseLists {
    name
    description
    sourceCode
    paid
    id
    youtubeUrl
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    totalChapters
    author
    slug
  }
}
    `
    const result = await request(MASTER_URL, query);
    return result;
}
const getSideBanners = async ()=>{
  const query = gql`
  query GetSideBanner{
  sideBanners {
    id
    name
    banner {
      id
      url
    }
    url
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getCourseByID = async (courseId) =>{
  const query =gql`
  query MyQuery {
  courseList(where: {slug: "`+ courseId +`"}) {
    author
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    banner {
      url
    }
    description
    paid
    id
    name
    slug
    sourceCode
    tag
    totalChapters
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}
const enrollToCourse = async (courseId,email)=>{
  const query =gql`
  mutation MyMutation {
  createUserEnrollCourse(
    data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
  ) {
    id
  }
    publishManyUserEnrollCoursesConnection {
    edges {
      node {
        id
      }
    }
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}
export default {getAllCourseList, getSideBanners, getCourseByID, enrollToCourse};