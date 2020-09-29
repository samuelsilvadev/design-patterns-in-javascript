class Car {
	constructor(options) {
		this.options = options;

		console.log('Car created - 🚖');
	}
}

class CarFactory {
	static create(options) {
		return new Car(options);
	}
}

class Truck {
	constructor(options) {
		this.options = options;

		console.log('Truck created - 🚚');
	}
}

class TruckFactory {
	static create(options) {
		return new Truck(options);
	}
}

const VEHICLE_TYPE = {
	CAR: 'CAR',
	TRUCK: 'TRUCK',
};

class AbstractVehicleFactory {
	constructor() {
		this.vehicles = new Map([
			[VEHICLE_TYPE.CAR, CarFactory],
			[VEHICLE_TYPE.TRUCK, TruckFactory],
		]);
	}

	getVehicle(type, options = {}) {
		const Factory = this.vehicles.get(type);

		if (!Factory.create) {
			throw new Error('Missing create method');
		}

		if (Factory) {
			return Factory.create(options);
		}

		throw new TypeError('Factory is not defined');
	}
}

const factory = new AbstractVehicleFactory();

factory.getVehicle(VEHICLE_TYPE.CAR, { color: 'red' });
factory.getVehicle(VEHICLE_TYPE.TRUCK, { color: 'blue' });
