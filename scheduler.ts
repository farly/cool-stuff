export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Lesson = {
  title: string
  duration: number
};

export type Availability = {
  id: number
  day: Day
  startTime: string
  endTime: string
};

export type Schedule = {
  availabilityId: number
  lessons: Lesson[]
};

function strToTime(time: string): {hours: number, mins: number} {
  const [hours, mins] = time.split(":") 
  return { hours: parseInt(hours), mins: parseInt(mins)}
}


class Scheduler {
  constructor() {}

  schedule(lessons: Lesson[], availabilities: Availability[]): Schedule[] {
    const schedules : Schedule[] = []
    
    let i = 0 // availabities index
    let j = 0 // lessons index
    const availabilitiesLength = availabilities.length
    const lessonsLength = lessons.length

    const lessonDurations = this.retrieveLessonDuration(lessons)
    const availabilitiesDurations = this.retrieveAvailabityDuration(availabilities)

    while(i < availabilitiesLength && j < lessonsLength) {
      const lessonDuration = lessonDurations[j]
      const availabilityDuration = availabilitiesDurations[i]

      const availability = availabilities[i] 
      const lesson = lessons[j]

      if (!schedules.some(s => s.availabilityId === availability.id)) {
        schedules.push({
          availabilityId: availability.id,
          lessons: []
        })
      } 

      const schedule = schedules.find(s => availability.id === s.availabilityId)
      const duration = lessonDuration >= availabilityDuration ? availabilityDuration : lessonDuration

      schedule?.lessons.push({
        title: lesson.title,
        duration
      })

     if (duration === lessonDuration) {
        availabilitiesDurations[i] = availabilityDuration - duration 
        lessonDurations[j] = 0 // not needed for debuggin purposes 
        j++
      } else if (duration === availabilityDuration) {
        lessonDurations[j] = lessonDuration - duration 
        availabilitiesDurations[i] = 0 // not needed for debugging purposes
        i++
      }


    }


    return schedules
  }

  retrieveLessonDuration(lessons: Lesson[]): number[] {
    return lessons.map(lesson => lesson.duration)
  } 

  retrieveAvailabityDuration(availabilities: Availability[]): number[] {
    return availabilities.map(a => {
      const { hours: startHours, mins: startMin } = strToTime(a.startTime)
      const { hours: endHours, mins: endMin } = strToTime(a.endTime)

      const startTime = new Date()
      startTime.setHours(startHours)
      startTime.setMinutes(startMin)

      const endTime = new Date()
      endTime.setHours(endHours)
      endTime.setMinutes(endMin)

      const availabilityDuration = Math.ceil((endTime.valueOf() - startTime.valueOf()) / (60 * 1000))
      return availabilityDuration
    })
  }
}

export default Scheduler;
