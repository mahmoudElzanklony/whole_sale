<!DOCTYPE html>
<html>
<head>
    <title>
        { !! $details['title'] !! }
    </title>
</head>
<body>
<div style="padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <img  style="margin:20px auto; height: 80px;" src="https://wholesale.mkena.com/images/logo.png">
    <h1 style="text-align:center; margin-bottom: 20px">{!!html_entity_decode($details['title'])!!}</h1>
    <p>{{ $details['body'] }}</p>
    @if($details['link'] != '')
        <a href="{{ $details['link']  }}">{{  $details['link_msg'] }}</a>
    @endif
    <p>{{  trans('keywords.thank_you') }}</p>
</div>
</body>
</html>
