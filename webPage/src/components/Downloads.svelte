<script>

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
            </ul>
        </nav>
    </div>
</header>
<main id="main">
    <div class="container">
    <article dir="auto">
        <section>
            <table class="download-matrix full-width">
                <tbody>
                <tr>
                    <th>
                        ATM v2.1(.zip)
                    </th>
                    <td>
                        <a href="https://becausereasonsengineering.com/ATM.2.1.zip"> download</a>
                    </td>
                </tr>
                <tr>
                    <th>
                        ATM v2.1 (.exe)
                    </th>
                    <td>
                        <a href="https://becausereasonsengineering.com/ATM%202.1.exe">download</a>
                    </td>
                </tr>
                <tr>
                    <th>
                        ATM v2.0 Beta (.exe)
                    </th>
                    <td>
                        <a href="https://becausereasonsengineering.com/ATM%20Beta.exe">download</a>
                    </td>
                </tr>
                <tr>
                    <th>
                        USB Drivers
                    </th>
                    <td colspan="2">
                        <a href="https://becausereasonsengineering.com/drivers.zip"> download</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    </article>
    </div>
</main>
<footer class="no-margin-top">
    <div class="container">
        <div class="contact">
            <p>
                <a id="email" href="mailto:ove@becausereasonsengineering.com">
                    Contact - ove@becausereasonsengineering.com
                </a>
            </p>
        </div>
    </div>
</footer>
</body>
<style>

    #email {
        color: white;
    }
    .download-matrix th {
        text-align: left;
        width: 33%;
    }
    th, td {
        padding: 5px;
    }
    td:hover {
        background-color: #a52d2d;
        color: black;
        cursor: pointer
    }
    :global(body){
        background-image: url("../src/images/background.jpg");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
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
        background-color: black;
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
    header, #main, footer {
        display: flex;
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
    header, footer {
        display: flex;
    }
    #main .container {
        padding: 0 20px;
    }

    a, a:active {
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
    .home-downloadbutton small {
        display: block;
        font-size: 1rem;
    }

    .list-divider-pipe {
        margin: 0;
        padding: 0;
    }

    #main .container {
        padding: 0 20px;
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
    header, footer {
        display: flex;
    }
    h1, h2, h3, h4, h5 {
        font-weight: 400;
    }
    section {
        display: block;
        margin: 118px 0px 0px 0px
    }
    .download-matrix {
        margin-bottom: 1.5rem;
    }
    .full-width {
        width: 100%;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    table {
        border-collapse: separate;
        text-indent: initial;
        border-spacing: 33px;
    }
    body {
        box-sizing: border-box;
        font: 400 20px/1.5 "Source Sans Pro", "Open Sans", Roboto, "San Francisco", Helvetica, Arial, sans-serif;
        color: #333;
        margin: 0;
        background-color: #fff;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    th {
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
    }
    .download-matrix td {
        border: 1px solid #ccc;
    }
    td {
        display: table-cell;
        vertical-align: inherit;
    }
    .download-matrix td a, .download-matrix td span {
        background: none;
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
    article a {
        word-break: break-word;
    }

    .download-matrix td {
        border: 1px solid #0e0909;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    .download-matrix {
        margin-bottom: 1.5rem;
    }
    .full-width {
        width: 100%;
    }
    * {
        transition: background-color 0.24s ease;
    }
    section {
        display: block;
    }
    #main .container {
        padding: 0 20px;
    }
    .container {
        width: 100%;
        max-width: 980px;
        margin: 0 auto;
        overflow: hidden;
    }
    article {
        display: block;
    }
    .download-header h1 {
      margin: 0 0 0 0;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 400;
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
    footer.no-margin-top {
        margin-top: 0;
    }
    a, a:active {
        color: black;
        text-decoration: none;
        border-radius: 2px;
    }
    #main {
        flex: 1 0 auto;
    }
     footer {
        display: flex;
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


</style>

