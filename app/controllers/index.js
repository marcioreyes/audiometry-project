function doTest1(e) {
	
	/*
	 * If we have userid in properties fire test1
	 * else open login
	 */
	if(Ti.App.Properties.getString('userid')){
		test1win = Alloy.createController('test-1');
	}else{
		loginwin = Alloy.createController('login');
	}
	
    //alert('testing');
}

$.index.open();