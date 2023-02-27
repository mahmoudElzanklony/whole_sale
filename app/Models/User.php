<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $fillable = [
        'username',
        'email',
        'password',
        'serial_number',
        'phone',
        'image',
        'block',
        'role_id',
        'country_id',
        'total_points',
        'trade_licence',
        'bank_info',
        'brand_names'

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function privileges(){
        return $this->belongsToMany(privillages::class,users_privillages::class,'user_id','privillage_id');
    }
    public function role(){
        return $this->belongsTo(roles::class,'role_id');
    }

    public function country(){
        return $this->belongsTo(countries::class,'country_id');
    }

    public function listings(){
        return $this->hasMany(listings_info::class,'user_id');
    }


}
