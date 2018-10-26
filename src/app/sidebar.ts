// parameters
export class Sidebar {
    public showauthorName: boolean;
    constructor(public id: number, public name: string, public authorName: string) {
        this.showauthorName = false;
    }
}
