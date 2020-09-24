var htm = `
        <div class="footer-logo">
            <img src="/img/nav/man4.jpg" alt="">
            <h1>STEPHUB</h1>
        </div>
        <div class="links">
            <a href="/home">Home</a>
            <a href="/skill">Skill</a>
            <a href="/category">Category</a>
            <a href="/videos">Videos</a>
            <a href="/community">Community</a>
            <a href="/support">Support</a>
            <a href="/job">Job</a>
            <a href="/donation">Donation</a>
        </div>
`;
var footer = document.createElement("footer");
footer.innerHTML = htm;
document.body.appendChild(footer);

