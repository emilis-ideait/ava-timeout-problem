const test = require( 'ava' );


const wait = time =>
    new Promise( resolve =>
        setTimeout( resolve, time )
    );


test(
    'test 1 should pass',
    async t =>
        t.pass(),
);


test(
    'test 2 should timeout',
    async t => {
        await wait( 4_000 );
        t.pass();
    },
);


test(
    'test 3 should pass',
    async t =>
        t.pass(),
);
