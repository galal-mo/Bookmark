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
    if(check(sitetOBJ.name)==true&&checkLink(sitetOBJ.Link)==true){
    WebsitesArray.push(sitetOBJ)

    localStorage.setItem('books',JSON.stringify(WebsitesArray))

    display()
    clear()
    }
    else{
        window.alert("Invlaid Data")
    }
}
function display(){
    var dis=``
    for(var i=0;i<WebsitesArray.length;i++){
        dis+=`
        <tr>
        <td class="align-middle">${i+1}</td>
        <td class="align-middle">${WebsitesArray[i].name}</td>
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
    document.getElementById("link").classList.remove("is-valid")
    document.getElementById("sitename").classList.remove("is-valid")

}

function DELETE(index){
    WebsitesArray.splice(index,1)
    
    localStorage.setItem("books",JSON.stringify(WebsitesArray))

    display()
}

function visit(index){
    window.open(WebsitesArray[index].Link,"_blank")
}
function check(str){
    var regax=  /[A-Za-z]{3,}/
    if(regax.test(str)==false)
    {
        document.getElementById("sitename").classList.add("is-invalid")
    }
    else{
        document.getElementById("sitename").classList.remove("is-invalid")
        document.getElementById("sitename").classList.add("is-valid")
    }
    return regax.test(str)
}   

function checkLink(str){
    var regax=/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
    if(regax.test(str)==false)
    {
        document.getElementById("link").classList.add("is-invalid")
    }
    else{
        document.getElementById("link").classList.remove("is-invalid")
        document.getElementById("link").classList.add("is-valid")
    }
    return regax.test(str)
}   
