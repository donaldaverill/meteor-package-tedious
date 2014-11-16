if (Meteor.isServer) {
  Tinytest.add('Tedious - defined on server', function(test) {
    test.notEqual(Tedious, undefined, 'Expected ' +
      'Tedious to be defined on the server.');
  });
  Tinytest.add('TediousRequest - defined on server', function(test) {
    test.notEqual(TediousRequest, undefined, 'Expected ' +
      'TediousRequest to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Tedious - undefined on client', function(test) {
    Tedious = Tedious || undefined;
    test.isUndefined(Tedious, 'Expected Tedious ' +
      'to be undefined on the client.');
  });
  Tinytest.add('TediousRequest - undefined on client', function(test) {
    TediousRequest = TediousRequest || undefined;
    test.isUndefined(TediousRequest, 'Expected TediousRequest ' +
      'to be undefined on the client.');
  });
}
