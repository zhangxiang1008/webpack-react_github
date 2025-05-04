// 双向链表 + hash表

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRuCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  _addToTail(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }
  _moveToTail(node) {
    this._removeNode(node);
    this._addToTail(node);
  }
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._moveToTail(node);
      return node.value;
    } else {
      return -1;
    }
  }
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._moveToTail(node);
    } else {
      if (this.map.size >= this.capacity) {
        const oldestNode = this.head.next;
        this._removeNode(oldestNode);
        this.map.delete(oldestNode.key);
      }
      const newNode = new ListNode(key, value);
      this.map.set(key, newNode);
      this._addToTail(newNode);
    }
  }
}
const cache = new LRuCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
console.log(cache.head.next.key, cache.tail.prev.key);
console.log(cache.get(2));
console.log(cache.head.next.key, cache.tail.prev.key);
