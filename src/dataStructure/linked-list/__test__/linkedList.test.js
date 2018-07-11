import LinkedList from '../LinkedList'

describe('LinkedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new LinkedList()
        expect(linkedList.toString()).toBe('')
    })

    it('should append node to linked list', () => {
        const linkedList = new LinkedList();
        
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()

        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)

        expect(linkedList.toString()).toBe('1,2,3,4')

        let deleteHead = linkedList.shift()
        expect(deleteHead.value).toBe(1)
        expect(linkedList.toString()).toBe('2,3,4')
    })

})