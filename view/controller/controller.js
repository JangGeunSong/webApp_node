var naviTable = document.getElementById("navi_table");
var menu_chart = document.getElementById("menu_chart");

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

naviTable.addEventListener('mouseenter', ()=> {
    menu_chart.style.display = "table-row";
});

naviTable.addEventListener('mouseleave', () => {
    menu_chart.style.display = "none"
});
