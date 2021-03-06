QUnit.test( "vm.runInThisContext", function(assert) {
    assert.ok(
        require('vm').runInThisContext instanceof Function,
        "Should be an instance of Function."
    );

    assert.ok(
        require('vm').runInThisContext(
            "var test = 'Test'; test;",
            {
                "filename" : 'test filename',
                "displayErrors" : true,
                "timeout" : 10000
            }
        ) == 'Test',
        'Should be return "Test" as string.'
    );
});

QUnit.test( "vm.runInDebugContext", function(assert) {
    assert.ok(
        require('vm').runInDebugContext instanceof Function,
        "Should be an instance of Function."
    );

    assert.ok(
        require('vm').runInDebugContext(
            "var test = 'Test'; test;"
        ) == 'Test',
        'Should be return "Test" as string.'
    );
});

QUnit.test( "vm.runInNewContext", function(assert) {
    assert.ok(
        require('vm').runInNewContext instanceof Function,
        "Should be an instance of Function."
    );

    assert.ok(
        require('vm').runInNewContext(
            "var test = 'Test'; a;",
            { "a" : "abc123" },
            {
                "filename" : 'test filename',
                "displayErrors" : true,
                "timeout" : 10000
            }
        ) == 'abc123',
        'Should be return "abc123" as string.'
    );
});

QUnit.test( "vm.runInContext", function(assert) {
    assert.ok(
        require('vm').runInContext instanceof Function,
        "Should be an instance of Function."
    );

    var scope = require('vm').createContext(
       {}
   );

    assert.ok(
        require('vm').runInContext(
             "var test = 'Test'; test;",
             scope,
            {
                "filename" : 'test filename',
                "displayErrors" : true,
                "timeout" : 10000
            }
        ) == 'Test',
        'Should be return "Test" as string.'
    );
});

QUnit.test( "vm.createContext", function(assert) {
    assert.ok(
        require('vm').createContext instanceof Function,
        "Should be an instance of Function."
    );

    var scope = {};

    assert.ok(
        require('vm').createContext(
           scope
        ) === scope,
        'Should be return "Test" as string.'
    );
});

QUnit.test( "vm.createScript", function(assert) {
    assert.ok(
        require('vm').createScript instanceof Function,
        "Should be an instance of Function."
    );

    assert.ok(
        require('vm').createScript(
            "var test = 'Test'; test;",
            {
                "filename" : 'test filename',
                "displayErrors" : true,
                "timeout" : 10000
            }
        ) instanceof require('vm').Script,
        'Should be return a instance of vm.Script.'
    );
});
