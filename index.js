// Your code here
let EmployeeRecord=["firstName", "familyName", "title", timeInEvents[''], timeOutEvents['']] 
function createEmployeeRecord(employeerow){
    return{
        firstName: employeerow[0],
        familyName: employeerow[1],
        title: employeerow[2],
        payPerHour: employeerow[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
let employeeRecords;
let rows=[

    ["firstName","familyName","title", 2],
    ["firstName","familyName","title", 3]
]
let dataEmployees=[
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]

]
employeeRecords.length=10
function createEmployeeRecords(employee){
    return employee.map(record=>createEmployeeRecord(record))
}

function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
    })
    return employeeRecord
    }
    function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
    })
    return employeeRecord
    }
    function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(function (e) {
    return e.date === date
    })
    const timeOutEvent = employeeRecord.timeOutEvents.find(function (e) {
    return e.date === date
    })
    return (timeOutEvent.hour - timeInEvent.hour) / 100
    }
    function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    const wagesEarned = hoursWorked * employeeRecord.payPerHour
    return wagesEarned
    }
    function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map(function (e) {
    return e.date
    })
    const allWages = datesWorked.reduce(function (totalWages, date) {
    return totalWages + wagesEarnedOnDate(employeeRecord, date)
    }, 0)
    return allWages
    }
    function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce(function (total, employeeRecord) {
    return total + allWagesFor(employeeRecord)
    }, 0)
    return totalPayroll
    }








































