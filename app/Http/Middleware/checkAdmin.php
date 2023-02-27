<?php

namespace App\Http\Middleware;

use App\Models\privillages;
use App\Models\users_privillages;
use Closure;
use Illuminate\Http\Request;

class checkAdmin
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
        if(session()->has('type') && (session()->get('type') == 'admin') || session()->get('type') == 'supervisor') {
            if(session()->get('type') == 'supervisor'){
                if(request()->segment(2) != null){
                    $check = request()->segment(2);
                }else{
                    $check = '';
                }
                $user_check = users_privillages::query()
                    ->where('user_id','=',auth()->id())
                    ->whereHas('privillage',function ($e) use ($check){
                   $e->where('en_name','=',$check);
                })->first();
                if($user_check == null){
                    $primission = users_privillages::query()
                        ->where('user_id','=',auth()->id())->first();
                    return redirect('/dashboard/'.$primission->privillage->en_name);
                }
            }
            return $next($request);
        }else{
            return redirect('/login');
        }
    }
}
