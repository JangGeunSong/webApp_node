const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const dbURL = 'mongodb://localhost:27017';

// Database Name
const dbName = 'postlist';

var db = null;

var tmp = ` `;

var table = ` `;

// Use connect method to connect to the server
MongoClient.connect(dbURL, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
  
    findDocuments(db, () => {
      console.log("Find Document is success!");
    })
  
    client.close();
  });

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('post');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    docs.reverse();
    docs.forEach((post) => {
        table = table + `
        <tr class="posts">
            <td>${post.num}</td>
            <td>${post.subject}</td>
            <td>${post.writer}</td>
            <td>${post.date}</td>
            <td>${post.hit}</td>
        </tr>
        `;
    });
    callback(docs);
  });
}

exports.postTmp = () => {
    tmp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>board</title>
        <link rel="stylesheet" href="../style/style.css">
        <link rel="shortcut icon" href="../style/favicon.ico">
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
                        <th id="menu_main">Main</th>
                        <th id="menu_about">About</th>
                        <th id="menu_post">post_page</th>
                        <th id="menu_FAQ">FAQ</th>
                    </tr>
                </table>
                <!--navi table-->
                <table id="navi_sub_table">
                    <tr id="menu_chart">
                        <th class="menu_th">
                            <ul>
                                <li class="menu_li">Main Hi</li>
                                <li class="menu_li">Main Hi</li>
                                <li class="menu_li">Main Hi</li>
                                <li class="menu_li">Main Hi</li>
                            </ul>
                        </th>
                        <th class="menu_th">
                            <ul>
                                <li class="menu_li">About</li>
                            </ul>
                        </th>
                        <th class="menu_th">
                            <ul>
                                <li class="menu_li">Post 1</li>
                            </ul>
                        </th>
                        <th class="menu_th">
                            <ul>
                                <li class="menu_li">FAQ solution</li>
                            </ul>
                        </th>
                    </tr>
                </table>
                <!--navi sub table-->
            </nav>
            <!--content navigation-->
            <div id="pagetop">
                <span id="main_banner" role="button"><img src="../style/banner.jpg" alt="main_img" id="main_img"></span>
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
                </tr>`;
    tmp = tmp + table;
    tmp = tmp +  `
                <!--this is add the post object at the db-->
                </table>
            </div>
            <!--page main part-->
            <div id="footer">
                <h3>Written by SongJangGeun 2019</h3>
            </div>
            <!--page footer part-->
            <script src="../controller/controller.js"></script>
        </body>
    </html>
    `
    return tmp;
};
//post board template