
//search engine dictionary
let engines = {
    "google": "https://google.com/search?q=",
    "duck": "https://duckduckgo.com/?t=ffab&q=",
}

//color dictionary
let colors = {
    "original" : "#C53B3C",
}

function runCommand(fullCommand){

    //get the main command without arguments
    let command = fullCommand.split(" ")[0];
    
    switch(command){

        //change the main color
        case "color":

            //get color argument
            let colorArgument = fullCommand.split(" ")[1];

            //if colors is predefined in colors dictionary
            if (colorArgument in colors)
                colorArgument = colors[colorArgument];

            //changing the style of the all the containers and fields
            document.getElementsByClassName("weather-container")[0].style.backgroundColor = colorArgument;
            Array.from(document.getElementsByClassName("bookmark-set")).forEach(set => {set.style.backgroundColor = colorArgument;})
            document.getElementById("search").style.backgroundColor = colorArgument;
            document.getElementById("bookmarkSearch").style.backgroundColor = colorArgument;
            document.getElementById("commandMode").style.backgroundColor = colorArgument;
            document.getElementById("search-field").style.backgroundColor = colorArgument;
            document.getElementById("bookmark-search-field").style.backgroundColor = colorArgument;
            document.getElementById("command-mode-field").style.backgroundColor = colorArgument;
        break;

        //change the search engine
        case "engine":
            //get engine argument
            let engineArgument = fullCommand.split(" ")[1];

            if(engineArgument in engines)
                searchUrl = engines[engineArgument];
            else

        break;

        default:
            //no command found
    }
}

