<?php


namespace App\Handling_Data\profile;


use App\Models\listings_info;

class listing_dashboard
{
    public static function handle_data($type){
        $listing_type = explode("_",$type)[0];
        $data =
            [
                'live_listings'=>[
                    'text'=>trans('keywords.live_listings_txt_info'),
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                        'payment_status'=>trans('keywords.payment_status'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ],
                'rejected_listings'=>[
                    'text'=>trans('keywords.rejected_listings_txt_info'),
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_rejected_reasons'=>trans('keywords.listing_rejected_reasons'),
                        'payment_status'=>trans('keywords.payment_status'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ],
                'expired_listings'=>[
                    'text'=>trans('keywords.expired_listings_txt_info'),
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                        'payment_status'=>trans('keywords.payment_status'),
                    ]
                ],
                'pending_listings'=>[
                    'text'=>trans('keywords.pending_listings_txt_info'),
                    'more_text_info'=>[
                        trans('keywords.pending_listings_txt_info_first'),
                        trans('keywords.pending_listings_txt_info_second'),
                        trans('keywords.pending_listings_txt_info_third'),
                    ],
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                        'payment_status'=>trans('keywords.payment_status'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ],
                'deleted_listings'=>[
                    'text'=>trans('keywords.deleted_listings_txt_info'),
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'payment_status'=>trans('keywords.payment_status'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                    ]
                ],
                'draft_listings'=>[
                    'text'=>trans('keywords.draft_listings_txt_info'),
                    'table_keywords'=>[
                        'id_or_keyword'=>trans('keywords.id_or_keyword'),
                        'listing_details_info'=>trans('keywords.listing_details_info'),
                        'actions'=>trans('keywords.actions'),
                    ]
                ]
            ];
        $data[$type]['count'] = [
            listings_info::query()
                ->where('user_id','=',auth()->id())
                ->where('type','=','live')->count(),
            listings_info::query()
                ->where('user_id','=',auth()->id())
                ->where('type','=','rejected')->count(),
            listings_info::query()
                ->where('user_id','=',auth()->id())
                ->where('type','=','expired')->count(),
            listings_info::query()
                ->where('user_id','=',auth()->id())
                ->where('type','=','pending')->count(),
            listings_info::query()
                ->where('user_id','=',auth()->id())
                ->onlyTrashed()->count(),
            session()->has('listing') ? 1:0,
        ];
        if($listing_type == "deleted"){
            $data[$type]['data'] = $data[$type]['data'] = listings_info::query()
                ->where('user_id', '=', auth()->id())
                ->select('id', app()->getLocale() . '_name as name')
                ->onlyTrashed()->get();
        }else {
            $data[$type]['data'] = listings_info::query()
                ->where('user_id', '=', auth()->id())
                ->where('type', '=', $listing_type)
                ->select('id', app()->getLocale() . '_info as info','payment_status')
                ->get();
        }


        return $data[$type];
    }
}
