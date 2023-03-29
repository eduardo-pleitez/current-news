import { useContext } from "react";
import { CommentContext } from "./CommentContext";

export const useComments = ()=>{
    return useContext(CommentContext);
}