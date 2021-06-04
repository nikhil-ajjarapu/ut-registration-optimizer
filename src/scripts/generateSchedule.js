export const generateSchedule = async (innerhtml_text) => {
    var temp_html = document.createElement('html');
    temp_html.innerHTML = innerhtml_text;
    var allclasses_plusmisc = temp_html.getElementsByTagName('tr');
    let course_schedule = [];
    for (var j = 0; j < allclasses_plusmisc.length; j++) {
        var class_info = allclasses_plusmisc[j].getElementsByTagName('td');
        if (class_info[0] != null && class_info[0].getAttribute("data-th") === "Unique") {
            // Store all classes + timings
            let class_summary = new Map();
            for (var k = 0; k < class_info.length; k++) {
                if (["Unique", "Days","Hour", "Instructor", "Status"].includes(class_info[k].getAttribute("data-th"))) {
                    class_summary.set(class_info[k].getAttribute("data-th"), class_info[k].innerText)
                }
            }
            //TODO: add the class_summary to a list that is mapped to a key of the class ID
            if (class_summary.get("Status").includes("open")) {
                course_schedule.push(class_summary);
            }
        }   
    } 
    return course_schedule;
}