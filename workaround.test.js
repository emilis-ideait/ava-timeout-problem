const test = require( 'ava' );


const wait = time =>
    new Promise( resolve =>
        setTimeout( resolve, time )
    );


const withTimeout = time =>
    async ( t, run, ...args ) => {
        try {
            t.timeout( time );          // set new timeout value
            await run( t, ...args );    // run the test
        } finally {
            t.timeout( 2_000 );         // restore default timeout (set in ava.config.js)
        }
    };


test(
    'test 1 should pass',
    async t =>
        t.pass(),
);


test(
    'test 2 should timeout',
    withTimeout( 1_990 ), // should differ from default timeout by > 10ms
    async t => {
        await wait( 5_000 );
        t.pass();
    },
);


test(
    'test 3 should pass',
    async t =>
        t.pass(),
);
