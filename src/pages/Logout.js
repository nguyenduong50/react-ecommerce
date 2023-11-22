import { redirect } from "react-router-dom";

export function action(){
    localStorage.removeItem("currentUserAssignment3");
    return redirect("/");
}