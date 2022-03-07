const masterList = [
    { name: 'Item 1', numbers: ["one"]},
    { name: 'Item 2', numbers: ["two"]},
    { name: 'Item 3', numbers: ["three"]},
    { name: 'Item 1&2', numbers: ["one", "two"]},
    { name: 'Item 1&3', numbers: ["one", "three"]},
    { name: 'Item 3&2', numbers: ["three", "two"]},
];

describe('array filter from Arrat', () => {

    it('array list finds matches in another array', () => {

        const filters = ["one"];      

        const result: any = [];

       masterList.forEach((x) => {
           x.numbers.some((y) => filters.some((z) => {
                if (y === z) {
                    result.push(x);
                }}))
        });

        console.log(result);

        expect(result.length).toEqual(3);
    });

    it('find filters with 2 elements', () => {

        const filters = ["one", "two"];

       

        const tempResult: Set<any> = new Set();

       masterList.forEach((x) => {
           x.numbers.some((y) => filters.some((z) => {
                if (y === z) {
                    tempResult.add(x);
                }}))
        });

        console.log(tempResult);

        const result = Array.from(tempResult);

        expect(result.length).toEqual(5);
    });

    it('find filters with 3 elements', () => {

        const filters = ["one", "three"];

        const tempResult: Set<any> = new Set();

       masterList.forEach((x) => {
           x.numbers.some((y) => filters.some((z) => {
                if (y === z) {
                    tempResult.add(x);
                }}))
        });

        console.log(tempResult);

        const result = Array.from(tempResult);

        expect(result.length).toEqual(5);    
    });

    it('Number 3', () => {

        const filters = ["three"];

        const tempResult: Set<any> = new Set();

       masterList.forEach((x) => {
           x.numbers.some((y) => filters.some((z) => {
                if (y === z) {
                    tempResult.add(x);
                }}))
        });

        console.log(tempResult);

        const result = Array.from(tempResult);

        expect(result.length).toEqual(3);    
    });
});