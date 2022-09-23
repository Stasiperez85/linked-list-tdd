const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
    test('it adds the elembet to the begining of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0')
    test('it returns null', () => {
        const ll = LinkedList.fromVaules(10, 20)

        expect(ll.getByIndex(-1)).toBeNull()
    })
})

describe('#getByIndex', () => {
    describe('with index greater than list length')
    test('it returns null', () => {
        const ll = LinkedList.fromVaules(10, 20)

        expect(ll.getByIndex(5)).toBeNull()
    })
})

describe('with index 0', () => {
    describe('with indes less than 0')
    test('it returns the head', () => {
        const ll = LinkedList.fromVaules(10, 20)

        expect(ll.getByIndex(0).value).toBe(10)
    })
})

describe ('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        
    })
})