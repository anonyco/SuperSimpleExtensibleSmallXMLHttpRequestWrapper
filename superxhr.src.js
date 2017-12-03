HTTP = function(props){
	var request = new XMLHttpRequest;
	request.open(props.METHOD||"GET", props.url||".", !props.SYNC, props.USER||null, props.PASSWORD||null)
	for (var k in props)
		if (typeof request[k] === "function")
			props[k].forEach(request[k].apply.bind(request[k],request));
		else
			request[k] = props[k]
		request.send(props.POST||{});
	request.resend=function(url){request.open(props.METHOD||"GET", url||".", !props.SYNC, props.USER||null, props.PASSWORD||null);request.send(props.POST||{})};
	return request;
}
