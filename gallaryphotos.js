var allImages=document.images
console.log(allImages)
for(i=0;i<allImages.length;i++)
{
    allImages[i].src=`./photos/${i}.jpg`
    allImages[i].addEventListener("click",function()
    {
        document.getElementById("bigImgContainer").style.display="flex"
        document.getElementById("bigImg").style.backgroundImage=`url(${this.src})`
    });
}
function closewindoe()
{
    document.getElementById("bigImgContainer").style.display="none"
}