export const generateOptimalCourseList = (courseMap, csvData) => {
    // step 1: find best teacher for each class
    let arr_keys = Array.from(courseMap.keys()); 
    // for step 2 later on
    let allPossibleClassPeriods = [];
    for (var z = 0; z < arr_keys.length; z++) {
        let course_name = arr_keys[z];
        let course_objs = courseMap.get(course_name);
        let professors = [];
        for (var l = 0; l < course_objs.length; l++) {
            // split instructor array at 2 spaces to separate all professors, and merge arrays
            Array.prototype.push.apply(professors, course_objs[l].get("Instructor").split("  ").map(prof_str => prof_str.trim()))
            course_objs[l].set("Course Name", course_name);
        }
        // iterate through teachers, get grade records (csvData is a array of objects), sort by custom sort func
        // NOTE: consider writing a script that custom generates a dataset (manually appends teachers to existing data)
        let records = csvData.filter(grade_record => {
            return grade_record.dept + " " + grade_record.course_nbr === course_name && professors.includes(grade_record.prof);
        }).sort(function(instructor_1, instructor_2) {
            // how to measure better professor? for now: highest percent of As/A-s/B+/Bs from overall grades
            // TODO: Make this customizable by user (they can set a target grade, or rank all the grades)
            let goodgrades_i1 = parseInt(instructor_1["a2"]) + parseInt(instructor_1["a3"]) + parseInt(instructor_1["b1"]) + parseInt(instructor_1["b2"]); 
            let totalgrades_i1 = goodgrades_i1 + parseInt(instructor_1["b3"]) + parseInt(instructor_1["c1"]) + parseInt(instructor_1["c2"]) + parseInt(instructor_1["c3"]) + parseInt(instructor_1["d1"]) + parseInt(instructor_1["d2"]) + parseInt(instructor_1["d3"]) + parseInt(instructor_1["f"]);
            instructor_1.gradeRatio = (parseFloat(goodgrades_i1) / parseFloat(totalgrades_i1)).toString();

            let goodgrades_i2 = parseInt(instructor_2["a2"]) + parseInt(instructor_2["a3"]) + parseInt(instructor_2["b1"]) + parseInt(instructor_2["b2"]); 
            let totalgrades_i2 = goodgrades_i2 + parseInt(instructor_2["b3"]) + parseInt(instructor_2["c1"]) + parseInt(instructor_2["c2"]) + parseInt(instructor_2["c3"]) + parseInt(instructor_2["d1"]) + parseInt(instructor_2["d2"]) + parseInt(instructor_2["d3"]) + parseInt(instructor_2["f"]);
            instructor_2.gradeRatio = (parseFloat(goodgrades_i2) / parseFloat(totalgrades_i2)).toString();

            if (instructor_1.gradeRatio < instructor_2.gradeRatio) {
              return -1;
            }
            else if (instructor_1.gradeRatio > instructor_2.gradeRatio) {
              return 1;
            }
            else {
              return 0;
            }
        }).reverse();
        
        // step 2: store all possible class periods based on best teacher
        if (records.length === 0) {
            window.alert("Grades not available for " + course_name);
            Array.prototype.push.apply(allPossibleClassPeriods, course_objs)
        }
        else {
            Array.prototype.push.apply(allPossibleClassPeriods, course_objs.filter(course_obj => {
                    if (course_obj.get("Instructor").includes(records[0].prof)) {
                        course_obj.set("gradeRatio", parseFloat(records[0].gradeRatio).toFixed(4));
                        return true;
                    }
                    return false;
                })
            );
        } 
    }
    return allPossibleClassPeriods;
}