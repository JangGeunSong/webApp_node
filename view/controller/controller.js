var naviTable = document.getElementById("navi_table");

naviTable.addEventListener('click', (target) => {
    if(target.toElement.id === "menu_main") {
        console.log("You clicked Main button");
    }
    else if(target.toElement.id === "menu_about") {
        console.log("You clicked About button");
    }
    else if(target.toElement.id === "menu_post") {
        console.log("You clicked Post button");
    }
    else if(target.toElement.id === "menu_FAQ") {
        console.log("You clicked FAQ button");
    }
});