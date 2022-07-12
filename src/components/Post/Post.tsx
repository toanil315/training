import React, { useState } from 'react'
import { useGetPostListQuery, useLazyGetPostDetailQuery, useUpdatePostMutation } from '../../services/PostAPI'
import { IPost } from '../../util/type'

function Post() {
    const [postDetail, setPostDetail] = useState<IPost>({
        id: -1,
        title: "",
        author: ""
    })
    const {data: dataPostList, error, isLoading} = useGetPostListQuery()
    const [triggerGetPostDetail, resultPostDetail, lastPromiseInfo] = useLazyGetPostDetailQuery()
    const [updatePost, result] = useUpdatePostMutation()

    const handleGetPostDetail = async (id:number) => {
        const {data: dataPostDetail} = await triggerGetPostDetail(id)
        if(dataPostDetail) {
            setPostDetail({...dataPostDetail})
        }
    }

    const renderPost = () => {
        return dataPostList?.map((post, index) => {
            return <div key={post.id} onClick={() => {handleGetPostDetail(post.id)}} style={{padding: '10px 20px', backgroundColor: 'rgba(0,0,0, 0.1)', marginBottom: 20, textAlign: 'center', cursor: 'pointer'}}>{post.id}: {post.title}</div>
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        if(e.target.name === 'id') {
            setPostDetail({...postDetail, id: Number(e.target.value)})
        }
        else setPostDetail({...postDetail, [e.target.name]: e.target.value})
    }

    const handleUpdatePost = async () => {
        await updatePost(postDetail); 
        triggerGetPostDetail(postDetail.id)
    }

  return (
    <div>
        {renderPost()}
        <div>
            <h2>Post Detail</h2>
            <div>
                <input onChange={handleChange} readOnly type="text" value={postDetail.id === -1 ? "" : postDetail.id} name="id" placeholder='id' />
            </div>
            <div>
                <input onChange={handleChange} type="text" value={postDetail.title} name="title" placeholder='title' />
            </div>
            <div>
                <input onChange={handleChange} type="text" value={postDetail.author} name="author" placeholder='author' />
            </div>
            <button onClick={() => {handleUpdatePost()}}>Update Post</button>
        </div>
        <div>
            {
                !!resultPostDetail.data && <div>
                        id: {resultPostDetail.data.id} | title: {resultPostDetail.data.title} | author: {resultPostDetail.data.author}
                    </div>
            }
        </div>
    </div>
  )
}

export default Post