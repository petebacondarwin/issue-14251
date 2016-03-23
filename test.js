describe( 'xxx', function(){

    var $httpBackend,
        $indexFactory;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( _$httpBackend_ ){
        $httpBackend    = _$httpBackend_;
    }) );

    describe( 'yyy', function(){
        it( 'zzz', function(){
            expect( true ).toBe( true );
        });
    });

});