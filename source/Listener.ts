export default interface Listener {
    callback: Function
    key: string
    singleCall: boolean
}