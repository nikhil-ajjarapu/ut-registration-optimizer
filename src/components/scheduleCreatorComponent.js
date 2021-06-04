import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { startOfWeek, endOfWeek, startOfToday, format } from 'date-fns';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import {generateCalendarEvents} from "../scripts/generateCalendarEvents.js";
import {ContentComponent} from "contentComponent.js";

// build out nice UI to allow user to create/modify schedule
// TODO: also add functionality to add/remove classes from schedule, let user view all of them nicely
// design in figma?
class scheduleCreatorComponent extends React.Component {
    constructor(props) {
      super(props)    
      this.state = {
        allPossibleClasses: this.props.location.state.possibleClasses,
        currentDate: startOfToday(),
        schedulerData: generateCalendarEvents(this.props.location.state.possibleClasses, startOfWeek(startOfToday(),  {weekStartsOn: 0}), endOfWeek(startOfToday(),  {weekStartsOn: 0}))
      }
    }

    render() {
      return (
        <Paper>
          <Scheduler height={"auto"} data={this.state.schedulerData} >
            <ViewState 
              currentDate={format(this.state.currentDate, "yyyy-MM-dd")}
            />
            <WeekView
              startDayHour={7.5}
              endDayHour={22}
            />
            <Appointments />
            <AppointmentTooltip
              showCloseButton
              showOpenButton
              contentComponent={ContentComponent}
            />
            <AppointmentForm
              readOnly
            />
          </Scheduler>
        </Paper>
    );
  }
}

export {scheduleCreatorComponent};