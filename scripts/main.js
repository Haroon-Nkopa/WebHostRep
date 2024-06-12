var overview = document.getElementById("Poster");

overview.addEventListener("click", piclink);

function piclink()
{
    var picid = this.attributes["data-img"].value;
    var pic = document.getElementById(picid);
    
    if(pic.className==="hide")
        {
            pic.className="";
        }else{
            pic.className="hide";
        }
}

