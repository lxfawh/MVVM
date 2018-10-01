class Compile {
    constructor(el, vm) { //vm MVVM的实例
        if (el.nodeType === 1) {
            this.el = el;
        } else {
            this.el = document.querySelector(el);
        }
        this.vm = vm;

        // let fragment = this.node2fragment(this.el);

        // console.log(fragment)
    }

    node2fragment(el) {
        let fragment = document.createDocumentFragment();

        let firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment;
    }

}

export default Compile;