export const getPostList = async (page: string) => {
    const response = await fetch(`/api/post/list?page=${page}&limit=10`)
    const resData = await response.json()
    return resData.data;
}

export const addPost = async (data: { title: string, content: string }) => {
    const response = await fetch(`/api/post/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData.data
}