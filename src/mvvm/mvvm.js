import Compile from './compile'
export default class MVVM {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        if (this.$el) {
            new Compile(this.$el, this);
        }
        // console.log(this)
    }
}