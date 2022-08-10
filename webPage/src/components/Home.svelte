<script>
    import background from "../images/background.jpg";
</script>

<body>
    <header>
        <div class="container">
            <a href="/" id="logo">
                    <h1 id="logo-intro" >
                        Because Reasons Engineering
                    </h1>
            </a>
            <nav aria-label="primary">
                <ul class="list-divider-pipe">
                    <li class="active">
                        <a href="/">Home</a>
                    </li>
                    <li class="active">
                        <a href="/downloads">Downloads</a>
                    </li>
<!--                    <li>-->
<!--                        <a href="/about">About</a>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <a href="/downloads">Downloads</a>-->
<!--                    </li>-->
                </ul>
            </nav>
        </div>
    </header>
    <main id="main">
        <div class="container">
            <div id="home-intro">
                <p>
                    Because Reasons Engineering Is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis.
                </p>
                <h2 id="home-downloadhead">Download</h2>
                <div class="home-downloadblock">
                    <a href="https://becausereasonsengineering.com/ATM.2.1.zip" class="home-downloadbutton" title="Download version =" data-version="version">
                         2.1.0 Current
                        <small>Latest Release</small>
                    </a>
                    <ul class="list-divider-pipe home-secondary-links">
                        <li>
                            <a href="/downloads">Another Versions</a>
                        </li>
                    </ul>
                </div>
<!--                <div class="home-downloadblock" style="width: 216.09px;height: 81px">-->
<!--                    <a href="https://becausereasonsengineering.com/ATM%20Beta.exe" class="home-downloadbutton" title="Download version Current">-->
<!--                         2.0.0 Beta-->
<!--                        <small> Earlier Versions</small>-->
<!--                    </a>-->
<!--                    <ul class="list-divider-pipe home-secondary-links">-->
<!--                        <li>-->
<!--                            <a href="/downloads">Another Versions</a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
            </div>
        </div>
    </main>
    <footer class="no-margin-top">
        <div class="container">
            <div class="contact">
                <p>
                    <a href="mailto:ove@becausereasonsengineering.com">
                        Contact - ove@becausereasonsengineering.com
                    </a>
                </p>
            </div>
        </div>
    </footer>
</body>

<style>

    :global(body){
        background-image: url("../src/images/background.jpg");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
    }

        #home-downloadhead {
            color:black;
        }
        #logo-intro{
            font-family: 'Exo 2', sans-serif;
            font-size: 51px;
        }
    body {
        display:flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        box-sizing: border-box;
        font: 400 20px/1.5 "Source Sans Pro", "Open Sans", Roboto, "San Francisco", Helvetica, Arial, sans-serif;
        color: black;
        background-color: #fff;
    }
    * {
        transition: background-color 0.24s ease;
    }
    header {
        background-color: #333;
        text-align: center;
        position: relative;
    }
    header, footer {

        flex-shrink: 0;
    }
    header > .container {
        overflow: visible;
    }
    .container {
        width: 100%;
        max-width: 980px;
        margin: 0 auto;
    }
    #logo {
        display: inline-block;
        color:#a52d2d;
    }
    a, a:link, a:active {
        color: black;
        text-decoration: none;
        border-radius: 2px;
    }
    #logo img {
        margin: 0.5em auto 0;
    }
    mg {
        display: block;
        max-width: 100%;
        height: auto;
        border: none;
    }
    header nav {
        cursor: default;
    }
    .list-divider-pipe {
        margin: 0;
        padding: 0;
    }
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    .list-divider-pipe li {
        display: inline-block;
    }
    header li {
        position: relative;
    }

    header li {
        padding-bottom: 12px;
    }
    header nav a, header nav a:link, header nav a:active {
        padding: 0 8px;
        text-transform: uppercase;
        font-size: 14px;
        color: #ccc !important;
    }
    .list-divider-pipe {
        margin: 0;
        padding: 0;
    }
    header > .container {
        overflow: visible;
    }
    #main {
        flex: 1 0 auto;
    }
    header, #main, footer {
        display: flex;
    }
    #main .container {
        padding: 0 20px;
    }
    #home-intro {
        max-width: 735px;
        margin: 0 auto;
        padding: 30px 0;
        text-align: center;
    }
    a, a:link, a:active {
        color: white;
        text-decoration: none;
        border-radius: 2px;
    }
    p a {
        padding-right: 2px;
        padding-left: 2px;
        margin-right: -2px;
        margin-left: -2px;
    }
    #home-intro h2 {
        margin-bottom: 0;
    }
    h1, h2, h3, h4, h5 {
        font-weight: 400;
    }
    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    .home-downloadblock {
        display: inline-block;
        margin: 0 8px;
    }
    .home-downloadbutton {
        display: block;
        margin: 10px 4px;
        padding: 0.2em 0.6em;
        background-color: #a52d2d;
        color: #fff !important;
        border-radius: 2px;
        font-size: 30px;
        font-weight: 400;
        transition: background-color 0.2s ease-in-out;
    }
    .home-downloadbutton small {
        display: block;
        font-size: 1rem;
    }
    .home-secondary-links {
        color: black;
        font-size: 0.9rem;
    }
    .list-divider-pipe {
        margin: 0;
        padding: 0;
    }
    .home-downloadblock {
        display: inline-block;
        margin: 0 8px;
    }
    #home-intro {
        max-width: 735px;
        margin: 0 auto;
        padding: 30px 0;
        text-align: center;
    }
    #main .container {
        padding: 0 20px;
    }
    .home-secondary-links {
        color: black;
        font-size: 0.9rem;
    }
    .list-divider-pipe {
        margin: 0;
        padding: 0;
    }
    .list-divider-pipe li {
        display: inline-block;
    }
    .home-secondary-links a {
        color: black;
    }
    footer.no-margin-top {
        margin-top: 0;
    }
    footer {
        background-color: #333;
        padding: 0;
    }
    header, footer {
        flex-shrink: 0;
    }
    header, #main, footer {
        display: flex;
    }
    .contact {
        padding: 1em 20px;
        font-size: 16px;
        color: #fff;
        background: #333;
        direction: ltr;
        text-align: center;
    }
    h1, h2, h3, h4, h5 {
        font-weight: 400;
    }


</style>
