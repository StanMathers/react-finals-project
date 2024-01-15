class DateServices {

    getFormattedForInput(year, month, day) {
        let result = ""
        result += year
        result += "-"
        if (month < 10) {
            result += "0"
        }
        result += month
        result += "-"
        if (day < 10) {
            result += "0"
        }
        result += day
        return result
    }

    getFormattedForApiAsObject(year, month, day) {
        let result = {
            year: "",
            month: "",
            day: ""
        }
        result.year = year.toString()

        if (month < 10) {
            result.month = "0"
        }
        result.month += month.toString()

        if (day < 10) {
            result.day = "0"
        }
        result.day += day.toString()

        console.log(result)
        return result
    }
}


export default new DateServices()