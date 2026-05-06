class OrderTracker {
    constructor(orderId) {
        this.orderId = orderId;
        this.status = 'New';
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this.orderId, this.status);
        });
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Order ${this.orderId} status updated to: ${this.status}`);
        this.notifyObservers();
    }
}

class OrderObserver {
    update(orderId, status) {
        throw new Error("This method should be overridden!");
    }
}
class EmailNotifier extends OrderObserver {
    update(orderId, status) {
        console.log(`Email: Order ${orderId} is now ${status}.`);
    }
}
class DashboardNotifier extends OrderObserver {
    update(orderId, status) {
        console.log(`Dashboard: Order ${orderId} status updated to ${status}.`);
    }
}

export { OrderTracker, EmailNotifier, DashboardNotifier };