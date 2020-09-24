
var body = document.body;
var ttop = document.createElement("div");
ttop.setAttribute("class", "to-top");
ttop.setAttribute("id", "scrollup")
ttop.addEventListener("click", scrollup)
var sp1 = document.createElement("span");
sp1.innerHTML = "&#8896;"
ttop.appendChild(sp1);
body.appendChild(ttop);


window.onscroll = function () {
    scrollshow()
};

function scrollshow() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollup").style.display = "flex";
    }
    else {
        document.getElementById("scrollup").style.display = "none";
    }
}

function scrollup() {
    document.documentElement.scrollBy(
        {
            top: `-${document.documentElement.scrollTop}`
        }
    );
}


{/* <div class="butmenu-menu" id="butmenu-menu">
    <span>Home</span>
    <span>Notifications</span>
    <span>upload</span>
    <span>Chat</span>
    <span>Profile</span>
</div>
    <div class="butmenu" id="butmenu">
        <span id="closebutmenu">x</span>
        <span id="openbutmenu">></span>
    </div> */}



var butmenu = document.createElement("div");
butmenu.setAttribute("class", "butmenu");
butmenu.setAttribute("id", "butmenu");
butmenu.innerHTML = `
        <span id="closebutmenu">x</span>
        <span id="openbutmenu">></span>`;


var butmenumenu = document.createElement("div");
butmenumenu.setAttribute("class", "butmenu-menu");
butmenumenu.setAttribute("id", "butmenu-menu");
butmenumenu.innerHTML =`
<span><a href="/home"><label>&#8962;</label>Home</a></span>
    <span><a href="/notifications"><label>&#128276;</label>Notifications</a></span>
    <span><a href="/upload"><label>&#128301;</label>Discover</a></span>
    <span><a href="/chat"><label>&#128172;</label>Chat</a></span>
    <span><a href="/profile"><label>&#128276;</label>Profile</a></span>`;

body.appendChild(butmenumenu);
body.appendChild(butmenu);
var closebutmenu = document.getElementById("closebutmenu");
var openbutmenu = document.getElementById("openbutmenu");
var butmenunum = 1;
function showbutmenu() {
    if (butmenunum == 1) {
        butmenumenu.style.width = "5vh";
        butmenumenu.style.height = "5vh";
        butmenumenu.style.padding = "2vh";

        butmenumenu.style.width = "10vh";
        butmenumenu.style.height = "10vh";
        openbutmenu.style.transform = "rotate(90deg)"

        butmenumenu.style.width = "15vh";
        butmenumenu.style.height = "15vh";
        openbutmenu.style.zIndex = "-1"
        closebutmenu.style.zIndex = "1"
        butmenumenu.style.borderRadius = "0 40vh 0 5vh"

        butmenumenu.style.width = "25vh";
        butmenumenu.style.height = "25vh";

        butmenumenu.style.width = "30vh";
        butmenumenu.style.height = "30vh";
        openbutmenu.style.transform = "rotate(0deg)"

        butmenunum = 2;
    }
    else if (butmenunum == 2) {

        butmenumenu.style.width = "25vh";
        butmenumenu.style.height = "25vh";

        butmenumenu.style.width = "15vh";
        butmenumenu.style.height = "15vh";
        closebutmenu.style.transform = "rotate(90deg)"

        butmenumenu.style.width = "10vh";
        butmenumenu.style.height = "10vh";

        openbutmenu.style.zIndex = "1"
        closebutmenu.style.zIndex = "-1"

        butmenumenu.style.width = "5vh";
        butmenumenu.style.height = "5vh";
        closebutmenu.style.transform = "rotate(0deg)"
        // butmenumenu.style.borderRadius = ""

        butmenumenu.style.width = "40px";
        butmenumenu.style.height = "40px";
        butmenumenu.style.borderRadius = "50%"
        butmenumenu.style.padding = "0";
        butmenunum = 1;
    }


}
butmenu.addEventListener("click", showbutmenu);

function closebutmenu2() {

    butmenumenu.style.width = "25vh";
    butmenumenu.style.height = "25vh";

    butmenumenu.style.width = "15vh";
    butmenumenu.style.height = "15vh";
    closebutmenu.style.transform = "rotate(90deg)"

    butmenumenu.style.width = "10vh";
    butmenumenu.style.height = "10vh";

    openbutmenu.style.zIndex = "1"
    closebutmenu.style.zIndex = "-1"

    butmenumenu.style.width = "5vh";
    butmenumenu.style.height = "5vh";
    closebutmenu.style.transform = "rotate(0deg)"
    // butmenumenu.style.borderRadius = ""

    butmenumenu.style.width = "0";
    butmenumenu.style.height = "0";
    butmenumenu.style.padding = "0";
    butmenunum = 1;
}

if (document.getElementsByClassName("container")[0]){
    document.getElementsByClassName("container")[0].addEventListener("click", closebutmenu2);
}
if (document.querySelector("footer")){
    document.querySelector("footer").addEventListener("click", closebutmenu2);
}