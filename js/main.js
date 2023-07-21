var WebsitesArray=[]
if(localStorage.getItem('books')!=null)
{
    WebsitesArray=JSON.parse(localStorage.getItem('books'))
    display()
}
function getINput(){
    var siteName=document.getElementById('sitename').value
    var link=document.getElementById('link').value

    var sitetOBJ={
        name:siteName,
        Link:link
    }
    WebsitesArray.push(sitetOBJ)

    localStorage.setItem('books',JSON.stringify(WebsitesArray))

    display()
    clear()
}
function display(){
    var dis=``
    for(var i=0;i<WebsitesArray.length;i++){
        dis+=`
        <tr>
        <td>${i+1}</td>
        <td>${WebsitesArray[i].name}</td>
        <td>
            <button onclick="visit(${i})" class="btn btn-Success"><i class="fa-solid fa-eye me-2"></i>Visit</button>
        </td>
        <td>
            <button onclick="DELETE(${i})" class="btn btn-danger"><i class="me-2 fa-solid fa-dumpster"></i>DELETE</button>
        </td>
        </tr>
        `
    }
    document.getElementById('demo').innerHTML=dis
}

function clear(){
    var prodName=document.getElementById('sitename').value=""
    var prodPrice=document.getElementById('link').value=""
}
function DELETE(index){
    WebsitesArray.splice(index,1)
    
    localStorage.setItem("books",JSON.stringify(WebsitesArray))

    display()
}
function visit(index){
    window.open(WebsitesArray[index].Link,"_blank")
}