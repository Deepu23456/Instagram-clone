let arr = [
    {dp:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    story:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    story:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80",
    story:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80",
    story:"https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    story:"https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1593804497738-04c8a6f8a033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
    story:"https://images.unsplash.com/photo-1593804497738-04c8a6f8a033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"},
    
    {dp:"https://images.unsplash.com/photo-1523260578934-e9318da58c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:"https://images.unsplash.com/photo-1523260578934-e9318da58c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    
]
let storiyan = document.querySelector(".storiyan")
let clutter = "";
arr.forEach(function(elem,idx ){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block"
    
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    document.querySelector(".full-screen").style.zIndex = 9;

    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none";
        
    },1000)
})

let container = document.querySelector(".container");
let love = document.querySelector("i");

container.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = "0.8";
    like.style.color = "rgba(241, 26, 62, 0.836)"
    unlike = 1
    setTimeout(function(){
        love.style.opacity = "0";
    },1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },2000)
})

let like = document.querySelector(".love i");
let unlike = 0
like.addEventListener("click",function(){
    if(unlike == 0){
        like.style.color = "rgba(241, 26, 62, 0.836)"
        unlike = 1;
    }else{
        like.style.color = "#403f3f"
        unlike = 0;
    }
    
})
