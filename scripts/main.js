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

document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("mainHeader");
    var logo = document.getElementById("logo");

    function resize() {
        var headerHeight = header.clientHeight;
        logo.style.height = headerHeight + 'px';
    }

    // Initial call to set the logo height
    resize();

    // Add event listener to track size on window resize
    window.addEventListener("resize", resize);
});

document.addEventListener("DOMContentLoaded", function(){
    var header = document.getElementById("mainHeader");
    var logo = document.getElementById("logo");

    function resizeWidth()
    {
        var headerWidth = header.clientWidth*35/100;
        logo.style.width = headerWidth + 'px';
    }

    resizeWidth();

    window.addEventListener("resize", resizeWidth);
});

document.addEventListener("DOMContentLoaded", function()
{
    var headerBackground = document.getElementById("hText");
    var header = document.getElementById("mainHeader");

    function resizehTextHeigth()
    {
        var headerHeight = header.clientHeight;
        headerBackground.clientHeight = headerHeight +'px';
    }

    resizehTextHeigth();

    window.addEventListener("resize", resizehTextHeigth);
});
