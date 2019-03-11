exports.postTmp = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>board</title>
        <link rel="stylesheet" href="../style/style.css">
    </head>
    <body>
        <div id="header">
            <p>this is header</p>
        </div>
        <!--top of the page-->
        <div id="center_body">
            <nav id="navigation">
                <table id="navi_table">
                    <tr>
                        <th>Main</th>
                        <th>About</th>
                        <th>post_page</th>
                    </tr>
                </table>
                <!--navi table-->
            </nav>
            <!--content navigation-->
            <div id="pagetop">
                <span id="main_banner" role="button"><img src="" alt="main_img" id="main_img"></span>
            </div>
            <!--top of the page and bottom of the navigation-->
            <table id="main">
                <!--post table-->
                <tr id="table_head">
                    <th>num</th>
                    <th>subject</th>
                    <th>writer</th>
                    <th>date</th>
                    <th>hit</th>
                </tr>
                <!--this is add the post object at the db-->
            </table>
        </div>
        <!--page main part-->
    </body>
    </html>
    `
};