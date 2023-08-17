
(()=>{

    console.log('iife called')
    const param=window.location.search?.replace("?p=","");
    const srcUrl = `https://sdptestnam.blob.core.windows.net/web/foo${param}.js`;
    var scriptTag = document.createElement('script');
    document.head.appendChild(scriptTag);
    scriptTag.onload=function(script){
        console.log(script+'loaded');
        foofunc();
    }
    scriptTag.setAttribute('src',srcUrl);

})()