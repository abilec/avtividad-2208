import { backendurl } from "../env";
import { POST } from "./Fetch";

const PostApi =async (data)=>{
    let rsp = await POST(backendurl+"login",data);
    return rsp;
}

export default PostApi;