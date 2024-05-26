import React from "react";
import TopBar from "./TopBar";
import Content from "./Content";

function LandingPage(){
    return(
        <div class="bg-gray-200">
            <TopBar/>  
            <div className="mt-8">
                <Content/>
            </div>

         </div>
    );
}

export default LandingPage;