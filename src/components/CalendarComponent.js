import React from 'react';
import moment from 'moment';
import { Card, Container, Button, Row, Col, Table } from 'react-bootstrap';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }


    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null
    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        const dateContext = this.state.dateContext;
        const firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    setMonth = (month) => {
        const monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }

    SelectList = (props) => {
        const popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        const dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ?
                <input
                    defaultValue={this.year()}
                    className="editor-year"
                    ref={(yearInput) => { this.yearInput = yearInput }}
                    onKeyUp={(e) => this.onKeyUpYear(e)}
                    onChange={(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year" />
                :
                <span
                    className="label-year"
                    onDoubleClick={(e) => { this.showYearEditor() }}>
                    {this.year()}
                </span>
        );
    }

    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        }, () => {
            console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(e, day);
    }

    render() {
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <Col key={day} className="week-day">{day}</Col>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<Col key={i * 80} className="emptySlot">
                {""}
            </Col>
            );
        }


        console.log("blanks: ", blanks);

        const daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <Col key={d} className={className + selectedClass} className="calendarDay"  >
                    <span onClick={(e) => { this.onDayClick(e, d) }}>{d}</span>
                </Col>
            );
        }


        console.log("days: ", daysInMonth);

        let totalSlots = [...blanks, ...daysInMonth];
        const rows = [];
        let cells = [];
        let lastDays = [];


        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                const insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                const insertRow = cells.slice();
                rows.push(insertRow);
            }
        });


        for (let i = 36; i > totalSlots.length; i--) {
            lastDays.push(<Col className="emptySlot">
                {""}
            </Col>);
        }

        console.log("totalSlots: " +totalSlots.length); 
        console.log("lastDays: " + lastDays.length)

        const trElems = rows.map((d, i) => {
            return (
                <Row className="text-left" key={i * 100}>
                    {d}
                </Row>
            );
        })

        return (
            <div className="gridWrapper dark">
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="mt-3 mb-2 footerHeadText mainHead">- Request a Time -</h2>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <table className="card">
                            <Row className="calendar">
                                <Col sm="10">
                                    <this.MonthNav />
                                    {" "}
                                    <this.YearNav />
                                </Col>
                                <Col colSpan="2" className="nav-month">
                                    <i className="prev fa fa-fw fa-chevron-left"
                                        onClick={(e) => { this.prevMonth() }}>
                                    </i>
                                    <i className="prev fa fa-fw fa-chevron-right"
                                        onClick={(e) => { this.nextMonth() }}>
                                    </i>

                                </Col>
                            </Row>
                            <tbody className="calendar">
                                <Row className="calendar">
                                    {weekdays}

                                </Row>
                                {trElems}
                            </tbody>
                        </table>
                    </Container>
                </Row>
            </div>

        );
    }
}

export default Calendar;