export const generateHTMLUrls = (classes) => {
    var urls = []
    for (var i = 0; i < classes.length; i++) {
        var [field_name, course_number] = classes[i].split(" ")
        if (field_name === "CS") {
            field_name = "C+S";
        }
        urls.push("https://utdirect.utexas.edu/apps/registrar/course_schedule/20219/results/?ccyys=20219&search_type_main=COURSE&fos_cn=" + field_name + "&course_number=" + course_number +"&x=58&y=26")
    }
    return urls;
}                                                                                                                                                            

