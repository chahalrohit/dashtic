import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import React,{useEffect,useState} from "react";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { Card, CardBody, Col, Row,CardTitle,CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

interface EventProps {
  id: string;
  title: string;
  start: Date | string;
  end?: Date | string;
  allDay?: boolean;
}

const Calendar = () =>{
  let eventGuid: number = 0;
  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

  const INITIAL_EVENTS: EventProps[] = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "My Event 1",
        id: "1",
        bg: "bg-primary",
        border: "border-primary",
      },
      {
        title: "My Event 2",
        id: "2",
        bg: " bg-secondary",
        border: "border-secondary",
      },
      {
        title: "My Event 3",
        id: "3",
        bg: "bg-warning",
        border: "border-warning",
      },
      { title: "My Event 4", id: "4", bg: "bg-info", border: "border-info" },
      {
        title: "My Event 5",
        id: "5",
        bg: "bg-success",
        border: "border-success",
      },
      {
        title: "My Event 6",
        id: "6",
        bg: "bg-danger",
        border: "border-danger",
      },
    ],
    weekendsVisible: true,
  };
  const [state] = useState(initialstate1);

  useEffect(() => {
    let draggableEl: HTMLElement | null = document.getElementById(
      "external-events"
    );
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl: HTMLElement) {
          let title: string | null = eventEl.getAttribute("title");
          let id: string | null = eventEl.getAttribute("data");
          let classValue: string | null = eventEl.getAttribute("class");
          return {
            title: title,
            id: id,
            className: classValue,
          };
        },
      });
    }
  }, []);

  function renderEventContent(eventInfo: any): JSX.Element {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  
  const handleEventClick = (clickInfo: any): void => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  
  const handleEvents = (events: any): void => {};
  
  const handleDateSelect = (selectInfo: any): void => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
  
    calendarApi.unselect();
  
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  
  function createEventId(): string {
    return String(Date.now());
  }

   return(
  <div>
    <PageHeaders
      title="Full Calender"
      home="Home"
      name="Apps"
      fonticonsname="Full Calender"
    />
    <Row>
      <Col xl={3}>
        <Card>
          <CardHeader className="">
            <CardTitle className="">Event List</CardTitle>
          </CardHeader>
          <CardBody className="">
          <div id="external-events">
                    <h4>Draggable Events</h4>
                    {state.events.map((event) => (
                      <div
                        className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`}
                        title={event.title}
                        datatype={event.id}
                        key={event.id}
                      >
                        <div className="fc-event-main">{event.title}</div>
                      </div>
                    ))}
                  </div>
            <div className="mt-5">
              <Link
                className="btn btn-primary"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#modalSetSchedule"
              >
                <i className="fe fe-plus"></i> Add New Event
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={9}>
        <Card>
        <CardBody className="main-content-body main-content-body-calendar">
          <div className="main-calendar" id="calendar"><FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={state.weekendsVisible}
                      initialEvents={INITIAL_EVENTS}
                      select={handleDateSelect}
                      eventContent={renderEventContent}
                      eventClick={handleEventClick}
                      eventsSet={handleEvents}
                    /></div>
        </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);
   }
Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
