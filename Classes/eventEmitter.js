class EventEmitter {
    
    constructor(){
        this.events = {};
    }
    
    subscribe(eventName, callback) {
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        const subscription = {
            callback,
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(subscription);
                if(index !== -1){
                    this.events[eventName].splice(index, 1);
                }
            },
        };

        this.events[eventName].push(subscription);


        return { unsubscribe: subscription.unsubscribe};
    }

    emit(eventName, args = []) {
        const callbacks = this.events[eventName];
        if(!callbacks || callbacks.length === 0){
            return [];
        }

        const results = callbacks.map((subscription) => subscription.callback(...args));
        return results
    }
}
