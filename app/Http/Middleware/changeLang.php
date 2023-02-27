<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class changeLang
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(session()->has('lang')) {
            app()->setLocale(session()->get('lang'));
        }else if($request->filled('lang')){
            if($request->get('lang') == 'ar' || $request->get('lang') == 'en'){
                app()->setLocale($request->get('lang'));
            }

        }else{
            app()->setLocale('ar');
        }
        return $next($request);
    }
}
