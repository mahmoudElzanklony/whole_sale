<!DOCTYPE html>
<html>
<head>
    <title>
        { !! $details['title'] !! }
    </title>
</head>
<body>
<div style="padding: 10px; border: 1px solid #ddd; border-radius: 8px;">

    <img  src="https://wholesale.mkena.com/images/logo_email.png">
    @if(is_array($details['title']))
        <h1 style="text-align:center; margin-bottom: 20px">
            @foreach($details['title']['ar'] as $b)
                <span>{!!html_entity_decode($b)!!}</span>
            @endforeach
            <br>
            @foreach($details['title']['en'] as $b)
                <span>{!!html_entity_decode($b)!!}</span>
            @endforeach
        </h1>
    @else
        <h1 style="text-align:center; margin-bottom: 20px">{!!html_entity_decode($details['title'])!!}</h1>
    @endif

    @if(is_array($details['body']))
        <div>
            <p style="direction: rtl !important;">
            @foreach($details['body']['ar'] as $b)
            <span>{!!html_entity_decode($b)!!}</span>
            @endforeach
            </p>
            <p style="direction: ltr !important;">
            @foreach($details['body']['en'] as $b)
                <span>{!!html_entity_decode($b)!!}</span>
            @endforeach
            </p>
        </div>
    @else
        <p>{{ $details['body'] }}</p>
    @endif


    @if($details['link'] != '')
        <a href="{{ $details['link']  }}">{{  $details['link_msg'] }}</a>
    @endif
    <p>{{  trans('keywords.thank_you') }}</p>
</div>
</body>
</html>
