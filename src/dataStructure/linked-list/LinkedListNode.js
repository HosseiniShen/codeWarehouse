// 单个链表的节点元素类
export default class LinkedListNode {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString (callback) {
        return callback ? callback(this.value) : `${this.value}`
    }

}
