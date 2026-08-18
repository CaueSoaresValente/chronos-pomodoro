let intervalId = null
let currentTaskId = null

self.onmessage = function (e) {
    const state = e.data
    const { activeTask, secondsRemaining } = state

    if (!activeTask) {
        if (intervalId) {
            clearInterval(intervalId)
            intervalId = null
        }
        currentTaskId = null
        return
    }

    if (currentTaskId === activeTask.id && intervalId !== null) {
        return
    }

    if (intervalId) {
        clearInterval(intervalId)
    }

    currentTaskId = activeTask.id
    const endDate = Date.now() + secondsRemaining * 1000

    intervalId = setInterval(() => {
        const countDownSeconds = Math.ceil((endDate - Date.now()) / 1000)
        self.postMessage(countDownSeconds)

        if (countDownSeconds <= 0) {
            clearInterval(intervalId)
            intervalId = null
            currentTaskId = null
        }
    }, 1000)
}

