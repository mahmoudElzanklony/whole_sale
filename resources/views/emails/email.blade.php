<!DOCTYPE html>
<html>
<head>
    <title>
        { !! $details['title'] !! }
    </title>
</head>
<body>
<img  style="margin:20px auto; height: 80px;" src="http://wholesale.first-meeting.net/images/logo.jpg">
<h1 style="text-align:center">{!!html_entity_decode($details['title'])!!}</h1>
<p>{{ $details['body'] }}</p>
@if($details['link'] != '')
    <a href="{{ $details['link']  }}">{{  $details['link_msg'] }}</a>
@endif
<p>{{  trans('keywords.thank_you') }}</p>
</body>
</html>
