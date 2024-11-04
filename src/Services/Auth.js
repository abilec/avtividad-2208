import { POST } from "./Fetch";

const PostApi =async (data)=>{
    try
    {
        let rsp = await POST("login",data);
        return rsp;
    }
    catch (error)
    {
        console.error("error en la peticion");
    }
}

export default PostApi;