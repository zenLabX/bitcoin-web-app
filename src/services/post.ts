/** 取得分頁貼文資料 */
export const getPostList = async (page: string) => {
    const response = await fetch(`/api/post/list?page=${page}&limit=10`)
    const resData = await response.json()
    return resData.data;
}

/** 新增單一貼文資料 */
export const addPost = async (data: { title: string, content: string }) => {
    const response = await fetch(`/api/post/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData.data;
}

/** 取得單一貼文資料 */
export const getPost = async (id: string) => {
    const response = await fetch(`/api/post/detail/?id=${id}`)
    const resData = await response.json()
    return resData.data;
}