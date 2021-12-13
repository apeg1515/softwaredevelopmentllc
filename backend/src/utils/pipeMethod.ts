export const pipe = (...functions: Array<Function>) => (values: any) => {
    return functions.map(async(func, pos) => {
        let lastComputted;
        if(pos === 0) {
            lastComputted = await func(values);
            if(lastComputted)
                return lastComputted;
        } else {

            setTimeout(async() => {
                lastComputted = await func(values);
                if(lastComputted)
                    return lastComputted;
            }, 500);
        }
    });
};
