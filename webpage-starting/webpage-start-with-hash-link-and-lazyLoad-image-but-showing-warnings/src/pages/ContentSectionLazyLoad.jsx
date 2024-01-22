import CustomScript from "./modules/CustomScript";
import React, { Suspense, lazy } from "react";
const Slider = lazy(() => import ("./modules/Slider"));
const ContentSectionLazyLoad = () => {
    return(
        <>
            <CustomScript>
                <Suspense fallback={<div>Content Lazy Load...</div>}>
                    <Slider />
                </Suspense>
                <section>Lazy Load</section>
                <Suspense fallback={<div>Content Lazy Load...</div>}>
                    <Slider />
                </Suspense>
            </CustomScript>
        </>
    )
}
export default ContentSectionLazyLoad;