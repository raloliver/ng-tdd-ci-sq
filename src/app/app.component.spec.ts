import { AppComponent } from "./app.component"

describe('AppComponent', () => {
    let component: AppComponent;
    let result: any;

    beforeEach(() => {
        component = new AppComponent();
    });

    it('should be John', () => {
        result = component.welcomeMessage('John');

        expect(result).toEqual('Welcome John');
    })
});