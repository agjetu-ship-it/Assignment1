import React from "react";
import { Blogs } from "./blogs.js";
export function FeaturedBlogs() {
    return <>
        <Blogs blogs={[
                   {
            title: "What is Network Bandwidth",
            description: "Understand the throttle of your network — Why your internet can feel slow at times",
            linkTo: "/definitions/whatisnetworkbandwidth",
            image: "https://micronovaimpex.com/wp-content/uploads/2021/02/Ethernet-cabls.png",
            minutesToRead: 2
       },
            {
                title: "Deleted Blog",
                description: "This blog is deleted.",
                linkTo: "/definitions/howdoesthetheoryofrelativityrelatetothetheoryofquagerstein",
                image: "<main>",
                minutesToRead: 0.5
        }
        ]}></Blogs>
    </>
}