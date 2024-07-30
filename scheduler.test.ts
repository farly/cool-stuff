import Scheduler, { Availability, Day, Lesson } from "./scheduler";

describe("Scheduler challenge tests", () => {
  test('when lessons is empty should return empty schedule', () => {

    const availabilities: Availability[] = [{
      id: 1,
      day: 0,
      startTime: "10:00",
      endTime: "12:00" 
    }]

    const scheduler = new Scheduler()
    const schedules = scheduler.schedule([], availabilities)
    
    expect(schedules).toStrictEqual([])
  })

  test('when availabities is empty should return empty schedule', () => {
    const lesson: Lesson[] = [{
      title: 'Title',
      duration: 30 
    }]

    const scheduler = new Scheduler()
    const schedules = scheduler.schedule(lesson, [])

    expect(schedules).toStrictEqual([])
  })

  test('when total lesson duration is equal to availability duration', () => {
    const lessons = [{
      title: 'JS Basics',
      duration: 90,
    }, {
      title: 'JS Fundamentals',
      duration: 90,
    }]

    const availabilities = [{
      id: 1,
      day: 1 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }, {
      id: 2,
      day: 2 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }, {
      id: 3,
      day: 2 as Day,
      startTime: '13:00',
      endTime: '14:00',
    }]

    const expectedOutput =  [{
      "availabilityId": 1,
      "lessons": [{
        "title": "JS Basics",
        "duration": 60
      }]
      }, {
        "availabilityId": 2,
        "lessons": [{
          "title": "JS Basics",
          "duration": 30
        }, {
          "title": "JS Fundamentals",
          "duration": 30
        }]
      }, {
        "availabilityId": 3,
        "lessons": [{
          "title": "JS Fundamentals",
          "duration": 60
        }] 
      }]

    const scheduler = new Scheduler()
    const schedules = scheduler.schedule(lessons, availabilities)
    expect(schedules).toEqual(expectedOutput)
  })

  test('when total lesson duration is less than to availability duration', () => {
    const lessons = [{
      title: 'Lesson 1',
      duration: 30,
    }, {
      title: 'Lesson 2',
      duration: 30,
    }]

    const availabilities = [{
      id: 1,
      day: 1 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }, {
      id: 2,
      day: 2 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }, {
      id: 3,
      day: 2 as Day,
      startTime: '13:00',
      endTime: '14:00',
    }]

    const expectedOutput =  [{
      "availabilityId": 1,
      "lessons": [{
        "title": "Lesson 1",
        "duration": 30 
      }, {
        "title": "Lesson 2",
        "duration": 30 
      }]
    }]
      
    const scheduler = new Scheduler()
    const schedules = scheduler.schedule(lessons, availabilities)
    expect(schedules).toEqual(expectedOutput)
  })

  test('when total lesson duration greater than to availability duration', () => {
    const lessons = [{
      title: 'Lesson 1',
      duration: 90,
    }, {
      title: 'Lesson 2',
      duration: 90,
    }]

    const availabilities = [{
      id: 1,
      day: 1 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }, {
      id: 2,
      day: 2 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }]

    const expectedOutput =  [{
      "availabilityId": 1,
      "lessons": [{
        "title": "Lesson 1",
        "duration": 60 
      }]
    }, {
      "availabilityId": 2,
      "lessons": [{
        "title": "Lesson 1",
        "duration": 30 
      }, {
        "title": "Lesson 2",
        "duration": 30 
      }]
    }]
      
    const scheduler = new Scheduler()
    const schedules = scheduler.schedule(lessons, availabilities)
    expect(schedules).toEqual(expectedOutput)
  })

  test('should return correct reschedule', () => {
    const lessons = [{
      title: 'Lesson 1',
      duration: 15,
    }, {
      title: 'Lesson 2',
      duration: 30,
    }, {
      title: 'Lesson 3',
      duration: 20
    }]

    const availabilities = [{
      id: 1,
      day: 1 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }, {
      id: 2,
      day: 2 as Day,
      startTime: '09:00',
      endTime: '10:00',
    }]

    const expectedOutput =  [{
      "availabilityId": 1,
      "lessons": [{
        "title": "Lesson 1",
        "duration": 15 
      }, {
        "title": "Lesson 2",
        "duration": 30 
      }, {
        "title": "Lesson 3",
        "duration": 15 
      }]
    }, {
      "availabilityId": 2,
      "lessons": [{
        "title": "Lesson 3",
        "duration": 5 
      }]
    }]
      
    const scheduler = new Scheduler()
    const schedules = scheduler.schedule(lessons, availabilities)
    expect(schedules).toEqual(expectedOutput)
  })
});
