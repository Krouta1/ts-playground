class MyClass {
  private _myName: string = "";

  get myName(): string {
    return this._myName;
  }

  set myName(value: string) {
    this._myName = value;
  }
}

const mePetr = new MyClass();
mePetr.myName = "Petr";
console.log(mePetr.myName);
