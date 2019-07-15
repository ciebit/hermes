import Listener from './Listener'

export default class Hermes
{
    private listeners:Object = {};

    public addListener(
        eventName:string,
        callback:Function,
        singleCall:boolean = false,
        key: string = ''
    ): this
    {
        if(! (eventName in this.listeners) ) {
            this.listeners[ eventName ] = []
        }

        this.listeners[ eventName ].push({
            'callback': callback,
            'key': key,
            'singleCall': singleCall,
        });

        return this;
    }

    public dispatch(eventName:string, ...args:Array<any>): this
    {
        if(! this.listeners[eventName]) {
            return this;
        }

        for(let key in this.listeners[eventName]) {
            let item: Listener = this.listeners[eventName][key]

            item.callback.apply(item.callback, args)

            if(item.singleCall) {
                delete this.listeners[eventName][key]
            }
        }

        return this;
    }

    public remove(eventName:string, callback:Function): this
    {
        if(! (eventName in this.listeners)) {
            return this
        }

        for(let key in this.listeners[eventName])
        {
            let listener = this.listeners[eventName][key]

            if (listener.callback === callback) {
                delete this.listeners[eventName][key]
            }
        }

        return this
    }
}
