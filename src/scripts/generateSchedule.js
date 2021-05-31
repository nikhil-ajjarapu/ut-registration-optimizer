export const generateSchedule = async (innerhtml_text) => {
    var temp_html = document.createElement('html');
    temp_html.innerHTML = innerhtml_text;
    var allclasses_plusmisc = temp_html.getElementsByTagName('tr');
    var unique_ids = [];
    for (var j = 0; j < allclasses_plusmisc.length; j++) {
        var first_td = allclasses_plusmisc[j].getElementsByTagName('td')[0];
        if (first_td != null && first_td.getAttribute("data-th") === "Unique") {
            unique_ids.push("Unique ID: " + first_td.innerText);
        }
    } 
    return unique_ids;
}