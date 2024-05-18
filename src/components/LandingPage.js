import React from "react";
import TopBar from "./TopBar";
import Content from "./Content";

function LandingPage(){
    return(
        <div class="bg-no-repeat bg-cover bg-center bg-[url('./assets/Signature.jpg')]">
            <TopBar/>  
            <div className="mt-8">
                <Content/>
            </div>

         </div>
    );
}

export default LandingPage;