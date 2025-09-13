import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getPostList } from "@/services/post";

const useQueryPostList = () => {
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page') || '1';

    /**
     * useQuery 主要參數：
     * queryKey: 幫 useQuery 加上身分證
     * queryFn: 獲取後端的資料
     */
    return useQuery({
        queryKey: ['posts', currentPage],
        queryFn: () => getPostList(currentPage)
    })
}

export default useQueryPostList;