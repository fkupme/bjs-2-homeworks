class AlarmClock {
	constructor(alarmCollection = [], intervalId = null) {
		this.alarmCollection = alarmCollection,
			this.intervalId = intervalId
	}

	addClock(time, callback) {
		if (!(time && callback)) {
			throw new Error('Отсутствуют обязательные аргументы');
		};

		const isTimeCorrect = (time) => {
			const timeFormat = time.split(':')
			if (
				time[2] !== ':'
				|| timeFormat[0] > 24
				|| timeFormat[1] > 60
			) {
				throw new Error('Неверный формат времени');
			}
		};
		isTimeCorrect(time); // как лучше было бы сделать эту проверку?

		for (let alarm of this.alarmCollection) {
			if (alarm.time === time) {
				console.warn('Уже присутствует звонок на это же время')
			}
		};

		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
	}

	getCurrentFormattedTime() {
		const currentDate = new Date()
		return currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
	}

	start() {
		if (this.intervalId) {
			return
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(alarm => {
				if (
					alarm.time === this.getCurrentFormattedTime()
					&& alarm.canCall === true
				) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

