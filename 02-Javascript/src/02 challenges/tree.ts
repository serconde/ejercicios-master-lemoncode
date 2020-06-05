console.log("********** CHALLENGE: tree ***********");

class TreeNode<T> {
  private _data: T;
  private _depth: number;
  private _children: Array<TreeNode<T>>;
  private _childPointer: number;
  private _previousPosition: number;

  constructor(data: T) {
    this._depth = 0;
    this._children = new Array<TreeNode<T>>();
    this._data = data;
    this._childPointer = 0;
    this._previousPosition = undefined;
  }

  set depth(d: number) {
    this._depth = d;
  }

  get depth(): number {
    return this._depth;
  }

  get data(): T {
    return this._data;
  }

  isLeaf(): Boolean {
    return this._children.length === 0;
  }

  addChild(c: TreeNode<T>) {
    c.depth = this._depth + 1;
    this._children.push(c);
  }

  next(): TreeNode<T> {
    if (this._childPointer === this._children.length) {
      return null;
    } else {
      if (this._previousPosition !== this._childPointer) {
        this._previousPosition = this._childPointer;
        return this._children[this._childPointer];
      } else {
        var n = this._children[this._childPointer].next();

        if (n === null) {
          this._childPointer++;
          return this.next();
        } else {
          return n;
        }
      }
    }
  }

  reset() {
    this._childPointer = 0;
    this._previousPosition = undefined;
    this._children.forEach(node => node.reset());
  }
}

const root: TreeNode<string> = new TreeNode<string>("Root");
const nodeThree = new TreeNode<string>("3");
const nodeThreeOne = new TreeNode<string>("31");
const nodeThreeOneOne = new TreeNode<string>("311");
const nodeThreeOneTwo = new TreeNode<string>("312");
nodeThree.addChild(nodeThreeOne);
nodeThreeOne.addChild(nodeThreeOneOne);
nodeThreeOneOne.addChild(nodeThreeOneTwo);

const levelOne: Array<TreeNode<string>> = [
  new TreeNode<string>("1"),
  new TreeNode<string>("2"),
  nodeThree,
  new TreeNode<string>("4"),
  new TreeNode<string>("5"),
  new TreeNode<string>("6"),
];

levelOne.map((node) => root.addChild(node));

let n;

while ((n = root.next())) {
  console.log(n.data);
}

root.reset();

while ((n = root.next())) {
  console.log(n.data);
}