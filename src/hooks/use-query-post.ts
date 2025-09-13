import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getPost } from "@/services/post";

const useQueryPost = () => {
    const { id } = useParams(); // '/post/eui-333-ood-234'

    return useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id as string)
    })
}

export default useQueryPost;