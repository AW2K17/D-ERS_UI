import axios from 'axios';

async function fetchData() {
    try {
        const res = await axios.get('http://192.168.0.102:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
        // .then(response => {
        console.log(res);

        if (res.data.schedulee[0].id) {
            setScheduleId(res.data.schedulee[0].id)
            // setExe(response.data.schedulee[0].document[1].day[0].exercise);
            axios.get('http://192.168.0.102:3021/api-gateway/current-user/schedulee/' + res.data.schedulee[0].id, { withCredentials: true })
                .then((res) => {
                    // setWorkouts(res.data.schedule.document[2].day[0].exercise.photos);
                    // setExe(res.data.schedule.document[2].day[0].exercise);
                    console.log(res.data.schedule.document)
                    dates = res.data.schedule.document.map((e) => {
                        return e.sameDay;
                    })
                    function byDate(a, b) {
                        const aa = new Date(a.sameDay)
                        const bb = new Date(b.sameDay)

                        if (aa < bb) return -1;
                        if (aa > bb) return 1;
                        return 0;
                    }
                    function filterDate(a) {
                        const aa = new Date(a.sameDay).toISOString().substring(0, 10)
                        var bb = new Date().toISOString().substring(0, 10);
                        var datt = new Date(bb).toISOString().substring(0, 10)
                        // console.log(aa);
                        // console.log(bb);
                        // console.log(datt);
                        if (aa >= datt) {
                            return aa
                        }
                        return 0;
                    }
                    var dat = res.data.schedule.document.sort(byDate)
                    var datt2 = dat.filter(filterDate)
                    console.log(datt2)
                    if (datt2) {
                        exercises = datt2
                        setExercise(exercises)
                    }
                })
                .catch(error => {
                    console.log(error.response)
                })
        }

    }

    catch (err) {
        console.log(err);
    }
}

export default fetchData;