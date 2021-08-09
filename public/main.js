const request = new XMLHttpRequest();
request.open ("GET","/style.css")

request.onreadystatechange=()=>{
    if (request.readyState===4 && request.status===200){
        const style =document.createElement("style");
        console.log(request.response)
        style.innerHTML = request.response;
        document.head.appendChild(style);
    }else{
        alert('加载 css 失败')
    }  
}

request.send()
